import React from 'react';
import PropTypes from 'prop-types';

const CarouselSlide = props => (
  <figure>
    <img src={ props.imgUrl } alt={ props.description } />
    <figcaption>
      <strong>{props.description}</strong> {props.attribution}
    </figcaption>
  </figure>
);

CarouselSlide.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  attribution: PropTypes.string.isRequired
};

export default CarouselSlide;
