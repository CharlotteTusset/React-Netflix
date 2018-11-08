import React, {Component} from 'react';
import MovieData from '../data/movie.json';
import Header from './header';

class Movies extends Component {
  constructor(){
  	super();
  	this.state = {
  		search: '...',
  	};
  }

  // callback
  handleSearch = (searchValue) => {
  	this.setState({search: searchValue});
  }

  render() {
  	let filteredMovies = MovieData.movie.filter(
  		(movieDetails) => {
  			return movieDetails.Title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
  		}
  	);
    return (
      <div className="card_container">
      	  <Header callback={this.handleSearch}/>
      	  <div className="movie-container">
		    	{filteredMovies.map((movieDetails)=>{
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