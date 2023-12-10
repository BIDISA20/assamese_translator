import React, { useState } from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    Button,
    CircularProgress,
} from '@mui/material';
import ImageUpload from './components/ImageUpload';
import ConvertedText from './components/ConvertedText';
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [convertedText, setConvertedText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleImageUpload = (image) => {
        setUploadedImage(image);
        setConvertedText('');

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setConvertedText('This is a placeholder text. Replace it with the actual converted text.');
        }, 2000);
    };

    return (
        <Container>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Assamese to English Converter
                    </Typography>
                </Toolbar>
            </AppBar>


            <Grid container spacing={3} sx={{ marginTop: '80px' }}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px', minHeight: '500px' }}>
                        <Typography variant="h6" gutterBottom>
                            Image Upload
                        </Typography>
                        <ImageUpload onImageUpload={handleImageUpload} isLoading={isLoading} />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px', minHeight: '500px' }}>
                        <Typography variant="h6" gutterBottom>
                            Converted Text
                        </Typography>
                        <ConvertedText text={convertedText} />
                        {isLoading && <CircularProgress style={{ marginTop: '20px' }} />}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
