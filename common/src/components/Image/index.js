import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const ImageItem = ({ src, alt, ...props }) => (
  <Image src={src} alt={alt} {...props} />
);

export default ImageItem;

ImageItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

ImageItem.defaultProps = {
  m: 0,
};
