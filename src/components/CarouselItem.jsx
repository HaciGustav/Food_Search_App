import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CarouselItem = ({ item }) => {
    const navigate = useNavigate();

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
            <Box sx={{ display: 'flex', columnGap: '5px', cursor: 'pointer' }}>
                {item.map((slide, i) => {
                    const { label, image } = slide.recipe;
                    return (
                        <Box
                            onClick={() =>
                                navigate('/detail', { state: slide })
                            }
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
