/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import CDropdownItem from './CDropdownItem';

// component - CoreUI / CDropdownHeader

const CDropdownHeader = (props: any) => {
  return (
    <>
      <CDropdownItem {...props} header />
    </>
  );
};

export default CDropdownHeader;
