import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './title.css';

const moviesImages = `https://image.tmdb.org/t/p/w500`;

const Title = ({ popular }) => {
    // console.log(test);
    
    const [background, setbackground] = useState([]);

    useEffect(() => {
        axios.get(popular)
            .then(res => setbackground(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]))
            .catch(error => console.log(error))
    }, [popular])

    // console.log(moviesImages + background.poster_path);

    return (
        <div className='title'
            style={{ backgroundImage: `url(${moviesImages}${background?.backdrop_path})` }}>
            <div className="title__text__container">
                <h1>Unlited movies and tv shows</h1>
            </div>
        </div>
    )
}

export default Title
