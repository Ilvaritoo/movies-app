import React from 'react';

export const ContextProvider = React.createContext();

// const API_KEY = '864d74a3a6d66b76c9fc89a4df3871e6';
// const baseURL = 'https://api.themoviedb.org/3';

// export let test = `${baseURL}/movie/popular?api_key=${API_KEY}&page=1`;



export const Context = (props) => {
    return (
        <ContextProvider.Provider value = {'HELLO'}>
            {props.children}
        </ContextProvider.Provider>

    )
}



