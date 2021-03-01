import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import './title.scss';

const moviesImages = `https://image.tmdb.org/t/p/w500`;

const Title = ({ test }) => {
    // console.log(test);
    
    const [background, setbackground] = useState([]);

    useEffect(() => {
        axios.get(test)
            .then(res => setbackground(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]))
            .catch(error => console.log(error))
    }, [test])

    // console.log(moviesImages + background.poster_path);

    return (
        <div className='title'
            style={{ backgroundImage: `url(${moviesImages}${background?.poster_path})` }}>
            <div className="title__text__container">
                <h1>Unlited movies and tv shows</h1>
            </div>
        </div>
    )
}

export default Title
