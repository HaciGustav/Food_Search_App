import { Box, Paper, TextField } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import RecipeReviewCard from '../components/RecipeReviewCard';

const Home = () => {
    return (
        <Paper>
            <Navbar />
            <Box
                sx={{
                    backgroundColor: '#0B2559',
                    height: '4rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    sx={{ backgroundColor: 'darkorange', width: '35%' }}
                />
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {[1, 1, 1, 1, 1, 1, 1].map((item, i) => (
                    <RecipeReviewCard key={i} />
                ))}
            </Box>
        </Paper>
    );
};

export default Home;
