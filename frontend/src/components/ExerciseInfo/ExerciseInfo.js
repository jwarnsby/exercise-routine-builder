import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import './ExerciseInfo.css';



const ExerciseInfo = ({ exercise, listFavs, setListFavs }) => {
  const isAlreadyFavorite = listFavs ? listFavs.includes(exercise) : [] ;
  
  const addingFavs = () => {
    const newList = [...listFavs]
    if (isAlreadyFavorite) {
      const index = newList.indexOf(exercise);
      newList.splice(index, 1)
    } else {
      exercise.isFavorite = true;
      newList.push(exercise);
    }
    localStorage.setItem('favoriteExercises', JSON.stringify(newList));
    setListFavs(newList);
  }

  return (
    <div className="exercise-info">
      <div className="exercise-name-style">
        <h2>{exercise.name}</h2>
      </div>
      <Link to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

      </Link>
      <Stack direction="row">
        <div className="btn-bodypart">Body Part:  {exercise.bodyPart}</div>
        <div className="btn-target">Muscle Targeted: {exercise.target}</div>
        <button onClick={addingFavs} className={isAlreadyFavorite ? 'favButton' : 'greenButton'}>
        {isAlreadyFavorite
           ? 'Remove Exercise' 
           : 'Add Exercise to Routine'}
           </button>
      </Stack>
    </div>
  );
}
export default ExerciseInfo;


