/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CSidebarHeader

const CSidebarHeader = (props: any) => {
  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props;

  // render

  const classes = classNames('c-sidebar-header', className);

  return (
    <>
      <Tag className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CSidebarHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

CSidebarHeader.defaultProps = {
  tag: 'div',
};

export default CSidebarHeader;
