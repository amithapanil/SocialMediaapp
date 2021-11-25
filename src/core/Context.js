import React, { createContext, useContext, useState } from 'react'

const appContext = createContext(null);

const initialValue = {
    isLogin: Boolean(localStorage.getItem('isLoggedin'))
}

export const useAppContext = ()=>useContext(appContext);
function Context({children}) {
    const [state, setState] = useState(initialValue);
    const setLogin = () =>{
      localStorage.setItem('isLoggedin', true);
      setState({isLogin: true});
    }
    const setLogout = () =>{
      localStorage.removeItem('isLoggedin');
      setState({isLogin: false});
    }
    const contextValue = {
        isLogin: state.isLogin,
        setLogin,
        setLogout
    }
    return (
        <appContext.Provider value={contextValue}>
            {children}
        </appContext.Provider>
    )
}

export default Context;
