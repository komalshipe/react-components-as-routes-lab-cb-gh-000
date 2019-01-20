import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    	<ul>
    		{movies.map(movie => (<li>
    								<h3>{movie.title}</h3>
    								Duration : {movie.time}
    								<p> {movie.genres.join(', ')} </p>
    								<p>{movie.metascore?"Metascore : "+movie.metascore:''}</p>
    							</li>)

    			)}
    	</ul>
    </div>
  );
};

export default Movies;
