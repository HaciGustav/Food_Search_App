import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Grid, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { blueGrey } from '@mui/material/colors';
import GoogleIcon from '@mui/icons-material/Google';
import { handleSignUp } from '../firebase/auth';
import {signUpWithGoogle} from 'firebase/auth'
import { useAuthContext } from '../context/AuthProvider';

const buttonSX = {
    transition: '0.2s ease',
    width: '100%',
    backgroundColor: 'background.primary',
    color: 'text.paper',
    '&:hover': {
        backgroundColor: 'background.secondary',
    },
};

export default function Register({
    registerOpen,
    setRegisterOpen,
    formValues,
    setFormValues,
}) {
    // const [formValues, setFormValues] = useState({});
    const { setUser } = useAuthContext();

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setRegisterOpen(open);
    };

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //sign up function
        handleSignUp(formValues, setUser);

        //add user to db function

        setRegisterOpen(false);
    };

    const handleGoogleSignup = () => {
        signUpWithGoogle().then((res) => setUser(res));
        setRegisterOpen(false);
    };

    return (
        <div>
            <Drawer
                anchor={'left'}
                open={registerOpen}
                onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                        minWidth: '300px',
                        height: '100%',
                        width: '400px',
                    }}
                    role="presentation">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '10px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            width: '100%',
                            margin: 'auto',
                        }}
                        component="form"
                        onSubmit={handleSubmit}>
                        <Box
                            sx={{
                                padding: '1rem',
                                borderRadius: '50%',
                                backgroundColor: blueGrey[300],
                            }}>
                            <LockIcon
                                fontSize={'large'}
                                sx={{ color: 'black' }}
                            />
                        </Box>
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                justifyContent: 'center',
                                width: '100%',
                            }}>
                            <Grid
                                item
                                xs={10}
                                sm={5}
                                sx={{ textAlign: 'center', width: '100%' }}>
                                <TextField
                                    sx={{ width: '100%' }}
                                    required
                                    label="First Name"
                                    onChange={handleChange}
                                    value={formValues.firstName || ''}
                                    name="firstName"
                                    type="text"
                                    // onChange={handleChange}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={10}
                                sm={5}
                                sx={{ textAlign: 'center' }}>
                                <TextField
                                    sx={{ width: '100%' }}
                                    required
                                    label="Last Name"
                                    value={formValues.lastName || ''}
                                    name="lastName"
                                    type="text"
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                justifyContent: 'center',
                                width: '100%',
                            }}>
                            <Grid item xs={10}>
                                <TextField
                                    sx={{ width: '100%' }}
                                    required
                                    label="Email Adress"
                                    value={formValues.email || ''}
                                    name="email"
                                    type="email"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    sx={{ width: '100%' }}
                                    required
                                    label="Password"
                                    value={formValues.password || ''}
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                justifyContent: 'center',
                                width: '100%',
                            }}>
                            <Grid item xs={10}>
                                <Button
                                    onClick={handleGoogleSignup}
                                    sx={buttonSX}
                                    variant="contained"
                                    size="large">
                                    <GoogleIcon /> sign up with google
                                </Button>
                            </Grid>
                            <Grid item xs={10}>
                                <Button
                                    sx={buttonSX}
                                    variant="contained"
                                    size="large"
                                    type="submit">
                                    Sign up
                                </Button>
                            </Grid>
                            <Grid item xs={10}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'end',
                                        width: '100%',
                                        color: 'blue',
                                        textDecoration: 'underline',
                                    }}>
                                    <Typography
                                        sx={{
                                            cursor: 'pointer',
                                            fontSize: '0.8rem',
                                        }}>
                                        Already have an account? Sign in
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        {/* <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                flexWrap: 'wrap',
                                gap: '10px',
                            }}>
                            <TextField
                                sx={{ width: '45%', minWidth: '200px' }}
                                required
                                label="First Name"
                                name="firstName"
                                type="text"
                                // onChange={handleChange}
                            />
                            <TextField
                                sx={{ width: '45%', minWidth: '200px' }}
                                required
                                label="Last Name"
                                name="lastName"
                                type="text"
                                // onChange={handleChange}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100%',
                                gap: '10px',
                            }}>
                            <TextField
                                sx={{ width: '90%', minWidth: '200px' }}
                                required
                                label="Email Adress"
                                name="email"
                                type="email"
                                // onChange={handleChange}
                            />
                            <TextField
                                sx={{ width: '90%', minWidth: '200px' }}
                                required
                                label="Password"
                                name="password"
                                type="password"
                                // onChange={handleChange}
                            />
                        </Box> */}
                    </Box>
                </Box>
            </Drawer>
        </div>
    );
}
