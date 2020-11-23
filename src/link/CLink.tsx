/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
// import { NavLink } from 'react-router-dom'
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CLink
const CLink = (props: any) => {
  const {
    className,
    //
    innerRef,
    active,
    href,
    onClick,
    disabled,
    children,
    ...rest
  } = props;

  const to = rest ? rest.to : null;
  const click = (e: any) => {
    if ((!href && !to) || href === '#') {
      e.preventDefault();
    }
    !disabled && onClick && onClick(e);
  };

  // render

  const classes = classNames(
    active && 'active',
    disabled && 'disabled',
    className
  );

  if (to) {
    return (
      <Link href={to}>
        <a className={classes} onClick={click} ref={innerRef} {...rest}>
          {children !== null && children}
        </a>
      </Link>
    );
  }
  return (
    <Link href={href || '/'}>
      <a
        className={classes}
        onClick={click}
        ref={innerRef}
        rel={rest.target === '_blank' ? 'noopener norefferer' : null}
        {...rest}
      >
        {children !== null && children}
      </a>
    </Link>
  );
};

CLink.propTypes = {
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  active: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  // ...NavLink.propTypes,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  children: PropTypes.node,
  rel: PropTypes.string,
  target: PropTypes.string,
};

// CLink.sortAttributes = (attributesToSort) => {
//   const attributes = {}
//   const linkProps = {}
//   Object.entries(attributesToSort || {}).forEach(([key, value]) => {
//     if (Object.keys(CLink.propTypes).includes(key)) {
//       linkProps[key] = value
//     } else {
//       attributes[key] = value
//     }
//   })
//   return { linkProps, attributes }
// }

export default CLink;
