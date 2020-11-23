/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';

// component - CoreUI / CCardTitle

const CCardTitle = (props: any) => {
  const { tag: Tag, className, innerRef, ...attributes } = props;

  // render

  const classes = classNames(className, 'card-title');

  return (
    <>
      <Tag {...attributes} className={classes} ref={innerRef} />
    </>
  );
};

CCardTitle.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

CCardTitle.defaultProps = {
  tag: 'h4',
};

export default CCardTitle;
