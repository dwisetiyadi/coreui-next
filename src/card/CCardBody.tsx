/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';
import { sharedPropTypes } from './CCard';
// component - CoreUI / CCardBody

const CCardBody = (props: any) => {
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
    'card-body',
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

CCardBody.propTypes = {
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

CCardBody.defaultProps = {
  tag: 'div',
};

export default CCardBody;
