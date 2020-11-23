/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CCarouselCaption

const CCarouselCaption = (props: any) => {
  const {
    className,
    //
    innerRef,
    ...attributes
  } = props;

  // render

  const classes = classNames('carousel-caption', className);

  return (
    <>
      <div className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CCarouselCaption.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default CCarouselCaption;
