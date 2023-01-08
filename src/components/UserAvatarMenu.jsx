import { Menu, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import { useState } from 'react';
import { useAuthContext } from '../context/AuthProvider';
import { handleLogOut } from '../firebase/auth';

export default function UserAvatarMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    // const [open, setOpen] = useState(false);
    const { user } = useAuthContext();

    const handleClick = (event) => {
        // setOpen(event.currentTarget);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (open) => {
        // setOpen(open);
        setAnchorEl(null);
    };

    return (
        <div>
            <Avatar
                sx={{ cursor: 'pointer' }}
                id="menu-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                alt={user?.displayName?.toUpperCase()}
                onClick={handleClick}
                src={user?.photoURL}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose(false)}
                MenuListProps={{
                    'aria-labelledby': 'menu-button',
                }}>
                <MenuItem onClick={() => handleClose(false)}>Profile</MenuItem>

                <MenuItem
                    onClick={() => {
                        handleClose(false);
                        handleLogOut();
                    }}>
                    Logout
                </MenuItem>
            </Menu>
        </div>
    );
}
