import React from 'react';
import PropTypes from 'prop-types';

const CarouselSlide = ({ imgUrl, description, attribution }) => (
  <figure>
    <img src={imgUrl} alt={description} />
    <figcaption>
      <strong>{description}</strong> {attribution}
    </figcaption>
  </figure>
);

CarouselSlide.defaultProps = {
  attribution: 'attribution'
};

CarouselSlide.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  attribution: PropTypes.node
};

export default CarouselSlide;
