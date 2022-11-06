import React from 'react';
import Image from 'next/image';

const ImageItem = ({ src, alt, ...props }) => (
  <Image src={src} width={500} height={500} alt={alt} />
);

export default ImageItem;

ImageItem.defaultProps = {
  m: 0,
};
