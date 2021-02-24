import React, { useState } from 'react';
import './filter.scss';

const Filter = () => {
    // RATING INPUTE VALUE
    const [rating, setRating] = useState(5);

    return (
        <div className='filter'>
            Filter
            <div className="inputs">
                <div className="genres">
                    <button>Action</button>
                    <button>Comedy</button>
                </div>
                <form>
                    <input type="range"  name="rating" id="rating" min="0" max="5" onChange={e => setRating(e.target.value)}/>
                    <label>rating {rating}</label>
                </form>
                
                
            </div>
        </div>
    )
}

export default Filter
