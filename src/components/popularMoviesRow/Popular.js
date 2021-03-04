import React, { useEffect, useState } from 'react';
import './Popular.css';
import { popularMovies } from '../../links';
import axios from 'axios';

const moviesImages = `https://image.tmdb.org/t/p/w500`;

const Popular = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(popularMovies)
            .then(res => setMovies(res.data.results))
            .catch(error => console.log(error))
    }, []);


    return (
        <div className='popular'>
            <div className="popular__title">
                <h2>Popular Movies</h2>
            </div>
            <div className="popular__movies__container">
                {movies.map(popMovie => {
                    return (
                        <div className="popMovie" key={popMovie.id}>
                            <img src={`${moviesImages}${popMovie.poster_path}`} alt={popMovie.title} />
                        </div>
                    )
                })
                }
            </div>


        </div>
    )
}

export default Popular