import React from 'react';
import './Search.css';
import { getData} from '../../services';
import { useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import Exercises from '../Exercises/Exercises';


const Search = ({ setListFavs, listFavs }) => {

  const [searchExercise, setSearchExercise] = useState('');
  const [exercises, setExercises] = useState([])

  const searchFunction = async () => {
    if (searchExercise) {
      const exerciseList = await getData()

      const searchResult = exerciseList.filter(
        (ex) => ex.equipment.toLowerCase().includes(searchExercise)
          || ex.bodyPart.toLowerCase().includes(searchExercise)
          || ex.target.toLowerCase().includes(searchExercise)
          || ex.name.toLowerCase().includes(searchExercise)
      );
      if (searchResult.length === 0) alert('No exercise found, please try a different search.');
      else {
        setSearchExercise('');
        setExercises(searchResult);
      }
    }
    
  }
 
  return (
    <Stack alignItems="center" mt="150px" justifyContent="center" p="19px">
      <div id="search">
      <Typography sx={{ fontSize: { lg: '25px', xs: '20px' } }} 
        fontFamily= "Cantarell"
        mb="10px" 
      >
        Search here for an exercise: <br /> 
      </Typography>
      </div>
      <Box position="relative" mb="30px">
        <TextField sx={{ 
          width: { lg: '600px', xs: '449px' }, 
          backgroundColor: 'white'
         }}
          placeholder="Search exercise name, bodypart, or muscle..."
          value= {searchExercise}
          onChange={(exercise) => setSearchExercise(exercise.target.value.toLowerCase())}
          type="text"
        />
        <Button className="button-search-style" sx={{ 
          bgcolor: 'red', 
          color: 'white', 
          position: 'absolute', 
          height: '56px', 
          right: '0px', 
          borderRadius: '0px',
          fontFamily: 'Cantarell',
          border: '1px solid white',
          '&:hover': {
            backgroundColor: '#f2615c',
            color: '#white',
        },
          fontSize: { lg: '15px', xs: '12px' },
          width: { lg: '120px', xs: '90px' }, 
        }}
        onClick={searchFunction}
        >
          Search
        </Button>
        <h1 className="list">Exercise Search Results:</h1>
      </Box>
      {exercises && <Exercises setExercises={setExercises} exercises={exercises} setListFavs={setListFavs} listFavs={listFavs} />}
    </Stack>
    
  )
}

export default Search;