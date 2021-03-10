import React, { useContext, useEffect, useState } from 'react';
import './header.css';
import { MoviesContext } from '../../MovieProvider';

const Header = () => {
    // eslint-disable-next-line
    const [movies, changeGenre, searchMovies, searchMovie, removeSearchComponent, inputValue] = useContext(MoviesContext);

    const [isNavBackground, setIsNavBackground] = useState(false)


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                return setIsNavBackground(true);
            } else {
                return setIsNavBackground(false);
            }
        });
        return window.removeEventListener('scroll', () => { });

    }, []);
    

    return (
        <div className={`header ${isNavBackground ? 'header__backround' : ''}`}>
            <div className="logo">Movie Cloud</div>
            <div className="search">
                <input type="search"
                    placeholder='search movie...'
                    value={searchMovie ? inputValue : ''}
                    onChange={e => searchMovies(e.target.value)} />
            </div>
        </div>
    )
}

export default Header
