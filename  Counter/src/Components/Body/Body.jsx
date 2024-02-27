import './Body.css';
import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { images } from '../Data/imgs.jsx';

export function Body() {
  const InitialValue = 0;
  const [counter, setCounter] = useState(InitialValue);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(true); // Always show image initially

  const handleClickCounter = (value) => {
    if (value === 'add') {
      setCounter(counter + 1);
    } else if (value === 'subtract' && counter > 0) {
      setCounter(counter - 1);
      setCurrentImageIndex(counter === InitialValue ? InitialValue : currentImageIndex); // Only reset image index if counter reaches 0
    } else if (value === 'reset') {
      setCounter(0);
      setShowImage(true); // Reset image visibility to true
    }
  };

  useEffect(() => {
    // Update image index based on counter values
    if (counter >= 20 && counter < 40) {
      setCurrentImageIndex(1);
    } else if (counter >= 40 && counter < 60) {
      setCurrentImageIndex(2);
    } else if (counter >= 60 && counter < 80) {
      setCurrentImageIndex(3);
    } else if (counter >= 80) {
      setCurrentImageIndex(4);
    } else if (counter >= 0 && counter  < 20) {
      setCurrentImageIndex(0);
    }
  }, [counter, currentImageIndex]);

  return (
    <div>
      <h1>Don't Wake It Up</h1>
      <div className='container'>
        <button className='textbtn' onClick={() => handleClickCounter('subtract')}>
          Let it Sleep
        </button>
        {showImage && (
          <img
          key={images[currentImageIndex].id}
          src={images[currentImageIndex].src} alt='Counter-Image' className='image-evolution' />
        )}
        <button onClick={() => handleClickCounter('add')}>
          Wake it Up
        </button>
      </div>
      <h2>{counter}</h2>
      <button onClick={() => handleClickCounter('reset')}>
        Restart
      </button>
      </div>
  );
}
