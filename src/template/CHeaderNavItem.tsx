/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CHeaderNavItem

const CHeaderNavItem = (props: any) => {
  const {
    className,
    //
    innerRef,
    ...attributes
  } = props;

  // render

  const classes = classNames(className, 'c-header-nav-item');

  return (
    <>
      <li className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CHeaderNavItem.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  children: PropTypes.node,
};

export default CHeaderNavItem;
