import { Box } from '@mui/material';
import React from 'react';

import HashLoader from 'react-spinners/HashLoader';

const Loading = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'fixed',
                backgroundColor: '#0008',
                height: '100vh',
                top: '0',
                left: '0',
                right: '0',
                zIndex: '5',
            }}>
            <HashLoader size={100} speedMultiplier="1.5" color="#fff" />
        </Box>
    );
};

export default Loading;
