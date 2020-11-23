/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PerfectScrollbar from 'perfect-scrollbar';
import PropTypes from 'prop-types';
import React, { createRef, useEffect, useState } from 'react';
// import 'perfect-scrollbar/css/perfect-scrollbar.css'
// import './scrollbar.css'

// component - CoreUI / CScrollbar
const CScrollbar = (props: any) => {
  const {
    tag: Tag,
    className,
    //
    innerRef,
    settings,
    switcher,
    ...attributes
  } = props;

  const [instance, setInstance] = useState();
  const ref = createRef();
  innerRef && innerRef(ref);

  useEffect(() => {
    switcher ? init() : uninit();
  }, [switcher]);

  useEffect(() => uninit(), []);

  const init = () => {
    if (!instance) {
      createPerfectScrollbar();
    }
  };

  const createPerfectScrollbar = () => {
    // @ts-ignore
    setInstance(new PerfectScrollbar(ref.current, settings));
  };

  const uninit = () => {
    if (instance) {
      // @ts-ignore
      instance.destroy();
      // @ts-ignore
      setInstance(null);
    }
  };

  // render
  return (
    <>
      <Tag
        className={classNames(className)}
        style={{ position: 'relative' }}
        {...attributes}
        ref={ref}
      />
    </>
  );
};

CScrollbar.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  settings: PropTypes.object,
  switcher: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

CScrollbar.defaultProps = {
  tag: 'div',
};

export default CScrollbar;
