/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import CLink from '../link/CLink';

const CCardLink = (props: any) => {
  return (
    <>
      <CLink {...props} className={['card-link', props.className]} />
    </>
  );
};

export default CCardLink;
