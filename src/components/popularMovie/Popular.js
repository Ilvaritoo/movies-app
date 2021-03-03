import React from 'react';
import './Popular.css';

const moviesImages = `https://image.tmdb.org/t/p/w500`;

const Popular = ({ popular }) => {
    console.log(popular);
    return (
        <div className='popular'>
            <div className="popular__title">
                <h2>Popular Movies</h2>
            </div>
            <div className="popular__movies__container">
                {popular.map(popMovie => {
                    return (
                        <div className="popMovie" key={popMovie.id}>
                            <img src={`${moviesImages}${popMovie.poster_path}`} alt={popMovie.title} />
                        </div>
                    )
                })
                }
            </div>


        </div>
    )
}

export default Popular
