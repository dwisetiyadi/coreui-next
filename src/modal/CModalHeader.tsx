/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import CButtonClose from '../button/CButtonClose';
import { tagPropType } from '../utils/helper';
import { Context } from './CModal';
// component - CoreUI / CModalHeader

const CModalHeader = (props: any) => {
  const {
    tag: Tag,
    className,
    //
    innerRef,
    closeButton,
    children,
    ...attributes
  } = props;

  // @ts-ignore
  const { close } = useContext(Context);

  // render

  const classes = classNames(className, 'modal-header');

  return (
    <>
      <Tag className={classes} {...attributes} ref={innerRef}>
        {children}
        {closeButton && <CButtonClose onClick={close} />}
      </Tag>
    </>
  );
};

CModalHeader.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  closeButton: PropTypes.bool,
};

CModalHeader.defaultProps = {
  tag: 'header',
};

export default CModalHeader;
