import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import {
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    minWidth: '300px',
    maxHeight: '100vh',

    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '1rem',
    boxShadow: 24,
    paddingBottom: '1.5rem',
};

export default function SearchModal({
    handleCheck,
    open,
    setOpen,
    checkValue,
}) {
    const handleClose = () => setOpen(false);

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            rowGap: '5px',
                        }}>
                        <Box
                            sx={{
                                width: '100%',
                                textAlign: 'center',
                                padding: '1.5rem',
                                borderRadius: '1rem 1rem 0 0',
                                backgroundColor: 'beige',
                            }}>
                            <TextField
                                sx={{ width: '50%' }}
                                variant="standard"
                                label="Search Recipe"
                                name="q"
                            />
                        </Box>{' '}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                columnGap: '10px',
                            }}>
                            <Button variant="contained">Reset</Button>
                            <Button variant="contained">Search</Button>
                        </Box>
                        <Grid
                            container
                            direction="row"
                            spacing={2}
                            sx={{
                                paddingInline: '2rem',
                            }}>
                            <Grid
                                item
                                xs={12}
                                md={4}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRight: '2px solid black',
                                    borderBottom: '2px solid black',
                                }}>
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
                            <Grid
                                item
                                xs={12}
                                md={4}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRight: '2px solid black',
                                    borderBottom: '2px solid black',
                                    paddingTop: '10px',
                                }}>
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
                                        value="main course"
                                        checked={
                                            checkValue.dishType ===
                                            'main course'
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
                            <Grid
                                item
                                xs={12}
                                md={4}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRight: '2px solid black',
                                    borderBottom: '2px solid black',
                                    paddingTop: '10px',
                                }}>
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
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
