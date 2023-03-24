import React, { useState } from 'react';
import Back from '../Images/Back.png';
import classes from './ImageLoader.module.css';

function ImageLoader() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
    console.log('Image loaded successfully');
  };

  const handleImageError = () => {
    setImageLoaded(false);
    setImageError(true);
    console.log('Error loading image');
  };

  return (
    <>
      {imageLoaded && <img src={Back} alt="back" />}
      {imageError && <p>Failed to load image</p>}
      {!imageLoaded && !imageError && (
        <p>Loading image...</p>
      )}
      <img
        src={Back}
        alt="back"
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={classes.im}
      />
    </>
  );
}

export default ImageLoader;
