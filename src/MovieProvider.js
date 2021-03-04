import React, {createContext, useState} from 'react';
import {popularMovies, changeGenreLink, searchQuery } from './links';

export const MoviesContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([popularMovies]);
    const [searchMovie, setSearchMovie] = useState([]);

    // THIS FUNCTION CHANGES GENRE ID
    const changeGenre = (id)=>{
        setMovies(`${changeGenreLink}${id}`);
    };

    // THIS FUNCTION IS FOR SEARCH MOVIES
    const searchMovies = (query) => {
        setSearchMovie(`${searchQuery}${query}`);
    }

    return (
        <MoviesContext.Provider value={[movies, changeGenre, searchMovies, searchMovie]}>
            {props.children}
        </MoviesContext.Provider>
    )
}

