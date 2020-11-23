/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { tagPropType } from '../utils/helper';

// component - CoreUI / CForm

const CForm = (props: any) => {
  const {
    tag: Tag,
    className,
    innerRef,
    //
    inline,
    wasValidated,
    ...attributes
  } = props;

  // render

  const classes = classNames(
    className,
    inline ? 'form-inline' : false,
    wasValidated ? 'was-validated' : false
  );

  return (
    <>
      <Tag {...attributes} className={classes} ref={innerRef} />
    </>
  );
};

CForm.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  inline: PropTypes.bool,
  wasValidated: PropTypes.bool,
  action: PropTypes.string,
  method: PropTypes.string,
  encType: PropTypes.string,
};

CForm.defaultProps = {
  tag: 'form',
};

export default CForm;
