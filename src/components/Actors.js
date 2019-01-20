import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
	    <ul>
	    	{actors.map(actor => (
	    							<li><h3>{actor.name}</h3>
	    								<ul>
	    									{actor.movies.map(movie => <li>{movie}</li>)}
	    								</ul>
	    							</li>
	    							)
			)}
	    </ul>
    </div>
  );
};

export default Actors;
