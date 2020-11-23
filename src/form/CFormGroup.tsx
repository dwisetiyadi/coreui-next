/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CFormGroup
const CFormGroup = (props: any) => {
  const {
    className,
    //
    innerRef,
    row,
    disabled,
    variant,
    inline,
    ...attributes
  } = props;

  // render
  const checkClass =
    variant && variant.includes('custom') ? 'custom-control' : 'form-check';

  const classes = classNames(
    row && 'row',
    !variant && 'form-group',
    variant && checkClass,
    variant === 'custom-radio' && 'custom-radio',
    variant === 'custom-checkbox' && 'custom-checkbox',
    variant && inline && `${checkClass}-inline`,
    variant && disabled && 'disabled',
    className
  );

  return (
    <>
      <div className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CFormGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  row: PropTypes.bool,
  variant: PropTypes.oneOf(['checkbox', 'custom-checkbox', 'custom-radio']),
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default CFormGroup;
