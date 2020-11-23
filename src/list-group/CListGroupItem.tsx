/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import CLink from '../link/CLink';
import { tagPropType } from '../utils/helper';

// component - CoreUI / CListGroupItem

const CListGroupItem = (props: any) => {
  const {
    tag: Tag,
    className,
    //
    innerRef,
    active,
    disabled,
    action,
    color,
    accent,
    ...rest
  } = props;

  // render

  const classes = classNames(className, 'list-group-item', {
    'list-group-item-action':
      action || rest.href || rest.to || Tag === 'button',
    active,
    disabled,
    [`list-group-item-${color}`]: color,
    [`list-group-item-accent-${accent}`]: accent,
  });

  const { href, to } = props;

  if (href || to) {
    return (
      <>
        <CLink {...rest} className={classes} innerRef={innerRef} />
      </>
    );
  }
  return (
    <>
      <Tag {...rest} className={classes} ref={innerRef} />
    </>
  );
};

CListGroupItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.any,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  accent: PropTypes.string,
  action: PropTypes.bool,
  children: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

CListGroupItem.defaultProps = {
  tag: 'li',
};

export default CListGroupItem;
