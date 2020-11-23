/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CCallout

const CCallout = (props: any) => {
  const {
    className,
    //
    innerRef,
    color,
    ...attributes
  } = props;

  // render

  const classes = classNames(
    'c-callout',
    color ? `c-callout-${color}` : null,
    className
  );

  return (
    <>
      <div className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CCallout.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  color: PropTypes.string,
  children: PropTypes.node,
};

export default CCallout;
