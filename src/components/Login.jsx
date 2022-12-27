import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { flexColumn, flexContainer, pageContainer } from '../styles';
import loginBG from '../assets/loginBG.jpg';
import LockIcon from '@mui/icons-material/Lock';
const bgImgStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${loginBG} )`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
};

const Login = () => {
    return (
        <Box sx={flexContainer}>
            <Box sx={(pageContainer, { width: '150%' })}>
                <Box sx={bgImgStyle}></Box>
            </Box>
            <Box sx={pageContainer}>
                <Box sx={flexColumn}>
                    <LockIcon
                        fontSize={'large'}
                        sx={{ backgroundColor: 'red' }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email Address"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                    />
                    <Button
                        sx={{ backgroundColor: 'red' }}
                        variant="contained"
                        size="medium">
                        Login
                    </Button>
                </Box>
            </Box>{' '}
        </Box>
    );
};

export default Login;
