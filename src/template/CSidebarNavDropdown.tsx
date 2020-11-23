/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CIcon } from '../icon/coreui-icons-react';
import classNames from 'classnames';
// import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, {
  createRef,
  isValidElement,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Context } from './CSidebar';

export const DropdownContext = React.createContext({});

export const iconProps = (icon: any) => {
  if (typeof icon === 'object') {
    const key = icon.size ? 'className' : 'customClasses';
    return {
      ...icon,
      [`${key}`]: icon.customClasses || `c-sidebar-nav-icon ${icon.className}`,
    };
  }
  return {
    customClasses: 'c-sidebar-nav-icon',
    name: icon,
  };
};

// component - CoreUI / CSidebarNavDropdown
const CSidebarNavDropdown = (props: any) => {
  const {
    children,
    className,
    //
    innerRef,
    icon,
    fontIcon,
    name,
    show,
    to,
    // route,
    nextRouter,
    ...attributes
  } = props;

  const ref = createRef();
  innerRef && innerRef(ref);

  // @ts-ignore
  const { dropdownMode, openDropdown, setOpenDropdown } = useContext(Context);

  const [isOpen, setIsOpen] = useState(show);
  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  useEffect(() => {
    !dropdownMode && // @ts-ignore
      (!openDropdown || !ref.current.contains(openDropdown)) &&
      setIsOpen(false);
  }, [openDropdown]);

  const toggle = () => {
    !dropdownMode &&
      setOpenDropdown(
        isOpen // @ts-ignore
          ? ref.current.parentNode.closest('.c-sidebar-nav-dropdown')
          : ref.current
      );
    setIsOpen(!isOpen);
  };

  const path = typeof nextRouter === "function" ? nextRouter() : { includes: () => null };

  useEffect(() => {
    if (dropdownMode === 'close') {
      setIsOpen(false);
      // } else if (dropdownMode === 'closeInactive' && route) {
      //   setIsOpen(path.includes(route));
    } else if (dropdownMode === 'closeInactive') {
      setIsOpen(false);
    } else if (
      (!dropdownMode || dropdownMode !== 'noAction') &&
      !isOpen
      // route
    ) {
      setIsOpen(false);
    }
  }, [path]);

  // render
  const classes = classNames(
    'c-sidebar-nav-dropdown',
    isOpen && 'c-show',
    className
  );

  const iconClasses = classNames('c-sidebar-nav-icon', fontIcon);

  return (
    <>
      <li className={classes} {...attributes} ref={ref} key={`0/${to}`}>
        <a
          className="c-sidebar-nav-dropdown-toggle"
          // @ts-ignore
          tabIndex="0"
          onClick={toggle}
          aria-label="menu dropdown"
        >
          {icon &&
            (isValidElement(icon) ? icon : <CIcon {...iconProps(icon)} />)}
          {fontIcon && <i className={iconClasses} />}
          {name}
        </a>
        <ul className="c-sidebar-nav-dropdown-items">
          <DropdownContext.Provider value={{ isOpen }}>
            {children}
          </DropdownContext.Provider>
        </ul>
      </li>
    </>
  );
};

CSidebarNavDropdown.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fontIcon: PropTypes.string,
  show: PropTypes.bool,
  route: PropTypes.string,
  nextRouter: PropTypes.any,
  to: PropTypes.string,
};

export default CSidebarNavDropdown;
