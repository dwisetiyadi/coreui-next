/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CButtonGroup

const CButtonGroup = (props: any) => {
  const {
    className,
    //
    innerRef,
    size,
    vertical,
    ...attributes
  } = props;

  // render

  const classes = classNames(
    className,
    size ? `btn-group-${size}` : false,
    vertical ? 'btn-group-vertical' : 'btn-group'
  );

  return (
    <>
      <div className={classes} role="group" {...attributes} ref={innerRef} />
    </>
  );
};

CButtonGroup.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  size: PropTypes.oneOf(['', 'sm', 'lg']),
  vertical: PropTypes.bool,
  children: PropTypes.node,
};

export default CButtonGroup;
