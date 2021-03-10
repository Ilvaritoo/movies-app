import React, {createContext, useState} from 'react';
import {popularMovies, changeGenreLink, searchQuery } from './links';

export const MoviesContext = createContext();

export const MovieProvider = (props) => {
    // POPULAR MOVIES STATE FOR 'PopulatMoviesRow.js' COMPONENT
    const [movies, setMovies] = useState([popularMovies]);

    // STATE FOR MOVIES SEARCHING 
    const [searchMovie, setSearchMovie] = useState('');

    // STATE TO RESET SEARCH INPUT VALUE IN 'Heading.js' COMPONENT
    const [inputValue, setInputValue] = useState('');


    // THIS FUNCTION CHANGES GENRE ID
    const changeGenre = (id)=>{
        setMovies(`${changeGenreLink}${id}`);
    };

    // THIS FUNCTION IS FOR SEARCH MOVIES
    const searchMovies = (query) => {
        if(query){
            return setSearchMovie(`${searchQuery}${query}`);
        }
        else{
            return setSearchMovie('')
        }
    }



    return (
        <MoviesContext.Provider value={[movies, changeGenre, searchMovies, searchMovie]}>
            {props.children}
        </MoviesContext.Provider>
    )
}

