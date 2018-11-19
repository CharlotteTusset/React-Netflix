import React, {Component} from 'react';
import MovieData from '../data/movie.json';
import Search from './Search';

class Movies extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		search: '',
  		movies: MovieData.movie
  	};
  }
  // callback
  handleChange(e) {
  	this.setState({search: e.target.value});
  }

  render() {
  	const filteredMovies = this.state.movies.filter((searchText) => {
  		let search = searchText.Actors.toLowerCase() + " " + searchText.Title.toLowerCase() + " " + searchText.Year;
  		return search.match(this.state.search);
  	});

    return (
      <div className="card_container">
      	  <Search StrUser={this.state.search} Funct={this.handleChange.bind(this)}/>
      	  <div className="movie-container">
		    	{filteredMovies.map((movieDetails)=>{
		    	return (
		    		<div className="wrapper-card">
		    			<img src={movieDetails.Poster} alt={movieDetails.Title}/>
		    			<h3>{movieDetails.Title}</h3>
		    			<p>{movieDetails.Year}</p>
		    			<p>{movieDetails.Plot}</p>
		    			<p className="actors">{movieDetails.Actors}</p>
		    		</div>
		    	);
		    	})}
		  </div>
     </div>
    );
  }
}

export default Movies;