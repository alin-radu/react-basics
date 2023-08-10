import React from 'react';

import ImageCard from './ImageCard';

import './ImageList.css';

const ImageList = (props) => {
  const imagesList = props.images.map((el) => (
    <ImageCard
      key={el.id}
      imageSrc={el.urls.regular}
      imageAlt={el.alt_description}
    />
  ));

  return <div className="image-list">{imagesList}</div>;
};

export default ImageList;
