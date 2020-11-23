/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

export const Context = React.createContext({});

// component - CoreUI / CCarousel

const CCarousel = (props: any) => {
  const {
    className,
    //
    innerRef,
    autoSlide,
    activeIndex,
    animate,
    onSlideChange,
    ...attributes
  } = props;

  const [state, setState] = useState([null, activeIndex]);
  const [itemNumber, setItemNumber] = useState(null);
  const [animating, setAnimating] = useState();

  useEffect(() => {
    setState([state[1], activeIndex]);
  }, [activeIndex, state]);

  const timeout = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setNext = () => {
    reset();
    if (autoSlide) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      timeout.current = setTimeout(() => nextItem(), autoSlide);
    }
  };
  const reset = () => clearTimeout(timeout.current);
  const nextItem = () => {
    setState([
      state[1],
      itemNumber === state[1] + 1 ? 0 : state[1] + 1,
      'next',
    ]);
  };

  useEffect(() => {
    onSlideChange && onSlideChange(state[1]);
    setNext();
    return () => reset();
  }, [onSlideChange, setNext, state]);

  const classes = classNames('carousel', className);
  return (
    <>
      <div
        className={classes}
        onMouseEnter={reset}
        onMouseLeave={setNext}
        {...attributes}
        ref={innerRef}
      >
        <Context.Provider
          value={{
            state,
            setState,
            animate,
            itemNumber,
            setItemNumber,
            animating,
            setAnimating,
          }}
        >
          {props.children}
        </Context.Provider>
      </div>
    </>
  );
};

CCarousel.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.array,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  activeIndex: PropTypes.number,
  autoSlide: PropTypes.number,
  animate: PropTypes.bool,
  onSlideChange: PropTypes.func,
};

CCarousel.defaultProps = {
  activeIndex: 0,
};

export default CCarousel;
