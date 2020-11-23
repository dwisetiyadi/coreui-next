/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CFooter
const CFooter = (props: any) => {
  const {
    tag: Tag,
    className,
    //
    innerRef,
    fixed,
    ...attributes
  } = props;

  // render
  const classes = classNames(
    'c-footer',
    fixed ? 'c-footer-fixed' : null,
    className
  );

  return (
    <>
      <Tag className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CFooter.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  fixed: PropTypes.bool,
};

CFooter.defaultProps = {
  tag: 'footer',
  fixed: false,
};

export default CFooter;
