import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function RangeSlider({sel, keyName, min, max, units, marks, handleRangeFilter}) {

  function valuetext(value) {
    return (value + units);
  }

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Range'}
        value={sel}
        onChange={(e, a) => handleRangeFilter(e, keyName, a)}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={min}
        max={max}
        marks={marks}
        sx={{
          '& .MuiSlider-thumb': {
            color: "black"
          },
          '& .MuiSlider-track': {
            color: "black"
          },
          '& .MuiSlider-rail': {
            color: "black"
          },
          '& .MuiSlider-active': {
            color: "black"
          },
          '& .MuiSlider-valueLabelLabel': {
            color: "white"
          },
        }}
      />
    </Box>
  );
}

export default RangeSlider
