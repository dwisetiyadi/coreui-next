/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { Context } from './CCarousel';

// component - CoreUI / CCarouselControl

const CCarouselControl = (props: any) => {
  const {
    className,
    children,
    //
    innerRef,
    direction,
    ...attributes
  } = props;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { state, setState, itemNumber, animating } = useContext(Context);

  const onClick = () => {
    if (animating) {
      return;
    }
    let newIdx;
    if (direction === 'next') {
      newIdx = itemNumber === state[1] + 1 ? 0 : state[1] + 1;
    } else {
      newIdx = state[1] === 0 ? itemNumber - 1 : state[1] - 1;
    }
    setState([state[1], newIdx, direction]);
  };

  // render

  const anchorClasses = classNames(`carousel-control-${direction}`, className);

  return (
    <>
      <Link
        className={anchorClasses}
        {...attributes}
        onClick={onClick}
        ref={innerRef}
      >
        <a>
          {children || (
            <span
              className={`carousel-control-${direction}-icon`}
              aria-label={direction}
            />
          )}
        </a>
      </Link>
    </>
  );
};

CCarouselControl.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
};

export default CCarouselControl;
