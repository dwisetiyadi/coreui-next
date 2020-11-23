/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

// component - CoreUI / CCreateElement
const CCreateElement = ({ items, components = {} }: any): JSX.Element => {
  const renderItem = (item: any, i: number) => {
    const { _tag, _children, ...rest } = item;
    const Tag = components[_tag] || _tag;
    let children: JSX.Element | string = '';
    if (_children) {
      children = _children.map((child: any, k: number) => {
        return typeof child === 'object' ? renderItem(child, k) : child;
      });
    }
    return (
      <>
        <Tag key={i + 1} {...rest}>
          {children}
        </Tag>
      </>
    );
  };

  const generatedItems = useMemo(() => {
    return items && items.map((item: any, i: number) => renderItem(item, i));
  }, [JSON.stringify(items)]);

  return <>{generatedItems}</>;
};

CCreateElement.propTypes = {
  items: PropTypes.array.isRequired,
  key: PropTypes.number,
  components: PropTypes.object,
};

export default CCreateElement;
