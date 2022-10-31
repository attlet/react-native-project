import React from 'react';
import { createContext, useState } from 'react';

const BalanceContext = createContext();

export function BalanceContextProvider({children}){
    const [balance, setBalance] = useState('');

    return(
        <BalanceContext.Provider value={{balance, setBalance}}>
            {children}
        </BalanceContext.Provider>
    );
}

export default BalanceContext;