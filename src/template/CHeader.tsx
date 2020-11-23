/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CHeader

const CHeader = (props: any) => {
  const {
    tag: Tag,
    className,
    //
    innerRef,
    fixed,
    colorScheme,
    withSubheader,
    ...attributes
  } = props;

  // render

  const classes = classNames(
    className,
    'c-header',
    colorScheme ? `c-header-${colorScheme}` : null,
    fixed ? 'c-header-fixed' : null,
    withSubheader ? 'c-header-with-subheader' : null
  );

  return (
    <>
      <Tag className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  fixed: PropTypes.bool,
  withSubheader: PropTypes.bool,
  colorScheme: PropTypes.string,
};

CHeader.defaultProps = {
  tag: 'header',
  fixed: true,
  colorScheme: 'light',
};

export default CHeader;
