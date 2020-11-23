/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CTabContent

// @ts-ignore
export const Context = React.createContext();

const CTabContent = (props: any) => {
  const {
    className,
    //
    innerRef,
    fade,
    ...attributes
  } = props;

  // render
  const classes = classNames('tab-content', className);

  return (
    <Context.Provider value={fade}>
      <div className={classes} {...attributes} ref={innerRef} />
    </Context.Provider>
  );
};

CTabContent.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  fade: PropTypes.bool,
  children: PropTypes.node,
};

CTabContent.defaultProps = {
  fade: true,
};

export default CTabContent;
