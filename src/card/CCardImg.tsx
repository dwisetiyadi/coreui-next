/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';

import CImg from '../image/CImg';

// component - CoreUI / CCardImg
const CCardImg = (props: any) => {
  const { variant, ...rest } = props;
  const classSuffix = variant !== 'full' ? `-${variant}` : '';
  return (
    <>
      <CImg {...rest} className={[`card-img${classSuffix}`, rest.className]} />
    </>
  );
};

CCardImg.propTypes = {
  variant: PropTypes.oneOf(['', 'top', 'bottom', 'full']),
};

CCardImg.defaultProps = {
  variant: 'full',
};

export default CCardImg;
