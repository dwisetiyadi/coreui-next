/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint react/prop-types: 0 */
import React from 'react';

import CBrand from '../utils/CBrand';

// component - CoreUI / CSidebarBrand
const CSidebarBrand = (props: any) => {
  const { className } = props;
  return (
    <>
      <CBrand {...props} className={['c-sidebar-brand', className]} />
    </>
  );
};

export default CSidebarBrand;
