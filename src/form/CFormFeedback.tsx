/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CFormFeedback

const CFormFeedback = (props: any) => {
  const {
    className,
    //
    innerRef,
    valid,
    tooltip,
    ...attributes
  } = props;

  // render
  const validMode = tooltip ? 'tooltip' : 'feedback';
  const classes = classNames(
    valid ? `valid-${validMode}` : `invalid-${validMode}`,
    className
  );

  return (
    <>
      <div className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CFormFeedback.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  valid: PropTypes.bool,
  tooltip: PropTypes.bool,
};

export const CValidFeedback = (props: any) => (
  <>
    <CFormFeedback {...props} valid />
  </>
);
export const CInvalidFeedback = (props: any) => (
  <>
    <CFormFeedback {...props} valid={false} />
  </>
);
