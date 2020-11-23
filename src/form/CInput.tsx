/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CInput
const commonPropTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

const CInput = (props: any) => {
  const {
    className,
    //
    innerRef,
    type,
    valid,
    invalid,
    plaintext,
    size,
    sizeHtml,
    ...attributes
  } = props;

  // render
  const classes = classNames(
    plaintext ? 'form-control-plaintext' : 'form-control',
    size && `form-control-${size}`,
    invalid && 'is-invalid',
    valid && 'is-valid',
    className
  );

  return (
    <>
      <input
        className={classes}
        type={type}
        {...attributes}
        size={sizeHtml}
        ref={innerRef}
      />
    </>
  );
};

CInput.propTypes = {
  ...commonPropTypes,
  plaintext: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string,
  sizeHtml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CInput.defaultProps = {
  type: 'text',
};

const CTextarea = (props: any) => {
  const {
    className,
    //
    innerRef,
    valid,
    invalid,
    plaintext,
    size,
    ...attributes
  } = props;

  // render
  const classes = classNames(
    plaintext ? 'form-control-plaintext' : 'form-control',
    size && `form-control-${size}`,
    invalid && 'is-invalid',
    valid && 'is-valid',
    className
  );

  return (
    <>
      <textarea className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CTextarea.propTypes = {
  ...commonPropTypes,
  plaintext: PropTypes.bool,
  size: PropTypes.string,
  rows: PropTypes.string,
};

const CInputFile = (props: any) => {
  const {
    className,
    //
    innerRef,
    valid,
    invalid,
    custom,
    ...attributes
  } = props;

  // render

  const classes = classNames(
    custom ? 'custom-file-input' : 'form-control-file',
    invalid && 'is-invalid',
    valid && 'is-valid',
    className
  );

  return (
    <>
      <input className={classes} {...attributes} type="file" ref={innerRef} />
    </>
  );
};

CInputFile.propTypes = {
  ...commonPropTypes,
  custom: PropTypes.bool,
  multiple: PropTypes.bool,
};

const CInputCheckbox = (props: any) => {
  const {
    className,
    //
    innerRef,
    valid,
    invalid,
    custom,
    ...attributes
  } = props;

  // render

  const classes = classNames(
    custom ? 'custom-control-input' : 'form-check-input',
    invalid && 'is-invalid',
    valid && 'is-valid',
    className
  );

  return (
    <>
      <input
        className={classes}
        type="checkbox"
        {...attributes}
        ref={innerRef}
      />
    </>
  );
};

CInputCheckbox.propTypes = {
  ...commonPropTypes,
  custom: PropTypes.bool,
  checked: PropTypes.bool,
};

const CInputRadio = (props: any) => (
  <>
    <CInputCheckbox {...props} type="radio" />
  </>
);

const CSelect = (props: any) => {
  const {
    className,
    //
    innerRef,
    valid,
    invalid,
    size,
    sizeHtml,
    custom,
    ...attributes
  } = props;

  // render
  const baseClass = custom ? 'custom-select' : 'form-control';
  const classes = classNames(
    baseClass,
    size && `${baseClass}-${size}`,
    invalid && 'is-invalid',
    valid && 'is-valid',
    className
  );

  return (
    <>
      <select
        className={classes}
        {...attributes}
        size={sizeHtml}
        ref={innerRef}
      />
    </>
  );
};

CSelect.propTypes = {
  ...commonPropTypes,
  size: PropTypes.string,
  sizeHtml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  custom: PropTypes.bool,
};

export { CInput, CTextarea, CInputFile, CInputCheckbox, CInputRadio, CSelect };
