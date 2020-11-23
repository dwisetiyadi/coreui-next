/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import CLink from '../link/CLink';
import { tagPropType } from '../utils/helper';

// component - CoreUI / CBadge

const CBadge = (props: any) => {
  const {
    tag,
    className,
    //
    innerRef,
    color,
    shape,
    ...attributes
  } = props;

  // render

  const classes = classNames(className, 'badge', {
    [`badge-${color}`]: color,
    [`badge-${shape}`]: shape,
  });

  const Tag = attributes.to || attributes.href ? CLink : tag;
  const ref = { [`${typeof Tag === 'string' ? 'ref' : 'innerRef'}`]: innerRef };

  return (
    <>
      <Tag className={classes} {...attributes} {...ref} />
    </>
  );
};

CBadge.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  color: PropTypes.string,
  shape: PropTypes.oneOf(['', 'pill']),
  children: PropTypes.node,
  style: PropTypes.object,
  href: PropTypes.string,
};

CBadge.defaultProps = {
  tag: 'span',
};

export default CBadge;
