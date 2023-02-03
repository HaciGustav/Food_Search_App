import {
    Avatar,
    Box,
    Button,
    Link,
    TextField,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthContext } from '../context/AuthProvider';
import { userRecipes } from '../firebase/firestore';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkIcon from '@mui/icons-material/Link';

const Recipe = ({ item }) => {
    const match760 = useMediaQuery('(max-width:760px)');
    const match500 = useMediaQuery('(max-width:500px)');

    const {
        label,
        image,
        url,

        source,
        mealType,

        dishType,
        addedAt,
    } = item;
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
        <Box
            sx={{
                display: 'flex',

                flexDirection: match760 ? 'column' : 'row',

                width: '100%',
                border: `1px solid ${blueGrey[900]}`,
                padding: '0.5rem',
                gap: '2rem',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    columnGap: '2rem',
                    paddingLeft: '15px',
                }}>
                <Box
                    sx={{
                        display: 'flex',

                        alignItems: 'center',
                    }}>
                    <Avatar
                        sx={{
                            width: '5rem',
                            height: '5rem',
                            outline: `2px solid ${blueGrey[600]}`,
                            outlineOffset: '3px',
                            '&:hover': {
                                transform: 'scale(1.8)',
                                zIndex: '5',
                                outline: 'none',
                            },
                            transition: '0.4s',
                        }}
                        alt="Recipe Image"
                        src={image}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '100%',
                    }}>
                    <Typography
                        sx={{ borderBottom: `3px solid ${blueGrey[600]}` }}>
                        ⫸ {label}
                    </Typography>
                    <Typography>Source: {source}</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                        <Typography
                            sx={{
                                fontSize: '10px',
                                padding: '3px',
                                backgroundColor: '#f09f0abc',
                                width: '3rem',
                                borderRadius: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            {dateCalc()}
                        </Typography>
                        <Link
                            href={url}
                            sx={{
                                color: 'white',
                                padding: '3px',
                                borderRadius: '15px',
                                backgroundColor: '#f09f0abc',
                                display: match500 ? 'none' : 'flex',
                                alignItems: 'center',
                                columnGap: '10px',
                                textDecoration: 'none',
                            }}>
                            Go to Ressource{' '}
                            <LinkIcon sx={{ transform: 'rotate(45deg)' }} />
                        </Link>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%',
                    borderLeft: `3px solid ${blueGrey[600]}`,
                    paddingLeft: '10px ',
                }}>
                <Box
                    sx={{
                        padding: '5px',
                        backgroundColor: '#07f3d76a',
                        borderRadius: '10px  10px 0 0',
                    }}>
                    Meal Type:
                    {mealType?.map((meal, i) => (
                        <Typography key={i}> {meal}</Typography>
                    ))}{' '}
                </Box>
                <Box
                    sx={{
                        padding: '5px',

                        backgroundColor: '#f35e07a2',
                        borderRadius: '0 0 10px  10px ',
                    }}>
                    Dish Type:
                    {dishType?.map((dish, i) => (
                        <Typography key={i}>{dish}</Typography>
                    ))}{' '}
                </Box>
            </Box>
        </Box>
    );
};

const Profile = () => {
    const match950 = useMediaQuery('(max-width: 950px)');
    const match740 = useMediaQuery('(max-width: 740px)');

    const [recipes, setRecipes] = useState([]);

    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    const isSearched = (item) =>
        item?.label?.toLowerCase().includes(searchValue.toLowerCase()) ||
        searchValue.length === 0;

    const { user } = useAuthContext();
    const { photoURL, displayName, email } = user;

    const typographyStyle = {
        padding: '10px',
        borderBottom: `2px solid ${blueGrey[600]}`,
        '&:hover': { borderLeft: `8px solid ${blueGrey[600]}` },
        transition: '0.3s',
        cursor: 'pointer',
        wordBreak: 'break-all',
        display: 'flex',
        alignItems: 'center',
        columnGap: '5px',
    };
    const scrollbarStyle = {
        '&::-webkit-scrollbar': {
            width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#888',
        },
        '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
        },
    };

    useEffect(() => {
        userRecipes(email).then((res) => setRecipes(res));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <Box
            sx={{
                minHeight: 'calc(100vh - 6rem)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.5rem',
                backgroundImage:
                    'url(https://github.com/HaciGustav/Food_Search_App/blob/main/src/assets/profileBG.jpg?raw=true)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                color: 'white',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    // justifyContent: 'space-around',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: match950 ? '100%' : '80%',
                    backgroundColor: '#0000009e',
                    padding: match740 ? '0' : '1rem',
                    rowGap: '1rem',
                    minHeight: '90vh',
                    maxHeight: 'calc(100vh - 6rem)',
                    overflow: 'auto',
                    ...scrollbarStyle,
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: match740 ? 'column' : 'row',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        columnGap: '1rem',
                        padding: '0.5rem',
                    }}>
                    <Box>
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
                            width: match740 ? '100%' : '50%',
                            justifyContent: 'space-around',
                            alignItems: 'space-around',
                            flexDirection: 'column',
                        }}>
                        <Typography sx={typographyStyle} variant="h5">
                            {displayName}
                        </Typography>
                        <Typography sx={typographyStyle} variant="h5">
                            <MailOutlineIcon fontSize="large" /> {email}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <TextField
                        id="outlined-basic"
                        label="Search Recipe"
                        value={searchValue || ''}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                            backgroundColor: '#fff',
                            borderRadius: '5px',
                            width: '40%',
                        }}
                    />
                    <Button
                        variant="outlined"
                        sx={{ backgroundColor: blueGrey[900], color: 'white' }}>
                        Search
                    </Button>
                </Box>
                <Box sx={{ width: '80%' }}>
                    {recipes
                        ?.filter((item) => isSearched(item))
                        .map((item, i) => (
                            <Recipe key={i} item={item} />
                        ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Profile;
