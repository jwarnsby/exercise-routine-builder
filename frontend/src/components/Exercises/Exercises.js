import React from 'react';
import './Exercises.css';
import ExerciseInfo from '../ExerciseInfo/ExerciseInfo';


const Exercises = ({ exercises, setExercises, setListFavs, listFavs}) => {

  return (
    <section className="exercise-section">
      <div className="exercise-container">
      {exercises.map((exe, id) => (<ExerciseInfo exercise={exe} setListFavs={setListFavs} key={id} listFavs={listFavs}/>))}
      </div>
    </section>
  
  )
}

export default Exercises;

