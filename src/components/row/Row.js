import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './item/Item';
import './row.scss';
import{genresId} from '../../requests';

// const genres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=864d74a3a6d66b76c9fc89a4df3871e6&language=en-US';



const Row = ({test}) => {

    const [movie, setMovie] = useState([]);
    const [isBtnVisible, setIsBtnVisible] = useState(false);

    useEffect(()=> {
        axios.get(test)
        .then(res => setMovie(res.data.results))
        .catch(error => console.log(error))
    }, [test]);

    // CHANGE BUTTON VISIBILITY
    const openGenres = () => {
        setIsBtnVisible(isBtnVisible => !isBtnVisible)
    };

    console.log(isBtnVisible);
    return (
        <div className='row'>
            <div className="row__genres__switch" onClick={openGenres} style={{backgroundColor: isBtnVisible ? 'red' : 'green'}}>
                <h3 >{isBtnVisible ? 'Close' : 'Genres'}</h3>
            </div>
            {/* add class to show / hide genres buttons */}
            <div className={`row__genres ${isBtnVisible ? 'row__genres__visible' : ''}`}>
                {
                    genresId.map(genreBtn => {
                        return <button key={genreBtn.id} className='row__genres__btn'>{genreBtn.name}</button>
                    })
                }
            </div>
            <div className="row__items">
                {
                movie.map(item => {
                    return(
                        <Item key={item.id} item={item}/>
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default Row
