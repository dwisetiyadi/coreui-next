/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CInputGroupAddon
const CInputGroupAddon = (props: any) => {
  const {
    children,
    className,
    //
    innerRef,
    prepend,
    ...attributes
  } = props;

  // render
  const classes = classNames(
    `input-group-${prepend ? 'prepend' : 'append'}`,
    className
  );

  return (
    <>
      <div className={classes} {...attributes} ref={innerRef}>
        {children}
      </div>
    </>
  );
};

CInputGroupAddon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  prepend: PropTypes.bool,
};

export const CInputGroupAppend = (props: any) => (
  <>
    <CInputGroupAddon {...props} prepend={false} />
  </>
);
export const CInputGroupPrepend = (props: any) => (
  <>
    <CInputGroupAddon {...props} prepend />
  </>
);
