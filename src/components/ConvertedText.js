import React from 'react';
import { Typography, Box } from '@mui/material';

const ConvertedText = ({ text }) => {
  return (
    <Box
      border={1}
      borderColor="grey.400"
      borderRadius={5}
      p={3}
      textAlign="center"
      minHeight="200px"
    >
      <Typography variant="body1">
        {text || 'No text converted yet.'}
      </Typography>
    </Box>
  );
};

export default ConvertedText;
