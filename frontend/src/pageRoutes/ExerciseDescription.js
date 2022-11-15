import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getId, options, fetchVideoData } from '../services';
import { Box } from '@mui/material'
import Info from '../components/Info/Info';
import Videos from '../components/Videos/Videos';


const ExerciseDescription = () => {
  const [exerciseInfo, setExerciseInfo] = useState({});
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const exerciseId = await getId(id);

    setExerciseInfo(exerciseId);

    const youtubeVideos = await fetchVideoData(`${options.url}/search?query=${exerciseId.name} workout`, options);
    setVideos(youtubeVideos.contents);
    }
    fetchData();
  }, [id])
  return (
  
    <Box>
      <Info exerciseInfo={exerciseInfo}/>
      <Videos videos={videos} name={exerciseInfo.name}/>
    </Box>

  )
}

export default ExerciseDescription

