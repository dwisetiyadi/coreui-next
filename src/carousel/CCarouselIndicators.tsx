/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { Context } from './CCarousel';
// component - CoreUI / CCarouselIndicators

const CCarouselIndicators = (props: any) => {
  const {
    className,
    //
    innerRef,
    indicatorsClass,
    ...attributes
  } = props;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { itemNumber, state, setState, animating } = useContext(Context);

  // render
  const listClasses = classNames(indicatorsClass, className);

  const indicators = Array.from({ length: itemNumber }, (_, i) => i).map(
    (key) => {
      return (
        <>
          <li
            key={`indicator${key}`}
            onClick={() => {
              !animating && key !== state[1] && setState([state[1], key]);
            }}
            className={state[1] === key ? 'active' : ''}
          />
        </>
      );
    }
  );

  return (
    <ol className={listClasses} {...attributes} ref={innerRef}>
      {indicators}
    </ol>
  );
};

CCarouselIndicators.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  indicatorsClass: PropTypes.string,
};

CCarouselIndicators.defaultProps = {
  indicatorsClass: 'carousel-indicators',
};

export default CCarouselIndicators;
