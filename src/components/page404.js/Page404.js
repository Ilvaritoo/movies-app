import React, {useContext} from 'react';
import {ContextProvider} from '../../Context';


const Page404 = () => {

    const contexts = useContext(ContextProvider);
    // console.log(contexts);
    return (
        <div>
            Page not found!!!!
           <p>{contexts}</p>
        </div>
    )
}

export default Page404
