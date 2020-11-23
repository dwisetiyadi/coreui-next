/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import CDropdownItem from './CDropdownItem';

// component - CoreUI / CDropdownDivider

const CDropdownDivider = (props: any) => {
  return (
    <>
      <CDropdownItem {...props} divider />
    </>
  );
};

export default CDropdownDivider;
