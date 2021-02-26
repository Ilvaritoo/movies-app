import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './item/Item';
import './row.scss';
import { genresId} from '../../requests';
import {test, genres} from '../../links';


const Row = () => {

    const [movie, setMovie] = useState([]);
    const [isBtnVisible, setIsBtnVisible] = useState(false);

    useEffect(() => {
        axios.get(test)
            .then(res => setMovie(res.data.results))
            .catch(error => console.log(error))
    }, []);

    // CHANGE BUTTON VISIBILITY
    const openGenres = () => {
        setIsBtnVisible(isBtnVisible => !isBtnVisible)
    };

    // CHANGE GENRE FUNCTION WHEN USER CLICKS 
    const changeGenre = (id)=>{
        console.log(id);
    }



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
