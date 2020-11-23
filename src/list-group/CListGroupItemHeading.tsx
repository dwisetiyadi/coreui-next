/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';

// component - CoreUI / CListGroupItemHeading
const CListGroupItemHeading = (props: any) => {
  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props;

  // render
  const classes = classNames('list-group-item-heading', className);

  return (
    <>
      <Tag className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CListGroupItemHeading.propTypes = {
  tag: tagPropType,
  className: PropTypes.any,
  //
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
};

CListGroupItemHeading.defaultProps = {
  tag: 'h5',
};

export default CListGroupItemHeading;
