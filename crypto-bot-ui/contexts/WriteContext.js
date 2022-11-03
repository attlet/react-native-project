import React from 'react';
import { createContext, useState } from 'react';

const WriteContext = createContext();

export function WriteContextProvider({children}){
    const [method, setMethod] = useState('');

    return(
        <WriteContext.Provider value={{method, setMethod}}>
            {children}
        </WriteContext.Provider>
    );
}

export default WriteContext;