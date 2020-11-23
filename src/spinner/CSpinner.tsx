/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';

// component - CoreUI / CSpinner

const CSpinner = (props: any) => {
  const {
    tag: Tag,
    className,
    //
    innerRef,
    grow,
    size,
    color,
    ...attributes
  } = props;

  // render
  const type = grow ? 'grow' : 'border';

  const classes = classNames(
    `spinner-${type}`,
    size && `spinner-${type}-${size}`,
    color && `text-${color}`,
    className
  );

  return (
    <>
      <Tag
        className={classes}
        aria-hidden="false"
        aria-label="Loading"
        role="status"
        {...attributes}
        ref={innerRef}
      />
    </>
  );
};

CSpinner.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  grow: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string,
};

CSpinner.defaultProps = {
  tag: 'div',
};

export default CSpinner;
