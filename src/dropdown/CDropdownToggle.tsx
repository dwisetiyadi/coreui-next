/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';

import CButton from '../button/CButton';
import CLink from '../link/CLink';
import { tagPropType } from '../utils/helper';
import { Context } from './CDropdown';

// component - CoreUI / CDropdownToggle

const CDropdownToggle = (props: any) => {
  const {
    className,
    //
    innerRef,
    onClick,
    caret,
    split,
    tag,
    ...attributes
  } = props;

  const {
    // @ts-ignore
    reference,
    // @ts-ignore
    setReference,
    // @ts-ignore
    isOpen,
    // @ts-ignore
    setIsOpen,
    // @ts-ignore
    inNav,
    // @ts-ignore
    setSplit,
  } = useContext(Context);

  innerRef && innerRef(reference);

  useEffect(() => {
    setSplit(split);
  });

  const click = (e: any) => {
    if (props.disabled) {
      return;
    }
    onClick && onClick(e);
    setIsOpen(!isOpen);
  };

  const Tag = tag || (inNav ? CLink : CButton);

  const classes = classNames(className, {
    'dropdown-toggle': caret && !split,
    'nav-link': inNav,
  });

  const togglerAttrs = {
    onClick: click,
    'aria-expanded': isOpen ? 'true' : 'false',
    'aria-haspopup': 'true',
    'aria-label': 'Dropdown toggle',
    [`${tag && typeof tag === 'string' ? 'ref' : 'innerRef'}`]: setReference,
    role: Tag === CButton ? null : 'button',
  };

  if (split) {
    return (
      <>
        <CButton {...attributes}>{props.children}</CButton>
        <CButton
          className="dropdown-toggle dropdown-toggle-split"
          {...togglerAttrs}
          {...attributes}
        />
      </>
    );
  }
  return (
    <>
      <Tag className={classes} {...togglerAttrs} {...attributes} />
    </>
  );
};

CDropdownToggle.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  caret: PropTypes.bool,
  onClick: PropTypes.func,
  split: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
};

CDropdownToggle.defaultProps = {
  caret: true,
};

export default CDropdownToggle;
