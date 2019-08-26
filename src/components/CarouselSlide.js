import React from 'react';
import PropTypes from 'prop-types';

let apple = 'orange';
const CarouselSlide = props => (
  <figure>
    <img src={props.imgUrl} />
    <figcaption>
      <strong>{props.description}</strong> {props.attribution}
    </figcaption>
  </figure>
);

// CarouselSlide.propTypes = {
//   imgUrl: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   attribution: PropTypes.string.isRequired
// };

export default CarouselSlide;
