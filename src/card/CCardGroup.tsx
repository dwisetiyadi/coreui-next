/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';

// component - CoreUI / CCardGroup

const CCardGroup = (props: any) => {
  const {
    tag: Tag,
    className,
    //
    innerRef,
    deck,
    columns,
    ...attributes
  } = props;

  // render

  const classes = classNames(
    `card-${columns ? 'columns' : deck ? 'deck' : 'group'}`,
    className
  );

  return (
    <>
      <Tag className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CCardGroup.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  deck: PropTypes.bool,
  columns: PropTypes.bool,
  children: PropTypes.node,
};

CCardGroup.defaultProps = {
  tag: 'div',
};

export default CCardGroup;
