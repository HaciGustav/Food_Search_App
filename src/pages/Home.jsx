import { Box, Button, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import RecipeReviewCard from '../components/RecipeReviewCard';
import SearchModal from '../components/SearchModal';

const Home = () => {
    // open function for modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [checkValue, setCheckValue] = useState({
        mealType: {},
    });

    const handleCheck = (e) => {
        setCheckValue((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <Paper>
            <Navbar />
            <SearchModal
                handleCheck={handleCheck}
                open={open}
                setOpen={setOpen}
                checkValue={checkValue}
            />
            <Box
                component={'form'}
                sx={{
                    backgroundImage: `url(https://github.com/HaciGustav/Food_Search_App/blob/main/src/assets/home_images/a.jpg?raw=true)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '50vh',
                    display: 'flex',
                    flexDirection: 'column',

                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Box
                    sx={{
                        // width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'end',
                    }}>
                    <TextField
                        id="standard-basic"
                        variant="filled"
                        label="Search Recipe"
                        sx={{
                            backgroundColor: '#90a4aea6',
                            width: '35vw',
                            borderRadius: '4px',
                            minWidth: '280px',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        columnGap: '10px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '5px',
                    }}>
                    <Button type="submit" variant="contained">
                        Search
                    </Button>
                    <Button variant="contained" onClick={handleOpen}>
                        Advanced Search
                    </Button>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {[1, 1, 1].map((item, i) => (
                    <RecipeReviewCard key={i} />
                ))}
            </Box>
        </Paper>
    );
};

export default Home;
