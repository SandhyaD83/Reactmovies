import React from 'react'

function FavMovies(props) {
    console.log(props.movies)
    const favMovies = props.movies.map((movie) => {

        return (

            < div className="item" >
                <h1>{movie.Title}</h1>
                <h2>{movie.Genre}</h2>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Year}</h2>

            </div >
        )
    })
    return (

        <div>
            <div className="mainBox">
                {favMovies}
            </div>


        </div>



    );
}

export default FavMovies