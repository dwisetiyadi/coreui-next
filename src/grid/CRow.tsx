/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';

// component - CoreUI / CRow
const CRow = (props: any) => {
  const {
    tag: Tag,
    className,
    //
    innerRef,
    gutters,
    form,
    alignHorizontal,
    alignVertical,
    ...attributes
  } = props;

  // render

  const classes = classNames(
    className,
    !gutters ? 'no-gutters' : null,
    alignHorizontal ? `justify-content-${alignHorizontal}` : null,
    alignVertical ? `align-${alignVertical}` : null,
    form ? 'form-row' : 'row'
  );

  return (
    <>
      <Tag className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CRow.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  gutters: PropTypes.bool,
  form: PropTypes.bool,
  alignHorizontal: PropTypes.string,
  alignVertical: PropTypes.string,
  children: PropTypes.node,
};

CRow.defaultProps = {
  tag: 'div',
  gutters: true,
};

export default CRow;
