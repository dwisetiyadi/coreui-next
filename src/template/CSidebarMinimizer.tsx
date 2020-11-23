/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { Context } from './CSidebar';

// component - CoreUI / CSidebarMinimizer

const CSidebarMinimizer = (props: any) => {
  const {
    className,
    //
    innerRef,
    ...attributes
  } = props;

  // @ts-ignore
  const { toggleMinimize } = useContext(Context);
  // render

  const classes = classNames('c-sidebar-minimizer', className);
  return (
    <>
      <button
        className={classes}
        type="button"
        {...attributes}
        onClick={toggleMinimize}
        ref={innerRef}
      />
    </>
  );
};

CSidebarMinimizer.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default CSidebarMinimizer;
