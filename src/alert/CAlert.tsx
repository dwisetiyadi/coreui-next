/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { omitByKeys } from '@coreui/utils';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import CButtonClose from '../button/CButtonClose';
import CFade from '../fade/CFade';
import { CFadeProps } from '../utils/helper';

// component - CoreUI / CAlert
const CAlert = (props: any) => {
  const {
    children,
    className,
    innerRef,
    //
    onShowChange,
    closeButton,
    color,
    fade,
    show,
    ...attributes
  } = props;

  // render
  const classes = classNames(className, 'alert', {
    [`alert-${color}`]: color,
    'alert-dismissible': closeButton,
  });

  const alertTransition = {
    // @ts-ignore
    baseClass: fade ? CFade.baseClass : '',

    // @ts-ignore
    timeout: fade ? CFade.timeout : 0,
    unmountOnExit: true,
  };

  const [isOpen, setIsOpen] = useState(show);

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  const timeout = useRef();

  useEffect(() => {
    onShowChange && onShowChange(isOpen);
    clearTimeout(timeout.current);
    if (typeof isOpen === 'number' && isOpen > 0) {
      // @ts-ignore
      timeout.current = setTimeout(() => {
        setIsOpen(isOpen - 1);
      }, 1000);
    }
    return () => clearTimeout(timeout.current);
  }, [isOpen, onShowChange]);

  const attrs = omitByKeys(attributes, CFadeProps);

  return (
    <>
      <CFade
        {...alertTransition}
        className={classes}
        in={Boolean(isOpen)}
        role="alert"
        {...attrs}
        innerRef={innerRef}
      >
        {children}
        {closeButton && <CButtonClose onClick={() => setIsOpen(false)} />}
      </CFade>
    </>
  );
};

CAlert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  onShowChange: PropTypes.func,
  closeButton: PropTypes.bool,
  color: PropTypes.string,
  fade: PropTypes.bool,
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

CAlert.defaultProps = {
  show: true,
  fade: true,
};

export default CAlert;
