//import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';


import Button from './components/Button';



function App() {
  //variable with your apiKey
  // const apiKey = "98e3fb1f";
  const [movie, setMovie] = useState([])
  //function to get movies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=fd1d7a04&s="${searchTerm}"`)
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie

      setMovie(data.Search);




    }
    catch (e) {
      console.error(e)
    }
  }
  // //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie();
  }, []);
  const [movieList, setMovieList] = useState([])

  const getList = (favMovie) => {
    console.log(movieList)
    setMovieList([...movieList, { id: movieList.length }])
  }
  const [show, setShow] = useState(true)
  const changeDisplay = () => {
    setShow(false)

  }
  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      {/* <button onclick={changeDisplay}>MyList</button> */}

      <Button movies={movieList} onclick={changeDisplay} />
      < MovieDisplay movies={movie} onClick={getList} />
    </div>
  );


}

export default App;
