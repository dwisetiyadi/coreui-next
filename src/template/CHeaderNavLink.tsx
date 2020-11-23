/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import CLink from '../link/CLink';

// component - CoreUI / CHeaderNavLink

const CHeaderNavLink = (props: any) => {
  const {
    className,
    //
    innerRef,
    ...rest
  } = props;

  // render

  const classes = classNames(className, 'c-header-nav-link');

  return (
    <>
      <CLink className={classes} {...rest} innerRef={innerRef} />
    </>
  );
};

CHeaderNavLink.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  children: PropTypes.node,
  to: PropTypes.string,
};

export default CHeaderNavLink;
