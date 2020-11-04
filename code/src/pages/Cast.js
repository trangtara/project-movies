import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import '../style/cast.css'

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=fd00bf32c04d62eccaf294e2d6aa9fa6`)

    .then((res) => res.json())
    .then((json) => {
      console.log(json, "castList")
      setCastList(json.cast)
    })
  }, [movieId]);
  return (
    <div className="cast-card-container">
      {castList.map((cast) => (
        <article className="cast-cards"
        key={cast.id}>
          <img 
            className="cast-image" 
            src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
            alt={cast.name} 
          />
          <p>{cast.name}</p>
          <p>as {cast.character}</p>
        </article>
      ))}
    </div>
   );
};

export default Cast;
 