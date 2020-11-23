/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';

// component - CoreUI / CNavbar

const CNavbar = (props: any) => {
  const {
    tag: Tag,
    className,
    //
    innerRef,
    expandable,
    light,
    fixed,
    sticky,
    color,
    ...attributes
  } = props;

  // render

  const navbarExpandOption = expandable === true ? '' : `-${expandable}`;

  const classes = classNames(
    'navbar',
    className,
    light ? 'navbar-light' : 'navbar-dark',
    {
      [`navbar-expand${navbarExpandOption}`]: expandable,
      [`bg-${color}`]: color,
      [`fixed-${fixed}`]: fixed,
      'sticky-top': sticky,
    }
  );

  return (
    <>
      <Tag className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CNavbar.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  light: PropTypes.bool,
  color: PropTypes.string,
  fixed: PropTypes.oneOf(['', 'top', 'bottom']),
  sticky: PropTypes.bool,
  expandable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  children: PropTypes.node,
  toggleable: PropTypes.string,
};

CNavbar.defaultProps = {
  tag: 'nav',
};

export default CNavbar;
