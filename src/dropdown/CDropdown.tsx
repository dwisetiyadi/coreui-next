/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { tagPropType } from '../utils/helper';

export const Context = React.createContext({});

// component - CoreUI / CDropdown

const CDropdown = (props: any) => {
  const {
    className,
    tag,
    //
    innerRef,
    inNav,
    ...attributes
  } = props;

  const [reference, setReference] = useState();
  const [isOpen, setIsOpen] = useState();
  const [split, setSplit] = useState();
  const [placement, setPlacement] = useState('');

  let carretClass = 'dropdown';

  if (placement.includes('top')) {
    carretClass = 'dropup';
  }

  if (placement.includes('right')) {
    carretClass = 'dropright';
  }

  if (placement.includes('left')) {
    carretClass = 'dropleft';
  }

  const Tag = tag || (inNav ? 'li' : 'div');
  const classes = classNames(className, carretClass, {
    'nav-item': inNav,
    'btn-group': split,
    show: isOpen,
  });

  return (
    <Context.Provider
      value={{
        isOpen,
        setIsOpen,
        reference,
        setReference,
        inNav,
        setSplit,
        setPlacement,
      }}
    >
      <Tag className={classes} {...attributes} ref={innerRef} />
    </Context.Provider>
  );
};

CDropdown.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  inNav: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default CDropdown;
