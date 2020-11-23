/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, { createRef, useContext, useEffect, useState } from 'react';

import CLink from '../link/CLink';
import { Context } from '../tabs/CTabs';

const getIndex = (el: any) => Array.from(el.parentNode.children).indexOf(el);

const getState = ({ current: el }: any) => {
  const hasSiblings = el.parentElement.childNodes.length > 1;
  return el.dataset.tab || getIndex(hasSiblings ? el : el.parentElement);
};

const CNavLink = (props: any) => {
  const { innerRef, className, onClick, ...rest } = props;

  const tabState = useContext(Context);
  // @ts-ignore
  const actTab = (tabState || {}).active;
  const ref = createRef();
  innerRef && innerRef(ref);
  const [active, setActive] = useState();

  useEffect(() => {
    // @ts-ignore
    typeof actTab !== 'undefined' && setActive(getState(ref) === actTab);
  }, [actTab]);

  const click = (e: any) => {
    onClick && onClick(e);
    // @ts-ignore
    tabState && tabState.setActiveTab(getState(ref));
  };

  return (
    <>
      <CLink
        active={active}
        {...rest}
        innerRef={ref}
        onClick={click}
        className={['nav-link', className]}
      />
    </>
  );
};

CNavLink.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  onClick: PropTypes.func,
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default CNavLink;
