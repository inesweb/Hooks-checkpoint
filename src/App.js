import React, { useState } from 'react';

import './App.css';
import { moviesList } from './services/movies';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import SearchMovie from './components/Filter';
//import SearchBar from './components/SearchBar';

function App() {
  const [movieList, setMovieList] = useState(moviesList);
  const [searchMovie, setSearchMovie] = useState('');
  const [ratingSearch, setRatingSearch] = useState(null);

  const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);


  return (
   <div className='App'>

 
      
      <SearchMovie
          setSearchMovie={setSearchMovie}
          ratingSearch={ratingSearch}
          setRatingSearch={setRatingSearch}
        /> 
         <AddMovie handleAdd={addMovie} />
         <MoviesList
          moviesList={moviesList}
          searchMovie={searchMovie}
          ratingSearch={ratingSearch}
        />
     
    </div>
   
  );
}

export default App;