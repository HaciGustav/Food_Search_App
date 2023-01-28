import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

const CarouselItem = ({ item }) => {
    // const { label, images, image } = item.recipe;

    const imgStyle = {
        height: '30vh',
        width: `calc(100% / ${item.length})`,
        // backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'end',
    };

    return (
        <Paper>
            <Box sx={{ display: 'flex', columnGap: '5px' }}>
                {item.map((slide, i) => {
                    const { label, images, image } = slide.recipe;
                    return (
                        <Box
                            key={i}
                            sx={{
                                ...imgStyle,
                                backgroundImage: `url(${image})`,
                            }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    minHeight: '40%',
                                    backgroundColor: '#0008',
                                    color: 'white',
                                    width: '100%',
                                    textAlign: 'center',
                                }}>
                                {label}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>
        </Paper>
    );
};

export default CarouselItem;
