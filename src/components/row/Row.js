import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Item from './item/Item';
import './row.scss';
import { genresId} from '../../requests';
// import {test, genres} from '../../links';
import {ContextProvider} from '../../Context';

const API_KEY = '864d74a3a6d66b76c9fc89a4df3871e6';
const baseURL = 'https://api.themoviedb.org/3';



const Row = () => {
    const [genresLink, test] = useContext(ContextProvider);
    const [url, seturl] = useState(`${baseURL}/movie/popular?api_key=${API_KEY}&page=1`);
    const [movie, setMovie] = useState([]);
    const [isBtnVisible, setIsBtnVisible] = useState(false);
    

    

    useEffect(() => {
        axios.get(url)
            .then(res => setMovie(res.data.results))
            .catch(error => console.log(error))
    }, [url]);


    // CHANGE BUTTON VISIBILITY
    const openGenres = () => {
        setIsBtnVisible(isBtnVisible => !isBtnVisible)
    };

    const changeGenre = (id) => {
        seturl(`${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=${id}`);
    }

    return (
        <div className='row'>
            {/* GENRES SWITCH BUTTON FOR SMALL DEVICES */}
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
