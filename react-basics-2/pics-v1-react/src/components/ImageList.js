import React from 'react';

const ImageList = (props) => {
  const imagesList = props.images.map((el) => (
    <img key={el.id} src={el.urls.regular} alt={el.alt_description} />
  ));

  return <div>{imagesList}</div>;
};

export default ImageList;
