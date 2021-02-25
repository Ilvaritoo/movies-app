import React from 'react';
import './item.scss';
const moviesImages = `https://image.tmdb.org/t/p/w500`;



const Item = ({ item }) => {
    // const { id, adult, original_language, title, poster_path, release_date, vote_average, overview } = item;
    const { title, poster_path, release_date, vote_average } = item;

    return (
        <div className='item'>
            <div className="item__img">
                <img src={`${moviesImages}${poster_path}`} alt={title} />
            </div>

            <div className="item__title">
                <h3>{title}</h3>
                <p>Released : {release_date}</p>
                <div className="item__vote">
                    <p>Rate <span style={{backgroundColor: vote_average > 6? 'green' : 'orange'}}>{vote_average}</span></p>
                </div>
            </div>


        </div>
    )
}

export default Item
