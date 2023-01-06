import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import RecipeReviewCard from '../components/RecipeReviewCard';
import SearchModal from '../components/SearchModal';

const Home = () => {
    // open function for modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [data, setData] = useState([]);

    const [checkValue, setCheckValue] = useState({
        mealType: 'dinner',
    });
    const getRecipe = async () => {
        let url = `https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

        if (checkValue.q && checkValue.q.length > 1) {
            url = `https://api.edamam.com/api/recipes/v2?type=public&q=${checkValue.q}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;
        }

        Object.keys(checkValue).forEach((item) => {
            if (item === 'ingr') {
                url = url + `&${item}=` + '0-' + checkValue[item];
            } else if (checkValue[item] && checkValue[item].length > 1) {
                url = url + `&${item}=` + checkValue[item];
            }
        });
        console.log('after', url);

        try {
            const { data } = await axios(url);
            setData(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleCheck = (e) => {
        setCheckValue((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getRecipe();
        handleClose();
    };

    useEffect(() => {
        getRecipe();
    }, []);

    return (
        <Paper>
            <Navbar />
            <SearchModal
                handleCheck={handleCheck}
                handleSubmit={handleSubmit}
                open={open}
                setOpen={setOpen}
                checkValue={checkValue}
                setCheckValue={setCheckValue}
            />
            <Box
                component={'form'}
                onSubmit={(e) => handleSubmit(e)}
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
                        name="q"
                        onChange={handleCheck}
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

            <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'center', paddingTop: '1rem' }}>
                {data?.hits?.map((item, i) => (
                    <RecipeReviewCard item={item} key={i} />
                ))}
            </Grid>
        </Paper>
    );
};

export default Home;
