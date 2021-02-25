import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './item/Item';

const Row = ({test}) => {

    const [movie, setMovie] = useState([]);

    useEffect(()=> {
        axios.get(test)
        .then(res => setMovie(res.data.results))
        .catch(error => console.log(error))
    }, []);


    return (
        <div>
            {
                movie.map(item => {
                    return(
                        <Item key={item.id}/>
                    )
                })
            }
        </div>
    )
}

export default Row
