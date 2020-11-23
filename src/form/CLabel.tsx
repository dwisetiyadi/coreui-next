/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import CCol from '../grid/CCol';
import { tagPropType } from '../utils/helper';

// component - CoreUI / CLabel
const CLabel = (props: any) => {
  const {
    tag,
    className,
    //
    innerRef,
    hidden,
    variant,
    col,
    ...attributes
  } = props;

  // render
  const classes = classNames(
    hidden && 'sr-only',
    variant === 'custom-checkbox' && 'custom-control-label',
    variant === 'checkbox' && 'form-check-label',
    variant === 'custom-file' && 'custom-file-label',
    col && 'col-form-label',
    col && typeof col === 'string' && `col-form-label-${col}`,
    className
  );

  const Tag = col ? CCol : tag;
  const addLabelTag = col && { tag };

  return (
    <>
      <Tag
        className={classes}
        {...addLabelTag}
        {...attributes}
        ref={innerRef}
      />
    </>
  );
};

CLabel.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  hidden: PropTypes.bool,
  variant: PropTypes.oneOf(['custom-file', 'checkbox', 'custom-checkbox']),
  col: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  htmlFor: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
};

CLabel.defaultProps = {
  tag: 'label',
};

export default CLabel;
