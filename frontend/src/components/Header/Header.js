import React from 'react'
import './Header.css';
import { Box } from '@mui/material'
import Arnold from '../../assets/arnold.jpeg'

const Header = () => {
  return (
    <div className="headerBox">
    <Box >
      <div className="title">
        Exercise Routine Builder
      </div>
      <div className="description">
      <br/>
        Search from a database of over 1,300 exercises <br/>
        to create your own personal workout routine! <br/>
      <div className="blurb"><br/>
      <a className="quick-link" href="http://localhost:3000/#search">Search</a> below for a specific exercise (example: "deadlift"),<br/>
        body part (example: "legs"), or muscle (example: "deltoids").<br/>
        Then simply click the "Add to Routine" button to start customizing<br/>
        your own personal routine with your favorite exercises! <br/><br/>
        Click on the exercise gif to get more information about the exercise.</div>
      </div>
      <img src={Arnold} alt="arnold" className="header-img" />
    </Box>
    </div>
  )
}

export default Header

