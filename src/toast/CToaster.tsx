/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CToaster

const CToaster = (props: any) => {
  const {
    className,
    //
    innerRef,
    position,
    ...attributes
  } = props;

  // inherit closeButton, autohide, fade??
  // render
  const classes = classNames(
    'toaster',
    position && position !== 'static' && `toaster-${position}`,
    className
  );

  return (
    <>
      <div className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CToaster.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  position: PropTypes.oneOf([
    '',
    'static',
    'top-right',
    'top-left',
    'top-center',
    'top-full',
    'bottom-right',
    'bottom-left',
    'bottom-center',
    'bottom-full',
  ]),
  children: PropTypes.node,
};

CToaster.defaultProps = {
  position: 'top-right',
};

export default CToaster;
