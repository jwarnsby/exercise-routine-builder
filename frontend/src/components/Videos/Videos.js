import React from 'react';
import { Stack, Box } from '@mui/material';
import './Videos.css';

const Videos = ({videos, name}) => {

  console.log(process.env);
  if (!videos.length) return 'Retrieving videos...';

  return (
    <Box sx={{ marginTop: { lg: '60px', xs: '20px' } }} p="19px">
      <span className='videos-header'>Additional Resources:</span> 
    <Stack sx={{ flexDirection: { lg: 'row' },
       gap: { lg: '110px', xs: '0px' } }} 
       justifyContent= "flex-start" 
       alignItems= "center"
       flexWrap= "wrap" 
       >
        {videos?.slice(0, 3)?.map((movie, idx) => (
          <a
            key={idx}
            className= "video-styling"
            target= "_blank"
            type= "media_type"
            href= {`https://www.youtube.com/watch?v=${movie.video.videoId}`}
            rel="noreferrer"
          >
            <img className="movie-img-styling"
              src={movie.video.thumbnails[0].url} 
              alt={movie.video.title} />
            <Box>
              <h1 className="movie-title">{movie.video.title}</h1>
              <h3 className="source">Content Creator: {movie.video.channelName}</h3>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
    
  )
}

export default Videos