import React from 'react';
import Context from './Context';
import UseStorage from '../../util/useStorage'

const storeProvider = ({children}: any) =>{

    const [token, setToken] = UseStorage('token');

    return (
    <Context.Provider value={{token, setToken}}>
        {children}
    </Context.Provider>

        )
}

export default storeProvider;