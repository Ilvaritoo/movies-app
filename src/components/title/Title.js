import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import './title.scss';
import {popularMovies} from '../../links';

const moviesImages = `https://image.tmdb.org/t/p/w500`;

    const Title = () => {

    const [background, setbackground] = useState([]);

        useEffect(()=> {
            axios.get(popularMovies)
            .then( res => setbackground(res.data.results[Math.floor(Math.random()* res.data.results.length -1)]))
            .catch(error => console.log(error))
        },[popularMovies])


    return (
        <div className='title' 
        style={{ backgroundImage: `url(${moviesImages}${background?.poster_path})`}}>
            <div className="title__text__container">
                <h1>Unlited movies and tv shows</h1>
            </div>
        </div>
    )
}

export default Title
