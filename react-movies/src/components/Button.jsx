import React from 'react'


function Button(props) {
    console.log(props.movies)
    const favoriteMovies = () => {
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


    return (

        <div>
            <button onClick={() => { favoriteMovies(); props.onClick(); }}>MyList</button>
        </div >


    )
}

export default Button