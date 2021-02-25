import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './item/Item';
import './row.scss';

const Row = ({test}) => {

    const [movie, setMovie] = useState([]);
    const [isBtnVisible, setIsBtnVisible] = useState(false)

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
            <div className="row__genres__switch" onClick={openGenres}>
                <h3>{isBtnVisible ? 'Close' : 'Genres'}</h3>
            </div>
            {/* <div className="row__genres"> */}
            <div className={`row__genres ${isBtnVisible ? 'row__genres__visible' : ''}`}>
                <button className='row__genres__btn'>Popular</button>
                <button className='row__genres__btn'>Action</button>
                <button className='row__genres__btn'>Comedy</button>
                <button className='row__genres__btn'>New</button>
                <button className='row__genres__btn'>Cartoon</button>
                <button className='row__genres__btn'>Scary</button>
                <button className='row__genres__btn'>Most Rated</button>
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
