/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CButtonToolbar

const CButtonToolbar = (props: any) => {
  const {
    className,
    //
    innerRef,
    justify,
    ...attributes
  } = props;

  // render

  const classes = classNames(className, 'btn-toolbar', {
    [`justify-content-${justify}`]: justify,
  });

  return (
    <>
      <div
        className={classes}
        role="toolbar"
        aria-label="toolbar"
        {...attributes}
        ref={innerRef}
      />
    </>
  );
};

CButtonToolbar.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  role: PropTypes.string,
  justify: PropTypes.oneOf(['', 'start', 'end', 'between', 'center']),
  children: PropTypes.node,
};

export default CButtonToolbar;
