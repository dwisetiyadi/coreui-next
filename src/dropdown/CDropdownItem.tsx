/* eslint-disable react/require-default-props */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import CLink from '../link/CLink';
import { tagPropType } from '../utils/helper';
import { Context } from './CDropdown';

// component - CoreUI / CDropdownItem
const CDropdownItem = (props: any) => {
  const {
    tag,
    className,
    //
    innerRef,
    onClick,
    color,
    divider,
    header,
    active,
    disabled,
    ...rest
  } = props;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { setIsOpen } = useContext(Context);

  const isItem = !(header || divider);

  const click = (e: any) => {
    if (disabled) {
      return;
    }
    onClick && onClick(e);
    isItem && setIsOpen(false);
  };

  // render
  const tabIndex = isItem && !disabled ? null : -1;
  const role = tabIndex === null ? 'menuitem' : undefined;
  const Tag = tag || (!isItem ? 'div' : CLink);
  const ref = { [`${typeof Tag === 'string' ? 'ref' : 'innerRef'}`]: innerRef };

  const classes = classNames(
    className,
    `dropdown-${header ? 'header' : divider ? 'divider' : 'item'}`,
    { active },
    color && `bg-${color}`,
    disabled && Tag !== CLink && 'disabled'
  );

  return (
    <>
      <Tag
        className={classes}
        tabIndex={tabIndex}
        role={role}
        disabled={disabled}
        {...rest}
        onClick={click}
        {...ref}
      />
    </>
  );
};

CDropdownItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  color: PropTypes.string,
  divider: PropTypes.bool,
  header: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.node,
  href: PropTypes.string,
  to: PropTypes.string,
};

export default CDropdownItem;
