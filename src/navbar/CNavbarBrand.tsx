/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint react/prop-types: 0 */
import React from 'react';

import CBrand from '../utils/CBrand';

// component - CoreUI / CNavbarBrand
const CNavbarBrand = (props: any) => {
  const { className } = props;
  return (
    <>
      <CBrand {...props} className={['navbar-brand', className]} />
    </>
  );
};

export default CNavbarBrand;
