import React from 'react'


// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
// You can also destructure your props directly from the parameter list
function MovieDisplay(props) {



    const loaded = () => {

        const displayMovies = props.movies.map((movie) => {

            return (

                <div className="item">
                    <h1>{movie.Title}</h1>
                    <h2>{movie.Genre}</h2>
                    <img src={movie.Poster} alt={movie.Title} />
                    <h2>{movie.Year}</h2>
                    <button onClick={() => props.onClick(movie)}>Add to List</button>
                </div>
            )
        })

        return (

            <div>
                <div className="mainBox">
                    {displayMovies}
                </div>

            </div>



        );
    }
    const loading = () => {
        return <h1>No Movie to display</h1>
    }
    return (
        props.movies ? loaded() : loading()

    )

}
// We must export the component to use it in other files
export default MovieDisplay