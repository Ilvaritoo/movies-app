import React, { useContext, useEffect, useState } from 'react';
import './SearchMovie.css';
import axios from 'axios';
import { MoviesContext } from '../../MovieProvider';

const moviesImages = `https://image.tmdb.org/t/p/w500`;

const SearchMovie = () => {
    // eslint-disable-next-line
    const [movies, changeGenre, searchMovies, searchMovie] = useContext(MoviesContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(searchMovie)
            .then(res => setItems(res.data.results))
            .catch(error => console.log(error))
    }, [searchMovie]);

    const removeComponent = () => {
        setItems(null);
    }

    return (
        <div className={items ? 'searchMovie' : ''}>
            <div className="closeBtn"><button onClick={removeComponent}>X</button></div>
            {items && items.map(item => {
                const { title, poster_path, release_date, vote_average } = item;
                return (
                    <div className="item" key={item.id}>
                        <div className="item__img">
                            <img src={poster_path ? `${moviesImages}${poster_path}` : `../../../images/camera.png`} alt={title} />
                        </div>
                        <div className="item__title">
                            <h3>{title}</h3>
                            <p>Released : {release_date}</p>
                            <div className="item__vote">
                                <p>Rate <span style={{ backgroundColor: vote_average > 6 ? 'green' : 'orange' }}>{vote_average}</span></p>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>

    )
}

export default SearchMovie
