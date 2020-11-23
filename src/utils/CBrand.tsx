/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import CLink from '../link/CLink';
import { tagPropType } from './helper';

// component - CoreUI / CBrand
const CBrand = (props: any) => {
  const {
    tag,
    className,
    //
    innerRef,
    ...attributes
  } = props;

  // render

  const classes = classNames(className);

  const Tag = attributes.to || attributes.href ? CLink : tag;
  const ref = { [`${typeof Tag === 'string' ? 'ref' : 'innerRef'}`]: innerRef };
  return (
    <>
      <Tag className={classes} {...attributes} {...ref} />
    </>
  );
};

CBrand.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

CBrand.defaultProps = {
  tag: 'div',
};

export default CBrand;
