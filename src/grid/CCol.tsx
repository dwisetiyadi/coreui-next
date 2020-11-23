/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';

const stringOrNumberProp = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);
const columnProps = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.shape({
    size: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
    order: stringOrNumberProp,
    offset: stringOrNumberProp,
  }),
]);

const getColumnSizeClass = (isXs: any, colWidth: any, colSize: any) => {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : `col-${colWidth}`;
  }
  if (colSize === 'auto') {
    return isXs ? 'col-auto' : `col-${colWidth}-auto`;
  }
  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
};

// component - CoreUI / CCol
const CCol = (props: any) => {
  const {
    tag: Tag,
    className,
    //
    innerRef,
    widths,
    ...attributes
  } = props;

  // render

  const colClasses = [];
  widths.forEach((colWidth: any, i: any) => {
    const columnProp = props[colWidth];
    delete attributes[colWidth];
    if (!columnProp && columnProp !== '') {
      return;
    }
    const isXs = !i;
    if (typeof columnProp === 'object') {
      const colSizeInterfix = isXs ? '-' : `-${colWidth}-`;
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

      colClasses.push(
        // @ts-ignore
        classNames({
          [colClass]: columnProp.size || columnProp.size === '',
          [`order${colSizeInterfix}${columnProp.order}`]:
            columnProp.order || columnProp.order === 0,
          [`offset${colSizeInterfix}${columnProp.offset}`]:
            columnProp.offset || columnProp.offset === 0,
        })
      );
    } else {
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      // @ts-ignore
      colClasses.push(colClass);
    }
  });

  if (!colClasses.length) {
    // @ts-ignore
    colClasses.push('col');
  }

  const classes = classNames(className, colClasses);

  return (
    <>
      <Tag {...attributes} className={classes} ref={innerRef} />
    </>
  );
};

CCol.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  xxl: columnProps,
  size: columnProps,
  col: columnProps,
  widths: PropTypes.array,
  children: PropTypes.node,
};

CCol.defaultProps = {
  tag: 'div',
  widths: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
};

export default CCol;
