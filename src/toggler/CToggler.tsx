/* eslint-disable react/require-default-props */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';

// component - CoreUI / CToggler

const CToggler = (props: any) => {
  const {
    tag: Tag,
    children,
    className,
    //
    innerRef,
    inHeader,
    inNavbar,
    ...attributes
  } = props;

  const typeAttr = Tag === 'button' ? { type: 'button' } : null;
  const type = inNavbar ? 'navbar' : inHeader ? 'c-header' : null;
  const togglerClass = type ? `${type}-toggler` : '';
  const iconClass = type ? `${togglerClass}-icon` : '';

  // render
  const classes = classNames(togglerClass, className);

  return (
    <>
      <Tag className={classes} {...typeAttr} {...attributes} ref={innerRef}>
        {children || <span className={iconClass} />}
      </Tag>
    </>
  );
};

CToggler.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  inHeader: PropTypes.bool,
  inNavbar: PropTypes.bool,
  onClick: PropTypes.func,
};

CToggler.defaultProps = {
  tag: 'button',
};

export default CToggler;
