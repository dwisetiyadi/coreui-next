/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import CButtonClose from '../button/CButtonClose';
import { Context } from './CToast';

// component - CoreUI / CToastHeader
const CToastHeader = (props: any) => {
  const {
    className,
    children,
    //
    innerRef,
    closeButton,
    ...attributes
  } = props;

  // @ts-ignore
  const { close } = useContext(Context);

  // render
  const classes = classNames('toast-header', className);

  return (
    <>
      <div className={classes} {...attributes} ref={innerRef}>
        {children}
        {closeButton && <CButtonClose className="ml-auto" onClick={close} />}
      </div>
    </>
  );
};

CToastHeader.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  closeButton: PropTypes.bool,
};

CToastHeader.defaultProps = {
  closeButton: true,
};

export default CToastHeader;
