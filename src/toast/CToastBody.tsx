/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CToastBody

const CToastBody = (props: any) => {
  const {
    className,
    //
    innerRef,
    ...attributes
  } = props;

  // render
  const classes = classNames('toast-body', className);

  return (
    <>
      <div className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CToastBody.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default CToastBody;
