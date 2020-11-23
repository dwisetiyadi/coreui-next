/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CButtonClose

const CButtonClose = (props: any) => {
  const {
    children,
    className,
    //
    buttonClass,
    innerRef,
    onClick,
    ...attributes
  } = props;

  // render

  const classes = classNames(buttonClass, className);

  return (
    <>
      <button
        className={classes}
        aria-label="Close"
        {...attributes}
        ref={innerRef}
      >
        {children || String.fromCharCode(215)}
      </button>
    </>
  );
};

CButtonClose.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  onClick: PropTypes.func,
  buttonClass: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

CButtonClose.defaultProps = {
  buttonClass: 'close',
};

export default CButtonClose;
