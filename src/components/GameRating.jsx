import React, { useState, useEffect } from 'react';
import './GameRating.css';

function GameRating({ rating }) {
  const generateStars = () => {
    if (rating > 5 || rating < 1) {
      return [];
    }

    return Array.from({ length: rating }, (_, index) => index);
  };

  const [stars, setStars] = useState(generateStars());

  useEffect(() => {
    setStars(generateStars());
  }, [rating]);

  return (
    <div className='gameRating'>
      {stars.map((star, index) => (
        <i key={index} className='bi bi-star-fill'></i>
      ))}
    </div>
  );
}

export default GameRating;
