/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createPopper } from '@popperjs/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import React, { useContext, useEffect, useState } from 'react';

import { Context } from './CDropdown';

// component - CoreUI / CDropdownMenu

const CDropdownMenu = (props: any) => {
  const { className, show, placement, modifiers, innerRef, ...rest } = props;

  // @ts-ignore
  const { reference, isOpen, setIsOpen, setPlacement } = useContext(Context);
  const [popperElement, setPopperElement] = useState(null);
  const [popper, setPopper] = useState(null);

  innerRef && innerRef(popperElement);

  const classes = classNames(className, 'dropdown-menu', {
    show: isOpen,
  });

  useEffect(() => {
    setIsOpen(show);
    setPlacement(placement);

    if (!reference) {
      return;
    }

    setPopper(
      // @ts-ignore
      createPopper(reference, popperElement, {
        placement,
        modifiers: modifiers || [],
      })
    );

    return () => {
      if (popper) {
        // @ts-ignore
        popper.destroy();
      }
    };
  }, [isOpen, show, placement]);

  // useLayoutEffect(() => {
  //   if (!reference) {
  //     return;
  //   }
  //   setPopper(
  //     // @ts-ignore
  //     createPopper(reference, popperElement, {
  //       placement,
  //       modifiers: modifiers || [],
  //     })
  //   );

  //   return () => {
  //     if (popper) {
  //       // @ts-ignore
  //       popper.destroy();
  //     }
  //   };
  // }, [isOpen]);

  const checkClose = (e: any) => {
    if ([reference, popperElement].every((el) => !el.contains(e.target))) {
      setIsOpen(false);
    }
  };

  const onKeypress = (e: any) => e.keyCode === '27' && setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', checkClose);
      document.addEventListener('keydown', onKeypress);
    }
    return () => {
      document.removeEventListener('click', checkClose);
      document.removeEventListener('keydown', onKeypress);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={classes}
        ref={setPopperElement}
        role="menu"
        aria-hidden={!isOpen}
        {...rest}
      />
    </>
  );
};

CDropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  modifiers: PropTypes.array,
  show: PropTypes.bool,
  placement: PropTypes.oneOf([
    '',
    'top-end',
    'top',
    'top-start',
    'bottom-end',
    'bottom',
    'bottom-start',
    'right-start',
    'right',
    'right-end',
    'left-start',
    'left',
    'left-end',
  ]),
};

CDropdownMenu.defaultProps = {
  placement: 'bottom-start',
};

export default CDropdownMenu;
