/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
// import 'tippy.js/dist/tippy.css'
import { renderToString } from 'react-dom/server';
import tippy from 'tippy.js';

// component - CoreUI / CTooltip
const CTooltip = (props: any) => {
  const {
    //
    children,
    content,
    interactive,
    placement,
    trigger,
    advancedOptions,
  } = props;

  const computedContent = useCallback(
    () => (typeof content === 'string' ? content : renderToString(content)),
    [content]
  );

  const config = {
    allowHTML: true,
    content: computedContent,
    interactive,
    placement,
    trigger,
    ...advancedOptions,
  };

  const key = useState(Math.random().toString(36).substr(2))[0];
  const instance = useRef();

  useEffect(() => {
    if (instance.current) {
      // @ts-ignore
      instance.current.setProps(config);
    }
  });

  useEffect(() => {
    const node = document.querySelector(`[data-tooltip="${key}"]`);
    // @ts-ignore
    instance.current = tippy(node, config);
    // @ts-ignore
    return () => instance.current.destroy();
  }, [key]);

  return (
    <>
      {React.cloneElement(children, {
        'data-tooltip': key,
      })}
    </>
  );
};

CTooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  interactive: PropTypes.bool,
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
  trigger: PropTypes.string,
  advancedOptions: PropTypes.object,
};

CTooltip.defaultProps = {
  content: '',
  interactive: false,
  placement: 'top',
  trigger: 'mouseenter focus',
  advancedOptions: {},
};

export default CTooltip;
