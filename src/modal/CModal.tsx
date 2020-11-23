/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

export const Context = React.createContext({});

const getTransitionClass = (s: string) => {
  switch (s) {
    case 'entering':
    case 'exiting':
      return 'd-block';

    case 'entered':
      return 'show d-block';

    default:
      return '';
  }
};

// animation fixes introduced thanks to Sirlordt
// component - CoreUI / CModal
const CModal = (props: any) => {
  const {
    innerRef,
    show,
    centered,
    size,
    color,
    borderColor,
    fade,
    backdrop,
    closeOnBackdrop,
    onOpened,
    onClosed,
    addContentClass,
    onClose,
    className,
    ...attributes
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [modalTrigger, setModalTrigger] = useState(false);
  const modalClick = (e: any) =>
    e.target.dataset.modal && closeOnBackdrop && close();

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  const onKeypress = (e: any) => e.keyCode === '27' && close();

  useEffect(() => {
    isOpen && document.addEventListener('keydown', onKeypress);
    return () => document.removeEventListener('keydown', onKeypress);
  }, [isOpen]);

  const close = () => {
    onClose && onClose();
    setIsOpen(false);
  };

  const onEntered = () => {
    // @ts-ignore
    setModalTrigger(document.querySelector(':focus'));

    // @ts-ignore
    nodeRef.current.focus();
    onOpened && onOpened();
  };

  const onExited = () => {
    // @ts-ignore
    modalTrigger && modalTrigger.focus();
    onClosed && onClosed();
  };

  const modalClasses = classNames(
    'modal overflow-auto fade',
    {
      [`modal-${color}`]: color,
    },
    className
  );

  const dialogClasses = classNames('modal-dialog', {
    'modal-dialog-centered': centered,
    [`modal-${size}`]: size,
  });

  const contentClasses = classNames(
    'modal-content',
    {
      [`border-${borderColor}`]: borderColor,
    },
    addContentClass
  );

  const backdropClasses = classNames({
    'modal-backdrop': true,
    fade,
    show: isOpen || fade,
  });

  const nodeRef = useRef(null);
  return (
    <>
      <div onClick={modalClick}>
        <Transition
          in={Boolean(isOpen)}
          onEntered={onEntered}
          onExited={onExited}
          timeout={fade ? 150 : 0}
          nodeRef={nodeRef}
        >
          {(status) => {
            const transitionClass = getTransitionClass(status);
            const classes = classNames(modalClasses, transitionClass);
            return (
              <div
                // @ts-ignore
                tabIndex="-1"
                role="dialog"
                className={classes}
                data-modal
                ref={nodeRef}
              >
                <div className={dialogClasses} role="document">
                  <div
                    {...attributes}
                    className={contentClasses}
                    ref={innerRef}
                  >
                    <Context.Provider value={{ close }}>
                      {props.children}
                    </Context.Provider>
                  </div>
                </div>
              </div>
            );
          }}
        </Transition>
        {backdrop && isOpen && <div className={backdropClasses} />}
      </div>
    </>
  );
};

CModal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  show: PropTypes.bool,
  centered: PropTypes.bool,
  size: PropTypes.oneOf(['', 'sm', 'lg', 'xl']),
  backdrop: PropTypes.bool,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
  fade: PropTypes.bool,
  closeOnBackdrop: PropTypes.bool,
  onClose: PropTypes.func,
  addContentClass: PropTypes.string,
};

CModal.defaultProps = {
  backdrop: true,
  fade: true,
  closeOnBackdrop: true,
};

export default CModal;
