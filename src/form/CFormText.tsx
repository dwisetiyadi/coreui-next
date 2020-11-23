/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';

// component - CoreUI / CFormText
const CFormText = (props: any) => {
  const {
    tag: Tag,
    className,
    innerRef,
    //
    color,
    ...attributes
  } = props;

  // render

  const classes = classNames('form-text', color && `text-${color}`, className);

  return (
    <>
      <Tag className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CFormText.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  color: PropTypes.string,
};

CFormText.defaultProps = {
  tag: 'small',
  color: 'muted',
};

export default CFormText;
