import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import {
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Select,
    Slider,
    TextField,
} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    minWidth: '300px',
    height: '80%',
    maxHeight: '100vh',
    overflow: 'auto',
    bgcolor: 'background.paper',
    color: 'text.primary',
    // border: '2px solid #000',
    borderRadius: '1rem',
    boxShadow: 24,
    // paddingBottom: '2rem',
};

const gridStyle = {
    display: 'flex',
    alignItems: 'center',
    border: '2px solid black',
    width: '100%',
};

export default function SearchModal({
    handleCheck,
    handleSubmit,
    open,
    setOpen,
    checkValue,
    setCheckValue,
}) {
    const handleClose = () => setOpen(false);
    const handleReset = () =>
        setCheckValue({
            mealType: 'dinner',
        });

    const cuisineArr = [
        'american',
        'asian',
        'british',
        'caribbean',
        'chinese',
        'french',
        'greek',
        'indian',
        'italian',
        'japanese',
        'korean',
        'kosher',
        'mediterranean',
        'mexican',
        'nordic',
        'world',
        ' ',
    ];
    const dietArr = [
        'balanced',
        'high-fiber',
        'high-protein',
        'low-carb',
        'low-fat',
        'low-sodium',
        ' ',
    ];

    return (
        <Paper>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Box
                        sx={{
                            display: 'flex',
                            // justifyContent: 'space-between',
                            height: '100%',
                            alignItems: 'center',
                            flexDirection: 'column',
                            rowGap: '10%',
                        }}>
                        <Box
                            sx={{
                                width: '100%',
                                textAlign: 'center',
                                padding: '1.5rem',
                                borderRadius: '1rem 1rem 0 0',
                                backgroundColor: '#B33F00',
                                display: 'flex',
                                flexDirection: 'column',
                                rowGap: '10px',
                                alignItems: 'center',
                            }}>
                            <TextField
                                sx={{
                                    width: '50%',
                                    minWidth: '200px',
                                    backgroundColor: '#90a4aea6',
                                }}
                                variant="filled"
                                label="Search Recipe"
                                name="q"
                                value={checkValue.q || ''}
                                onChange={handleCheck}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    columnGap: '10px',
                                    paddingBottom: '1rem',
                                }}>
                                <Button
                                    variant="contained"
                                    onClick={handleReset}>
                                    Reset
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={handleSubmit}>
                                    Search
                                </Button>
                            </Box>
                        </Box>{' '}
                        <Grid
                            container
                            direction="row"
                            spacing={2}
                            sx={{
                                paddingInline: '2rem',
                                justifyContent: 'space-around',
                            }}>
                            <Grid item sm={12} md={6} sx={gridStyle}>
                                <span
                                    style={{
                                        paddingRight: '10px',
                                        paddingBottom: '4px',
                                        fontWeight: '600',
                                    }}>
                                    Meal Type:
                                </span>

                                <RadioGroup
                                    row
                                    name="mealType"
                                    value={checkValue || ' '}
                                    onChange={(e) => handleCheck(e)}>
                                    <FormControlLabel
                                        value="breakfast"
                                        checked={
                                            checkValue.mealType === 'breakfast'
                                        }
                                        control={<Radio name="mealType" />}
                                        label="Breakfast"
                                    />
                                    <FormControlLabel
                                        value="dinner"
                                        checked={
                                            checkValue.mealType === 'dinner'
                                        }
                                        control={<Radio name="mealType" />}
                                        label="Dinner"
                                    />
                                    <FormControlLabel
                                        value="lunch"
                                        checked={
                                            checkValue.mealType === 'lunch'
                                        }
                                        control={<Radio name="mealType" />}
                                        label="Lunch"
                                    />
                                    <FormControlLabel
                                        value="snack"
                                        checked={
                                            checkValue.mealType === 'snack'
                                        }
                                        control={<Radio name="mealType" />}
                                        label="Snack"
                                    />
                                    <FormControlLabel
                                        value="teatime"
                                        checked={
                                            checkValue.mealType === 'teatime'
                                        }
                                        control={<Radio name="mealType" />}
                                        label="Tea time"
                                    />
                                </RadioGroup>
                            </Grid>
                            <Grid item sm={12} md={6} sx={gridStyle}>
                                <span
                                    style={{
                                        paddingRight: '10px',
                                        paddingBottom: '4px',
                                        fontWeight: '600',
                                    }}>
                                    Dish Type:
                                </span>
                                <RadioGroup
                                    row
                                    name="dishType"
                                    value={checkValue || ' '}
                                    onChange={(e) => handleCheck(e)}>
                                    <FormControlLabel
                                        value="drinks"
                                        checked={
                                            checkValue.dishType === 'drinks'
                                        }
                                        control={<Radio name="dishType" />}
                                        label="Drinks"
                                    />
                                    <FormControlLabel
                                        value="main-course"
                                        checked={
                                            checkValue.dishType ===
                                            'main-course'
                                        }
                                        control={<Radio name="dishType" />}
                                        label="Main Course"
                                    />
                                    <FormControlLabel
                                        value="preps"
                                        checked={
                                            checkValue.dishType === 'preps'
                                        }
                                        control={<Radio name="dishType" />}
                                        label="Preps"
                                    />
                                    <FormControlLabel
                                        value="soup"
                                        checked={checkValue.dishType === 'soup'}
                                        control={<Radio name="dishType" />}
                                        label="Soup"
                                    />
                                    <FormControlLabel
                                        value="desserts"
                                        checked={
                                            checkValue.dishType === 'desserts'
                                        }
                                        control={<Radio name="dishType" />}
                                        label="Desserts"
                                    />
                                </RadioGroup>
                            </Grid>
                            <Grid item sm={12} md={12} sx={gridStyle}>
                                <span
                                    style={{
                                        paddingRight: '10px',
                                        paddingBottom: '4px',
                                        fontWeight: '600',
                                    }}>
                                    Health Preference:
                                </span>
                                <RadioGroup
                                    row
                                    name="health"
                                    value={checkValue || ' '}
                                    onChange={(e) => handleCheck(e)}>
                                    <FormControlLabel
                                        value="alcohol-free"
                                        checked={
                                            checkValue.health === 'alcohol-free'
                                        }
                                        control={<Radio name="health" />}
                                        label="Alcohol-Free"
                                    />
                                    <FormControlLabel
                                        value="dairy-free"
                                        checked={
                                            checkValue.health === 'dairy-free'
                                        }
                                        control={<Radio name="health" />}
                                        label="Dairy-Free"
                                    />
                                    <FormControlLabel
                                        value="gluten-free"
                                        checked={
                                            checkValue.health === 'gluten-free'
                                        }
                                        control={<Radio name="health" />}
                                        label="Gluten-Free"
                                    />
                                    <FormControlLabel
                                        value="vegan"
                                        checked={checkValue.health === 'vegan'}
                                        control={<Radio name="health" />}
                                        label="Vegan"
                                    />
                                    <FormControlLabel
                                        value="vegetarian"
                                        checked={
                                            checkValue.health === 'vegetarian'
                                        }
                                        control={<Radio name="health" />}
                                        label="Vegetarian"
                                    />
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            spacing={2}
                            sx={{
                                paddingInline: '2rem',
                                justifyContent: 'space-around',
                            }}>
                            <Grid
                                item
                                sx={{
                                    width: 300,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    direction: 'column',
                                }}>
                                <InputLabel id="ingredients">
                                    Ingredients
                                </InputLabel>
                                <Slider
                                    name="ingr"
                                    labelId="ingredients"
                                    aria-label="Ingredients"
                                    defaultValue={10}
                                    onChange={handleCheck}
                                    getAriaValueText={() =>
                                        `${checkValue.ingr}`
                                    }
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={30}
                                />
                            </Grid>
                            <Grid item>
                                <InputLabel id="cuisine-select">
                                    Cuisine Type
                                </InputLabel>
                                <Select
                                    sx={{ width: 250 }}
                                    labelId="cuisine-select"
                                    name="cuisineType"
                                    value={checkValue.cuisineType || ' '}
                                    label="Cuisine Type"
                                    onChange={handleCheck}>
                                    {cuisineArr.map((item) => (
                                        <MenuItem key={item} value={item}>
                                            {item.toUpperCase()}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item sx={{ paddingBottom: '1rem' }}>
                                <InputLabel id="diet-select">
                                    Diet Labels
                                </InputLabel>
                                <Select
                                    sx={{ width: 250 }}
                                    labelId="diet-select"
                                    name="dietType"
                                    value={checkValue.dietType || ' '}
                                    label="Diet Label"
                                    onChange={handleCheck}>
                                    {dietArr.map((item) => (
                                        <MenuItem key={item} value={item}>
                                            {item.toUpperCase()}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Modal>
        </Paper>
    );
}
