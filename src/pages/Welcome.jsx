import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';

import loginBG from '../assets/loginBG.jpg';

import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    // const [loginValues, setLoginValues] = useState({});
    // const [isSubmitted, setIsSubmitted] = useState(false);
    const [getStarted, setGetStarted] = useState(false);
    const navigate = useNavigate();
    const handleGetStarted = () => {
        setGetStarted((prevState) => !prevState);
        setTimeout(() => {
            navigate('/home');
        }, 750);
    };

    // const handleChange = (e) => {
    //     setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setIsSubmitted((prevState) => !prevState);
    //     //TODO: FIREBASE AUTH
    // };

    const bgImgStyle = {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${loginBG} )`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };

    // const buttonSX = {
    //     transition: '0.2s ease',
    //     backgroundColor: isSubmitted ? '#1de9b6' : 'black',
    //     color: 'white',
    //     '&:hover': {
    //         backgroundColor: 'black',
    //     },
    // };

    return (
        <Paper>
            <Box
                sx={{
                    display: 'flex',
                    width: '100vw',
                    height: 'calc(100vh - 6rem)',
                    overflow: 'hidden',
                }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={bgImgStyle}>
                        <Box
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                rowGap: '1rem',
                            }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    padding: '1rem',
                                    backgroundColor: '#fff7',
                                    width: '50%',
                                    textAlign: 'center',
                                    marginLeft: '15%',
                                    transform: getStarted && 'translateX(100%)',
                                    opacity: getStarted && '0',
                                    transition: 'all 0.7s ease',
                                }}>
                                Welcome to the Map of Worlds Most Delightful
                                Meals
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    padding: '1rem',
                                    backgroundColor: '#fff7',
                                    width: '50%',
                                    textAlign: 'center',
                                    marginRight: '15%',
                                    transform:
                                        getStarted && 'translateX(-100%)',
                                    opacity: getStarted && '0',
                                    transition: 'all 0.7s ease',
                                }}>
                                Please feel free and enjoy your journey
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    transform:
                                        getStarted && 'translateX(-100%)',
                                    opacity: getStarted && '0',
                                    transition: 'all 0.7s ease',
                                }}
                                onClick={handleGetStarted}>
                                Get Started
                            </Button>
                        </Box>
                    </Box>
                </Box>
                {/* <Box
                    sx={{
                        width: '40%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Box
                        sx={flexColumn}
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
                            required
                            id="outlined-required"
                            label="Email Address"
                            name="email"
                            type="email"
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                        />
                        <Link to="#">Don't you have an Account</Link>
                        <Button
                            sx={buttonSX}
                            variant="contained"
                            size="medium"
                            type="submit">
                            Login
                        </Button>
                    </Box>
                </Box>{' '} */}
            </Box>
        </Paper>
    );
};

export default Welcome;
