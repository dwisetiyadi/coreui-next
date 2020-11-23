/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

import { Context } from './CCarousel';

// component - CoreUI / CCarouselItem
const getIndex = (el: any) => Array.from(el.parentNode.children).indexOf(el);

const getDirection = (state: any) => {
  if (state[2]) {
    return state[2] === 'next' ? 'right' : 'left';
  }
  return state[1] > state[0] ? 'right' : 'left';
};

const CCarouselItem = (props: any) => {
  const { children, className, innerRef, ...attributes } = props;

  const {
    // @ts-ignore
    animate,
    // @ts-ignore
    state,
    // @ts-ignore
    itemNumber,
    // @ts-ignore
    setItemNumber,
    // @ts-ignore
    animating,
    // @ts-ignore
    setAnimating,
  } = useContext(Context);

  const ref = typeof innerRef === 'object' ? innerRef : useRef();
  typeof innerRef === 'function' && innerRef(ref);

  const [isIn, setIsIn] = useState();

  useEffect(() => {
    if (!itemNumber) {
      setItemNumber(ref.current.parentNode.children.length);
    }
    // @ts-ignore
    setIsIn(state[1] === getIndex(ref.current));
  }, [state]);

  const onEnter = () => {
    setAnimating(false);
  };

  const onEntering = () => {
    /* eslint-disable no-unused-vars */
    const { offsetHeight } = ref.current;
    setAnimating(true);
    /* eslint-enable no-unused-vars */
  };

  const onExit = () => {
    setAnimating(false);
  };

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  // const nodeRef = React.useRef()

  // render
  if (!animate || state[0] === null) {
    const itemClasses = classNames(
      'carousel-item',
      isIn && 'active',
      className
    );
    return (
      <>
        <div className={itemClasses} ref={ref} {...attributes}>
          {children}
        </div>
      </>
    );
  }

  return (
    <>
      <Transition
        timeout={600}
        in={isIn}
        onEnter={onEnter}
        onEntering={onEntering}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
        nodeRef={ref}
      >
        {(status) => {
          const direction = getDirection(state);
          const isActive = status === 'entered' || status === 'exiting';
          const directionClassName =
            (status === 'entering' || status === 'exiting') &&
            animating &&
            (direction === 'right'
              ? 'carousel-item-left'
              : 'carousel-item-right');

          const orderClassName =
            status === 'entering' &&
            (direction === 'right'
              ? 'carousel-item-next'
              : 'carousel-item-prev');

          const itemClasses = classNames(
            'carousel-item',
            isActive && 'active',
            directionClassName,
            orderClassName,
            className
          );

          return (
            <div className={itemClasses} ref={ref} {...attributes}>
              {children}
            </div>
          );
        }}
      </Transition>
    </>
  );
};

CCarouselItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default CCarouselItem;
