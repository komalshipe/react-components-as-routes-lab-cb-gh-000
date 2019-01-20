import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    	<h1>Directors</h1>
    	<ul>
    		{
    			directors.map(director => 	(<li>
    											<h3>{director.name}</h3>
    											<ul>
    												{director.movies.map(movie => <li> {movie} </li> ) }
    											</ul> </li>
    											))
    		}
    	</ul>
    </div>
  );
}

export default Directors
