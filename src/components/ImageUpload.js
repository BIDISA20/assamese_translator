// ImageUpload.js
import React, { useState, useRef } from 'react';
import { Button, Typography, IconButton, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ClearIcon from '@mui/icons-material/Clear';

const ImageUpload = ({ onImageUpload, isLoading }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    onImageUpload(file);

    // Clear the file input value to allow re-selection of the same file
    e.target.value = null;
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleUploadIconClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <Box
      border={1}
      borderColor="grey.400"
      borderStyle="dashed"
      borderRadius={5}
      p={2}
      textAlign="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <input
          type="file"
          accept="image/*"
          id="image-upload-input"
          style={{ display: 'none' }}
          onChange={handleImageChange}
          ref={fileInputRef}
        />
        <label htmlFor="image-upload-input">
          <IconButton
            color="primary"
            aria-label="upload image"
            component="span"
            style={{
              marginBottom: '10px',
              fontSize: '2.5rem',
              transform: 'scale(1.5)',
              zIndex: 1,
            }}
            onClick={(e) => handleUploadIconClick(e)}
          >
            <CloudUploadIcon />
          </IconButton>
        </label>
        {selectedImage && (
          <div style={{ marginTop: '10px', position: 'relative' }}>
            <IconButton
              color="secondary"
              aria-label="remove image"
              component="span"
              onClick={handleRemoveImage}
              style={{ position: 'absolute', top: 0, right: 0 }}
            >
              <ClearIcon />
            </IconButton>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Uploaded"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
          </div>
        )}
      </Box>
      <Typography variant="body2" color="textSecondary">
        Click on the icon to upload the image
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onImageUpload(selectedImage)}
        disabled={isLoading || !selectedImage}
        style={{ marginTop: '10px' }}
      >
        Convert
      </Button>
    </Box>
  );
};

export default ImageUpload;
