import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useAuthContext } from '../context/AuthProvider';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import { handleLogOut } from '../firebase/auth';

export default function HamburgerMenu({ setLoginOpen, setRegisterOpen }) {
    // const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { user } = useAuthContext();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                sx={{ color: 'text.primary' }}
                id="hamburger-button"
                aria-controls={open ? 'hamburger' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <MenuIcon />
            </Button>
            <Menu
                id="hamburger"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
                MenuListProps={{
                    'aria-labelledby': 'hamburger-button',
                }}>
                {!user && (
                    <Box>
                        <MenuItem
                            id="login"
                            onClick={(e) => {
                                handleClose();
                                setLoginOpen(true);
                            }}>
                            Login
                        </MenuItem>
                        <MenuItem
                            id="register"
                            onClick={() => {
                                handleClose();
                                setRegisterOpen(true);
                            }}>
                            Register
                        </MenuItem>
                    </Box>
                )}
                {user && (
                    <Box>
                        <MenuItem id="profile" onClick={handleClose}>
                            Profile
                        </MenuItem>

                        <MenuItem
                            id="logout"
                            onClick={(e) => {
                                handleClose(e);
                                handleLogOut();
                            }}>
                            Logout
                        </MenuItem>
                    </Box>
                )}
            </Menu>
        </div>
    );
}
