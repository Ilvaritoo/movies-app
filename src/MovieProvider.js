import React, {createContext, useState} from 'react';
import {popularMovies, changeGenreLink } from './links';

export const MoviesContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([popularMovies]);

    // THIS FUNCTION CHANGES GENRE ID
    const changeGenre = (id)=>{
        setMovies(`${changeGenreLink}${id}`);
    }

    return (
        <MoviesContext.Provider value={[movies, changeGenre]}>
            {props.children}
        </MoviesContext.Provider>
    )
}

