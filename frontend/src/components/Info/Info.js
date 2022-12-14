import React from 'react'
import { Stack } from '@mui/material';
import './Info.css';


const Info = ({ exerciseInfo }) => {
  const { gifUrl, bodyPart, target, equipment, name} = exerciseInfo;

  return (

    <Stack gap="60px" sx={{ p: '19px', flexDirection: 'row', alignItems: 'center' }}>
      <img src={gifUrl} alt="ExerciseName" loading="lazy" className="image-styling" />
      <Stack sx={{ gap: { lg: '41px', xs: '18px' } }}>
        <h1 className='name-title'>{name}</h1>
          <div className="info-styling">
            <h2 className="sub-title">The "{name}" is a {bodyPart} exercise to target your {target} muscles.</h2>
            <li>The equipment needed for this exercise is "{equipment}".</li>
            <li>We recommend doing 3 sets of 10 for this exercise</li>
            <li>Depending on your goals, we also recommend resting about 1 minute between sets.</li>
            <li>Remember to breathe out as you lift the weight and breathe in as you lower the weight. </li>
            <li>If you don't enjoy this exercise, try a different one! Exercising should be fun!</li>
            <li>For more information, check out one of the YouTube links below.</li>
          </div>
      </Stack>
    </Stack>
  )
}

export default Info;