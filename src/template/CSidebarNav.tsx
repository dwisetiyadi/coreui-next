/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import CScrollbar from './CScrollbar';
import { Context } from './CSidebar';

// component - CoreUI / CSidebarNav
const CSidebarNav = (props: any) => {
  const {
    className,
    //
    innerRef,
    ...attributes
  } = props;

  // @ts-ignore
  const { scrollbarExist } = useContext(Context);

  const navClasses = classNames('c-sidebar-nav', 'h-100', className);

  // state
  const docHTML =
    typeof window !== 'undefined' ? document.querySelector('html') : '';
  const isRtl =
    typeof window !== 'undefined' // @ts-ignore
      ? window.getComputedStyle(docHTML).direction === 'rtl'
      : false;

  return (
    <>
      <CScrollbar
        settings={{ suppressScrollX: !isRtl }}
        className={navClasses}
        innerRef={innerRef}
        switcher={scrollbarExist}
        tag="ul"
        {...attributes}
      />
    </>
  );
};

CSidebarNav.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default CSidebarNav;
