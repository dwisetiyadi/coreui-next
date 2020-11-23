/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CSidebarNavTitle

const CSidebarNavTitle = (props: any) => {
  const {
    className,
    //
    innerRef,
    ...attributes
  } = props;

  // render
  const classes = classNames('c-sidebar-nav-title', className);

  return (
    <>
      <li className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CSidebarNavTitle.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default CSidebarNavTitle;
