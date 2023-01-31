import { Avatar, Box, Typography, useMediaQuery } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthContext } from '../context/AuthProvider';
import { userRecipes } from '../firebase/firestore';

const Recipe = ({ item }) => {
    const { image, label, addedAt } = item;
    const dateCalc = () => {
        const date = new Date();
        const { year, month, day } = addedAt;
        if (date.getFullYear() > year) {
            return `${date.getFullYear() - year} years ago`;
        } else if (date.getMonth() > month) {
            return `${date.getMonth() - month} months ago`;
        } else if (date.getDate() > day) {
            return `${date.getDate() - day} days ago`;
        } else {
            return 'today';
        }
    };
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Avatar
                    sx={{ width: '5rem', height: '5rem' }}
                    alt="Recipe Image"
                    src={image}
                />
                <Typography textAlign={'center'}>{dateCalc()}</Typography>
            </Box>

            <Typography>{label}</Typography>
        </Box>
    );
};

const Profile = () => {
    const match576 = useMediaQuery('(max-width: 576px)');
    const match768 = useMediaQuery('(max-width: 768px)');
    const match992 = useMediaQuery('(max-width: 992px)');

    const [recipes, setRecipes] = useState([]);

    const { user } = useAuthContext();
    const { photoURL, displayName, email } = user;

    const typographyStyle = {
        padding: '10px',
        borderBottom: `2px solid ${blueGrey[600]}`,
        '&:hover': { borderLeft: `8px solid ${blueGrey[600]}` },
        transition: '0.3s',
        cursor: 'pointer',
        wordBreak: 'break-all',
    };

    useEffect(() => {
        userRecipes(email).then((res) => setRecipes(res));
    }, []);
    console.log(recipes);

    return (
        <Box
            sx={{
                minHeight: 'calc(100vh - 6rem)',
                display: 'flex',
                justifyContent: 'center',

                alignItems: 'center',
                padding: '0.5rem',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: match768 ? '100%' : '80%',
                    backgroundColor: blueGrey[900],
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                    }}>
                    <Box sx={{ width: '50%' }}>
                        <Avatar
                            sx={{
                                width: '7rem',
                                height: '7rem',
                                margin: 'auto',
                            }}
                            alt={displayName || ''}
                            src={photoURL || ''}
                        />
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            width: '50%',
                            justifyContent: 'space-around',
                            alignItems: 'space-around',
                            flexDirection: 'column',
                        }}>
                        <Typography sx={typographyStyle} variant="h5">
                            {displayName}
                        </Typography>
                        <Typography sx={typographyStyle} variant="h5">
                            {email}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '80%' }}>
                    {recipes?.map((item, i) => (
                        <Recipe key={i} item={item} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Profile;
