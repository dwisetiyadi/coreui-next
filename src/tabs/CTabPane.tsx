/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { omitByKeys } from '@coreui/utils';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef, useState } from 'react';

import CFade from '../fade/CFade';
import { CFadeProps } from '../utils/helper';
import { Context as FadeContext } from './CTabContent';
import { Context } from './CTabs';

// component - CoreUI / CTabPane
const getIndex = (el: any) => Array.from(el.parentNode.children).indexOf(el);

const getState = (r: any) => r.current.dataset.tab || getIndex(r.current);

const CTabPane = (props: any) => {
  const {
    className,
    //
    innerRef,
    active,
    ...attributes
  } = props;

  // @ts-ignore
  const { active: activeTab, setActiveTab } = useContext(Context) || {};
  const fade = useContext(FadeContext);
  const ref = typeof innerRef === 'object' ? innerRef : useRef();
  typeof innerRef === 'function' && innerRef(ref);

  const [isActive, setIsActive] = useState();

  useEffect(() => {
    // @ts-ignore
    setIsActive(activeTab === getState(ref));
  }, [activeTab]);

  useEffect(() => {
    if (active !== undefined) {
      setActiveTab
        ? setActiveTab(active && getState(ref))
        : setIsActive(active);
    }
  }, [active]);

  // render
  const classes = classNames('tab-pane', { active: isActive }, className);

  const attrs = omitByKeys(attributes, CFadeProps);

  return (
    <>
      <CFade
        in={isActive}
        baseClass={fade ? 'fade' : ''}
        className={classes}
        {...attrs}
        innerRef={ref}
      />
    </>
  );
};

CTabPane.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  active: PropTypes.bool,
  children: PropTypes.node,
};

export default CTabPane;
