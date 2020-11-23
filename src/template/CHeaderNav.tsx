/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CHeaderNav

const CHeaderNav = (props: any) => {
  const {
    className,
    //
    innerRef,
    ...attributes
  } = props;

  // render

  const classes = classNames(className, 'c-header-nav');

  return (
    <>
      <ul className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CHeaderNav.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  children: PropTypes.node,
};

export default CHeaderNav;
