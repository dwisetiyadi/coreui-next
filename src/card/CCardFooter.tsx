/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';
import { sharedPropTypes } from './CCard';

// component - CoreUI / CCardFooter

const CCardFooter = (props: any) => {
  const {
    tag: Tag,
    className,
    //
    innerRef,
    color,
    textColor,
    borderColor,
    align,
    ...attributes
  } = props;

  // render

  const classes = classNames(
    className,
    'card-footer',
    align ? `text-${align}` : false,
    textColor ? `text-${textColor}` : false,
    color ? `bg-${color}` : false,
    borderColor ? `border-${borderColor}` : false
  );

  return (
    <>
      <Tag className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CCardFooter.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  children: PropTypes.node,
  ...sharedPropTypes,
};

CCardFooter.defaultProps = {
  tag: 'footer',
};

export default CCardFooter;
