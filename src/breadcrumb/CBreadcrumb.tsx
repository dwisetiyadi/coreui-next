/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CBreadcrumb

const CBreadcrumb = (props: any) => {
  const {
    className,
    innerRef,
    //
    ...attributes
  } = props;

  const classes = classNames(className, 'breadcrumb');

  // render
  return (
    <>
      <ol className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CBreadcrumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default CBreadcrumb;
