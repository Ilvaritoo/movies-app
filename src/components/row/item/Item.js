import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
const moviesImages = `https://image.tmdb.org/t/p/w500`;


const Item = ({ item }) => {

    const { title, poster_path, release_date, vote_average } = item;

    // AVERAGE RATING STATE
    const [rating, setRating] = useState(vote_average);

    return (
        <div className='item'>
            <div className="item__img">
                <img src={`${moviesImages}${poster_path}`} alt={title} />
            </div>

            <div className="item__title">
                <h3>{title}</h3>
                <p>Released : {release_date}</p>
                <div className="item__vote">
                    <StarRatings
                        rating={rating}
                        starRatedColor={rating > 6 ? 'green' : 'red'}
                        changeRating={setRating}
                        numberOfStars={10}
                        name='rating'
                        starDimension="21px"
                        starSpacing="1px"
                    />
                </div>
            </div>


        </div>
    )
}

export default Item
