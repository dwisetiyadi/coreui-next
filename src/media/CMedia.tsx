/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// component - CoreUI / CMedia

const CMedia = (props: any) => {
  const {
    className,
    //
    innerRef,
    ...attributes
  } = props;

  // render

  const classes = classNames('media', className);

  return (
    <>
      <div className={classes} {...attributes} ref={innerRef} />
    </>
  );
};

CMedia.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default CMedia;
