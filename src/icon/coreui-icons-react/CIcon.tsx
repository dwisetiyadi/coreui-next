/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/no-danger */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import '@components/coreui-icons-react/CIcon.css';

import classNames from 'classnames';
// import React, { useMemo, useState } from 'react';
import React, { useMemo } from 'react';

import { icons } from '../coreui-icons/js';

// interface CoreuiReact {
//   className: string;
//   name: string;
//   content: string | any[];
//   size: string;
//   customClasses: string | undefined;
//   src: string;
//   title: string;
//   use: string;
// }

const colog = (msg: any) => {
  if (process && process.env && process.env.NODE_ENV === 'development') {
    console.error(msg);
  }
};

const toCamelCase = (str: string) => {
  return str
    .replace(/([-_][a-z0-9])/gi, ($1) => {
      return $1.toUpperCase();
    })
    .replace(/-/gi, '');
};

// component - CoreUI / CIcon
export const CIcon = (props: any): JSX.Element => {
  const {
    className,
    name,
    content,
    customClasses,
    size,
    src,
    title,
    use,
    ...attributes
  } = props;

  // const [change, setChange] = useState(0);

  // useMemo(() => setChange(change + 1), [change]);

  const iconName = useMemo(() => {
    const iconNameIsKebabCase = name && name.includes('-');
    return iconNameIsKebabCase ? toCamelCase(name) : name;
  }, [name]);

  const titleCode = title ? `<title>${title}</title>` : '';

  const code = useMemo(() => {
    if (content) {
      return content;
    }
    // const cologOut = colog(
    //   `\nCIcon component: icon name '${iconName}' does not exist in icons object. To use icons by 'name' prop you need to make them available globally by adding them to icons object. CIcon component docs: https://coreui.io/react/docs/components/CIcon \n`
    // );
    if (name && icons) {
      return icons[iconName] ? icons[iconName] : colog(icons);
    }
  }, [content, iconName, name]);

  const iconCode = useMemo(() => {
    return Array.isArray(code) ? code[1] || code[0] : code;
  }, [code]);

  const scale = (() => {
    return Array.isArray(code) && code.length > 1 ? code[0] : '64 64';
  })();

  const viewBox = (() => {
    // @ts-ignore
    return attributes.viewBox || `0 0 ${scale}`;
  })();

  const computedSize = (() => {
    // @ts-ignore
    const addCustom = !size && (attributes.width || attributes.height);
    return size === 'custom' || addCustom ? 'custom-size' : size;
  })();

  // render
  const computedClasses = classNames(
    'c-icon',
    computedSize && `c-icon-${computedSize}`,
    className
  );

  const classes = customClasses || computedClasses;

  return (
    <>
      {!src && !use && (
        <svg
          {...attributes}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          className={classes}
          role="img"
          dangerouslySetInnerHTML={{ __html: titleCode + iconCode }}
        />
      )}
      {src && !use && (
        <img {...attributes} className={className} src={src} role="img" />
      )}
      {!src && use && (
        <svg
          {...attributes}
          xmlns="http://www.w3.org/2000/svg"
          className={classes}
          role="img"
        >
          <use href={use} />
        </svg>
      )}
    </>
  );
};

export const CIconWarn = (props: any) => {
  // colog(
  //   '@coreui/icons-react: Please use default export since named exports are deprecated'
  // );
  return <CIcon {...props} />;
};
