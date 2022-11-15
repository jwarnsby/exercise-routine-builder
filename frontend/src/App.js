import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import ExerciseDescription from './pageRoutes/ExerciseDescription';
import HomePage from './pageRoutes/HomePage';
import Navbar from './components/Navbar/Navbar';



const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercise/:id" element={<ExerciseDescription />} />
      </Routes>
    </Box>
  )
}

export default App;