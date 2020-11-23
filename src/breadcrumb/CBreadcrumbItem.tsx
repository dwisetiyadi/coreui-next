/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CBreadcrumbItem

const CBreadcrumbItem = (props: any) => {
  const {
    className,
    //
    innerRef,
    active,
    ...attributes
  } = props;

  // render

  const classes = classNames(
    className,
    active ? 'active' : false,
    'breadcrumb-item'
  );

  return (
    <>
      <li
        className={classes}
        role="presentation"
        aria-current={active ? 'page' : undefined}
        {...attributes}
        ref={innerRef}
      />
    </>
  );
};

CBreadcrumbItem.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  children: PropTypes.node,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  active: PropTypes.bool,
};

export default CBreadcrumbItem;
