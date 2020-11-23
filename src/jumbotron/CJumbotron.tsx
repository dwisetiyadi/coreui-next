/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';

// component - CoreUI / CJumbotron

const CJumbotron = (props: any) => {
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
    'jumbotron',
    fluid ? 'jumbotron-fluid' : false
  );

  return (
    <>
      <Tag {...attributes} className={classes} ref={innerRef} />
    </>
  );
};

CJumbotron.propTypes = {
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

CJumbotron.defaultProps = {
  tag: 'div',
};

export default CJumbotron;
