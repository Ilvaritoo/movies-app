import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './item/Item';
import './row.scss';

const Row = ({test}) => {

    const [movie, setMovie] = useState([]);

    useEffect(()=> {
        axios.get(test)
        .then(res => setMovie(res.data.results))
        .catch(error => console.log(error))
    }, [test]);


    return (
        <div className='row'>
            <div className="genres">
                <button className='genres__btn'>Popular</button>
                <button className='genres__btn'>Action</button>
                <button className='genres__btn'>Comedy</button>
                <button className='genres__btn'>New</button>
                <button className='genres__btn'>Cartoon</button>
                <button className='genres__btn'>Scary</button>
                <button className='genres__btn'>Most Rated</button>
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
