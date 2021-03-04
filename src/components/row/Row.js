import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Item from './item/Item';
import './row.scss';
import { genresId} from '../../requests';
import {MoviesContext} from '../../MovieProvider';

const Row = () => {
    const [movies, changeGenre] = useContext(MoviesContext);

    const [movie, setMovie] = useState([]);
    const [isBtnVisible, setIsBtnVisible] = useState(false);

    useEffect(() => {
        axios.get(movies)
            .then(res => setMovie(res.data.results))
            .catch(error => console.log(error))
    }, [movies]);

    // CHANGE BUTTON VISIBILITY
    const openGenres = () => {
        setIsBtnVisible(isBtnVisible => !isBtnVisible)
    };


    return (
        <div className='row'>
            
            {/* GENRES SWITCH BUTTON */}
            <div className="row__genres__switch" onClick={openGenres} style={{ backgroundColor: isBtnVisible ? 'red' : 'green' }}>
                <h3 >{isBtnVisible ? 'Close' : 'Genres'}</h3>
            </div>

           {/* ALL GENRES BUTTONS CONTAINER */}
            <div className={`row__genres ${isBtnVisible ? 'row__genres__visible' : ''}`}>
                {
                    genresId.map(genreBtn => {
                        return (
                        <button key={genreBtn.id} className='row__genres__btn'
                        onClick={() => changeGenre(genreBtn.id)}
                        >{genreBtn.name}
                        </button>
                    )})
                }
            </div>


            {/* MOVIES CONTAINER */}
            <div className="row__items">
                {
                    movie.map(item => {
                        return (
                            <Item key={item.id} item={item} />
                        )
                    })
                }
            </div>
            

        </div>
    )
}

export default Row