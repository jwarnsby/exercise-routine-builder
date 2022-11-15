import React from 'react'
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Search from '../components/Search/Search';
import Header from '../components/Header/Header';
import Favorites from '../components/Favorites/Favorites'


const HomePage = () => {
  const [exercises, setExercises] = useState([]);
  const [listFavs, setListFavs] = useState([]);
  
 useEffect(() => {
    const list = localStorage.getItem('favoriteExercises');
    if (JSON.parse(list)) {
      setListFavs(JSON.parse(list));
    }
  }, []);

  return (
    <Box>
      <Header/>
      <Search setExercises={setExercises} setListFavs={setListFavs} listFavs={listFavs}/>
      <Favorites listFavs={listFavs} setListFavs={setListFavs}/>
    </Box>
  )
}

export default HomePage;