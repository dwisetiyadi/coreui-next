/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CIcon } from '../icon/coreui-icons-react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { isValidElement, useContext } from 'react';

import { CBadge, CLink } from '../index';
import { DropdownContext, iconProps } from './CSidebarNavDropdown';

// component - CoreUI / CSidebarNavItem
const CSidebarNavItem = (props: any) => {
  const {
    children,
    className,
    //
    innerRef,
    name,
    icon,
    fontIcon,
    badge,
    addLinkClass,
    label,
    color,
    ...rest
  } = props;

  // @ts-ignore
  const { isOpen } = useContext(DropdownContext);
  const classes = classNames(
    'c-sidebar-nav-item',
    className
  );

  const linkClasses = classNames(
    label ? 'c-sidebar-nav-label' : 'c-sidebar-nav-link',
    color && `c-sidebar-nav-link-${color}`,
    addLinkClass,
    (rest.nextRouter === rest.to) ? 'c-active' : '',
  );

  if (rest.nextProps) {
    delete rest.nextProps;
  }

  // const routerLinkProps = rest.to && { exact: true, activeClassName: 'c-active' }
  return (
    <li className={classes} ref={innerRef}>
      { children ||
        <CLink
          className={linkClasses}
          // {...routerLinkProps}
          {...rest}
          tabIndex={isOpen === false ? -1 : 0}
        >
          {icon && (isValidElement(icon) ? icon : <CIcon {...iconProps(icon)} />)}
          {fontIcon && <i className={`c-sidebar-nav-icon ${fontIcon}`} />}
          {name}
          {badge && <CBadge {...{ ...badge, text: null }}>{badge.text}</CBadge>}
        </CLink>
      }
    </li>
  );
};

CSidebarNavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  fontIcon: PropTypes.string,
  badge: PropTypes.object,
  addLinkClass: PropTypes.string,
  label: PropTypes.bool,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  color: PropTypes.string,
  nextRouter: PropTypes.any,
};

export default CSidebarNavItem;
