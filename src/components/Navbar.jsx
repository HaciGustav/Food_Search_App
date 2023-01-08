import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Register from './Register';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import HamburgerMenu from './Hamburger';
import { useAuthContext } from '../context/AuthProvider';
import UserAvatarMenu from './UserAvatarMenu';

const Navbar = () => {
    const [registerOpen, setRegisterOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    const [formValues, setFormValues] = useState({});

    const matches = useMediaQuery('(max-width: 600px)');
    const { user } = useAuthContext();

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                flexGrow: 1,
            }}>
            <Register
                formValues={formValues}
                setFormValues={setFormValues}
                registerOpen={registerOpen}
                setRegisterOpen={setRegisterOpen}
                setLoginOpen={setLoginOpen}
            />
            <Login
                formValues={formValues}
                setFormValues={setFormValues}
                loginOpen={loginOpen}
                setLoginOpen={setLoginOpen}
                setRegisterOpen={setRegisterOpen}
            />
            <AppBar position="static" sx={{ height: '6rem' }}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}>
                    <Typography
                        variant="h4"
                        component="div"
                        onClick={() => navigate('/home')}
                        sx={{
                            flexGrow: 1,
                            fontFamily: "'Great Vibes', cursive",
                            cursor: 'pointer',
                        }}>
                        Explorateur de Saveur
                    </Typography>

                    {!matches && !user ? (
                        <Box>
                            <Button
                                color="inherit"
                                onClick={() => setRegisterOpen(true)}>
                                Register
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => setLoginOpen(true)}>
                                Login
                            </Button>{' '}
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                display: matches ? 'none' : 'flex',
                                alignItems: 'center',
                                columnGap: '5px',
                            }}>
                            <Typography
                                sx={{
                                    display: matches && 'none',
                                    fontFamily: "'Great Vibes', cursive",
                                    fontSize: '1.5rem',
                                }}>
                                {user?.displayName}
                            </Typography>
                            <UserAvatarMenu />
                        </Box>
                    )}
                    {matches && (
                        <HamburgerMenu
                            setRegisterOpen={setRegisterOpen}
                            setLoginOpen={setLoginOpen}
                        />
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
