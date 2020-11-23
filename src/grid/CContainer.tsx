/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';

// component - CoreUI / CContainer

const CContainer = (props: any) => {
  const {
    tag: Tag,
    className,
    //
    innerRef,
    fluid,
    ...attributes
  } = props;

  // render

  const classes = classNames(
    className,
    fluid ? 'container-fluid' : 'container'
  );

  return (
    <>
      <Tag {...attributes} className={classes} ref={innerRef} />
    </>
  );
};

CContainer.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  fluid: PropTypes.bool,
  children: PropTypes.node,
};

CContainer.defaultProps = {
  tag: 'div',
};

export default CContainer;
