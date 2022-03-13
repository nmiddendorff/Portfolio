import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { base, themed } from '../base';
import Image from 'next/image';


const ImageWrapper = styled(Image)(
  {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    width: '100%',
  },
  base,
  themed('ImageItem')
);

const ImageItem = ({ src, alt, ...props }) => (
  <ImageWrapper src={src} alt={alt} {...props} />
);

export default ImageItem;

ImageItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

ImageItem.defaultProps = {
  m: 0,
};
