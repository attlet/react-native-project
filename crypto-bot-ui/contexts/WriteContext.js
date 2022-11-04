import React from 'react';
import { createContext, useState } from 'react';

const WriteContext = createContext();

export function WriteContextProvider({children}){
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [method, setMethod] = useState('');
    
    return(
        <WriteContext.Provider value={{name, amount, method, setName, setAmount, setMethod}}>
            {children}
        </WriteContext.Provider>
    );
}

export default WriteContext;