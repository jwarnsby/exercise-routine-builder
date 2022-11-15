import React from 'react'
import ExerciseInfo from '../ExerciseInfo/ExerciseInfo';
import './Favorites.css'



const Favorites = ({ listFavs, setListFavs }) => {
  
  const handleClickFavButton = () => {
    const emptyList = [];
    localStorage.setItem('favoriteExercises', JSON.stringify(emptyList));
    setListFavs(emptyList);
  }

  return (
    <section className="favorites-section">
      {listFavs.length > 0
        ?<h1>Your Workout Routine:</h1>
        :<h1> </h1>
      }

    {listFavs.length > 0
      ?<div className="favorites-container">
        { listFavs && listFavs.map(fav => (
          <ExerciseInfo exercise={fav} key={fav._id} listFavs={listFavs} setListFavs={setListFavs}/>
        ))}
      </div>
      : <div></div>
      }

    {listFavs.length > 0
      ?<button className="clear-button" onClick={handleClickFavButton}>Clear Routine </button>
      :<h1> </h1>
      }
    </section>
    
  )
}

export default Favorites