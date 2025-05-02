import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const Carousel = () => {
  const images = [
    '/images/market.jpeg', // First image
    '/images/ceremony.jpeg', // Second image
    '/images/dance club.png', // Third image
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 6000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto', // Responsive height
        overflow: 'hidden', // Hide content outside the bounds
        position: 'relative',
      }}
    >
      {/* Inner container for sliding images */}
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out', // Smooth slide animation
          transform: `translateX(-${currentIndex * 100}%)`, // Move to the current slide
        }}
      >
        {images.map((img, index) => (
          <Box
            key={index}
            sx={{
              width: '100%', // Each slide takes up 100% width of the carousel
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ddd',
            }}
          >
            {/* Render the image */}
            <img
          src={img}
          alt={`Slide ${index + 1}`}
          style={{
          width: '45%', // Ensures the image spans the full width of the slide
          height: '100%', // Ensures the image spans the full height of the slide
          }}
          />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
