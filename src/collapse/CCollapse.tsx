/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

const getTransitionClass = (s: string) => {
  switch (s) {
    case 'entering':
    case 'exiting':
      return 'collapsing';

    case 'entered':
      return 'collapse show';

    default:
      return 'collapse';
  }
};

// component - CoreUI / CCollapse
const CCollapse = (props: any) => {
  const {
    children,
    className,
    //
    innerRef,
    show,
    navbar,
    ...attributes
  } = props;

  const [height, setHeight] = useState();

  const ref = typeof innerRef === 'object' ? innerRef : useRef();
  typeof innerRef === 'function' && innerRef(ref);

  const onEntering = () => {
    setHeight(ref.current.scrollHeight);
  };

  const onEntered = () => {
    // @ts-ignore
    setHeight(null);
  };

  const onExit = () => {
    setHeight(ref.current.scrollHeight);
  };

  const onExiting = () => {
    const _unused = ref.current.offsetHeight;
    // @ts-ignore
    setHeight(0);
  };

  const onExited = () => {
    // @ts-ignore
    setHeight(null);
  };

  // render
  return (
    <>
      <Transition
        in={show}
        timeout={350}
        appear={false}
        enter
        exit
        onEntering={onEntering}
        onEntered={onEntered}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
        nodeRef={ref}
      >
        {(status) => {
          const collapseClass = getTransitionClass(status);
          const classes = classNames(
            className,
            collapseClass,
            navbar && 'navbar-collapse'
          );
          const style = height === null ? null : { height };
          return (
            <div
              {...attributes}
              style={{ ...attributes.style, ...style }}
              className={classes}
              ref={ref}
            >
              {children}
            </div>
          );
        }}
      </Transition>
    </>
  );
};

CCollapse.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  show: PropTypes.bool,
  navbar: PropTypes.bool,
  timeout: PropTypes.number,
};

export default CCollapse;
