/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { renderToString } from 'react-dom/server';

import CTooltip from './CTooltip';

// component - CoreUI / CPopover
const template = `<h3 class="popover-header">H</h3><div class="popover-body">C</div>`;
const generateContent = (content: any, header: any) => {
  return template
    .replace('H', renderToString(header))
    .replace('C', renderToString(content));
};

const CPopover = (props: any) => {
  const { header, children, content, ...config } = props;

  // @ts-ignore
  const computedContent = useCallback(generateContent(content, header), [
    content,
    header,
  ]);

  const advancedOptions = {
    ...(config ? config.advancedOptions || {} : {}),
    theme: 'cpopover',
  };

  const computedConfig = {
    ...config,
    advancedOptions,
  };

  return (
    <>
      <CTooltip content={computedContent} {...computedConfig}>
        {children}
      </CTooltip>
    </>
  );
};

CPopover.propTypes = {
  children: PropTypes.node,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  placement: PropTypes.string,
  interactive: PropTypes.bool,
  trigger: PropTypes.string,
};

export default CPopover;
