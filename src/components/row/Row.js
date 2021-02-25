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
            {
                movie.map(item => {
                    return(
                        <Item key={item.id} item={item}/>
                    )
                })
            }
        </div>
    )
}

export default Row
