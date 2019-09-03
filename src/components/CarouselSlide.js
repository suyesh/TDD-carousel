import React from 'react';
import PropTypes from 'prop-types';

const CarouselSlide = ({
  imgUrl,
  description,
  attribution,
  style,
  onClick,
  className
}) => {
  const handleKeyDown = () => {
    onClick();
  };

  return (
    <figure
      style={style}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={className}
      role="presentation"
    >
      <img src={imgUrl} alt={description} />
      <figcaption>
        <strong>{description}</strong> {attribution}
      </figcaption>
    </figure>
  );
};

CarouselSlide.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  attribution: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.object),
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default CarouselSlide;
