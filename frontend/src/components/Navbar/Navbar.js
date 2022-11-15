import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Stack } from '@mui/material';


export const Navbar = () => {
  return (
    <Stack className="stackOne" direction="row"  
     sx={{ gap: { sm: '45', xs: '28px' }, mt: { sm: '28px', xs: '9px' }, justifyContent: 'none' }} 
     px="20px">
      <Link to="/" className="houseIcon"><FaHome /></Link>
      <a href="http://localhost:3000/#search" className="exercises-link">Exercise List</a>
    </Stack>
  )
}

export default Navbar;
