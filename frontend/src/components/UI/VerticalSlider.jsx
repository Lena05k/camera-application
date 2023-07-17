import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const VerticalSlider = () => {
  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  };

  return (
    <Box className="mb-auto" sx={{ height: 300 }}>
      <Slider
        className="text-white"
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: 'slider-vertical',
          },
        }}
        orientation="vertical"
        defaultValue={50}
        aria-label="Temperature"
        valueLabelDisplay="auto"
        onKeyDown={preventHorizontalKeyboardNavigation}
      />
    </Box>
  );
};

export default VerticalSlider;
