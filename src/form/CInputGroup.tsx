/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CInputGroup
const CInputGroup = (props: any) => {
  const {
    className,
    //
    innerRef,
    size,
    ...attributes
  } = props;

  // render

  const classes = classNames(
    'input-group',
    size && `input-group-${size}`,
    className
  );

  return (
    <>
      <div className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CInputGroup.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  size: PropTypes.string,
  children: PropTypes.node,
};

export default CInputGroup;
