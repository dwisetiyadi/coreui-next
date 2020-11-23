/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';

// component - CoreUI / CImg
const CImg = (props: any) => {
  const {
    className,
    //
    innerRef,
    fluid,
    block,
    thumbnail,
    shape,
    align,
    src,
    width,
    height,
    placeholderColor,
    fluidGrow,
    ...attributes
  } = props;

  let alignClass = '';
  if (align === 'center') alignClass = 'mx-auto';
  if (align === 'right') alignClass = 'float-right';
  if (align === 'left') alignClass = 'float-left';

  // render
  const classes = classNames(
    className,
    alignClass,
    thumbnail && 'img-thumbnail',
    fluid || (fluidGrow && 'img-fluid'),
    fluidGrow && 'w-100',
    block && 'd-block',
    shape
  );

  if (src) {
    return (
      <>
        <img
          className={classes}
          src={src}
          width={width}
          height={height}
          {...attributes}
          ref={innerRef}
        />
      </>
    );
  }
  return (
    <>
      <svg
        className={classes}
        width={width}
        height={height}
        style={{ backgroundColor: placeholderColor }}
        {...attributes}
        ref={innerRef}
      />
    </>
  );
};

CImg.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  block: PropTypes.bool,
  fluid: PropTypes.bool,
  fluidGrow: PropTypes.bool,
  shape: PropTypes.string, // oneOf(['', 'rounded']),
  thumbnail: PropTypes.bool,
  align: PropTypes.oneOf(['', 'left', 'right', 'center']),
  placeholderColor: PropTypes.string,
  alt: PropTypes.string,
};

CImg.defaultProps = {
  placeholderColor: 'transparent',
};

export default CImg;
