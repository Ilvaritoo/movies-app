import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './title.scss';

const moviesImages = `https://image.tmdb.org/t/p/w500`;

    const Title = ({test}) => {
        // console.log(test);
    const [background, setbackground] = useState([]);

        useEffect(()=> {
            axios.get(test)
            .then( res => setbackground(res.data.results[Math.floor(Math.random()* res.data.results.length -1)]))
            .catch(error => console.log(error))
        },[])

        // console.log(moviesImages + background.poster_path);

    return (
        <div className='title' 
        style={{ backgroundImage: `url(${moviesImages}${background?.poster_path})`}}>
            <div className="title__text__container">
                <h1>{background.title}</h1>
                <p>{background.overview}</p>
                <p className='vote'>{background.vote_average}</p>
                {/* <p>{background.release_date}</p> */}
            </div>
        </div>
    )
}

export default Title