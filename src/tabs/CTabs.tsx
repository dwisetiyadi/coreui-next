/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// component - CoreUI / CTabPane
// @ts-ignore
export const Context = React.createContext();

const CTabs = (props: any) => {
  const { children, activeTab, onActiveTabChange } = props;

  const [active, setActive] = useState(0);
  useEffect(() => {
    activeTab !== undefined && setActive(activeTab);
  }, [activeTab]);

  const setActiveTab = (tab: any) => {
    onActiveTabChange && onActiveTabChange(tab);
    setActive(tab);
  };

  return (
    <>
      <Context.Provider value={{ active, setActiveTab }}>
        {children}
      </Context.Provider>
    </>
  );
};

CTabs.propTypes = {
  children: PropTypes.node,
  activeTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onActiveTabChange: PropTypes.func,
};

export default CTabs;
