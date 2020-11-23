/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

import { CBreadcrumb, CBreadcrumbItem } from '../index';

const CBreadcrumbRouter = (props: any) => {
  const { className, innerRef, routes, ...attributes } = props;

  const router = useRouter();

  let items = null;
  if (routes) {
    items = routes.map((route: any, key: number) => {
      if (route.path === router.pathname) {
        return (
          <CBreadcrumbItem key={key + 1} active>
            {route.name}
          </CBreadcrumbItem>
        );
      }
      return (
        <CBreadcrumbItem key={key + 1}>
          <Link href={route.path}>
            <a>{route.name}</a>
          </Link>
        </CBreadcrumbItem>
      );
    });
  }

  // render
  const classes = classNames(className);

  return (
    <>
      <CBreadcrumb className={classes} {...attributes} ref={innerRef}>
        {items}
      </CBreadcrumb>
    </>
  );
};

CBreadcrumbRouter.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  routes: PropTypes.array,
};

export default CBreadcrumbRouter;
