import React, { useContext, useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import './SearchMovie.css';
import axios from 'axios';
import { MoviesContext } from '../../MovieProvider';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const moviesImages = `https://image.tmdb.org/t/p/w500`;

const SearchMovie = () => {
    // eslint-disable-next-line
    const [movies, changeGenre, searchMovies, searchMovie, removeSearchComponent] = useContext(MoviesContext);


    // CHECKS IS THERE SOME ITEMS
    const [items, setItems] = useState('');

    useEffect(() => {
        axios.get(searchMovie)
            .then(res => setItems(res.data.results))
            .catch(error => console.log(error))
    }, [searchMovie]);

    return (
        <div className={items ? 'searchMovie' : 'removeSearchMovie'}>
            <div className="closeBtn" onClick={removeSearchComponent}><AiOutlineCloseCircle /></div>
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
                                <StarRatings
                                    rating={vote_average}
                                    starRatedColor={vote_average > 6 ? 'green' : 'red'}
                                    // changeRating={setRating}
                                    numberOfStars={10}
                                    name='rating'
                                    starDimension="21px"
                                    starSpacing="1px"
                                />
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>

    )
}

export default SearchMovie
