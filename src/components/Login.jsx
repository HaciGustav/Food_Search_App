import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';

import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { blueGrey } from '@mui/material/colors';
import { handleSignIn } from '../firebase/auth';

const textFieldStyle = {
    '.MuiInputBase-input:focus': { height: 'auto' },
    width: '90%',

    transition: 'all 0.5s ease',
};

export default function Login({
    loginOpen,
    setLoginOpen,
    setRegisterOpen,
    formValues,
    setFormValues,
}) {
    // const [formValues, setformValues] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setLoginOpen(open);
    };

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted((prevState) => !prevState);
        handleSignIn(formValues);
        setLoginOpen(false);
    };
    const buttonSX = {
        transition: '0.2s ease',
        backgroundColor: isSubmitted ? '#1de9b6' : 'black',
        color: 'white',
        '&:hover': {
            backgroundColor: 'black',
        },
    };

    return (
        <div>
            <Drawer
                id="drawer"
                anchor={'left'}
                open={loginOpen}
                onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                        width: 400,
                        minWidth: 350,
                        height: '100%',
                    }}
                    role="presentation">
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            border: '1px solid red',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            rowGap: '15px',
                        }}
                        component="form"
                        onSubmit={(e) => handleSubmit(e)}>
                        <Box
                            sx={{
                                padding: '1rem',
                                borderRadius: '50%',
                                backgroundColor: blueGrey[300],
                            }}>
                            {!isSubmitted && (
                                <LockIcon
                                    fontSize={'large'}
                                    sx={{ color: 'black' }}
                                />
                            )}
                            {isSubmitted && (
                                <LockOpenIcon
                                    fontSize={'large'}
                                    sx={{ color: '#1de9b6' }}
                                />
                            )}
                        </Box>

                        <TextField
                            sx={{ width: '90%' }}
                            required
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formValues.email || ''}
                            onChange={handleChange}
                        />
                        <TextField
                            sx={{ width: '90%' }}
                            required
                            value={formValues.password || ''}
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'end',
                                width: '90%',
                                color: 'blue',
                                textDecoration: 'underline',
                            }}>
                            <Typography
                                sx={{ cursor: 'pointer', fontSize: '0.8rem' }}
                                onClick={() => {
                                    setLoginOpen(false);
                                    setRegisterOpen(true);
                                }}>
                                Don't you have an Account
                            </Typography>
                        </Box>

                        <Button
                            sx={{ width: '90%', ...buttonSX }}
                            variant="contained"
                            size="large"
                            type="submit">
                            Login
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </div>
    );
}
