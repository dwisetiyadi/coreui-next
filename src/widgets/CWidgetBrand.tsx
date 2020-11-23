/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CWidgetBrand

const CWidgetBrand = (props: any) => {
  const {
    children,
    className,
    //
    color,
    rightHeader,
    rightFooter,
    leftHeader,
    leftFooter,
    addHeaderClasses,
    bodySlot,
    ...attributes
  } = props;

  // render

  const headerClasses = classNames(
    'card-header content-center text-white p-0',
    color && `bg-${color}`,
    addHeaderClasses
  );

  return (
    <>
      <div className={`card ${className}`} {...attributes}>
        <div className={headerClasses}>{children}</div>
        {bodySlot || (
          <div className="card-body row text-center">
            <div className="col">
              {rightHeader && (
                <div className="text-value-lg">{rightHeader}</div>
              )}
              {rightFooter && (
                <div className="text-uppercase text-muted small">
                  {rightFooter}
                </div>
              )}
            </div>
            <div className="c-vr" />
            <div className="col">
              {leftHeader && <div className="text-value-lg">{leftHeader}</div>}
              {leftFooter && (
                <div className="text-uppercase text-muted small">
                  {leftFooter}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

CWidgetBrand.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  color: PropTypes.string,
  rightHeader: PropTypes.string,
  rightFooter: PropTypes.string,
  leftHeader: PropTypes.string,
  leftFooter: PropTypes.string,
  // @ts-ignore
  addHeaderClasses: PropTypes.oneOfType([String, Array, Object]),
  bodySlot: PropTypes.node,
};

export default CWidgetBrand;
