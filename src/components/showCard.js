import React, {Component} from 'react';
import MovieData from '../data/movie.json';

class Movies extends Component {
  render() {
    return (
      <div className="card_container">
      	  <div className="search">
		    	{MovieData.movie.map((movieDetails)=>{
		    	return (
		    		<div className="wrapper-card">
		    			<img src={movieDetails.Poster} alt={movieDetails.Title}/>
		    			<h3>{movieDetails.Title}</h3>
		    			<p>{movieDetails.Year}</p>
		    			<p>{movieDetails.Plot}</p>
		    		</div>
		    	);
		    	})}
		  </div>
     </div>
    );
  }
}

export default Movies;