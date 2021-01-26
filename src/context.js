import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

//building endpoint with api keys
const { REACT_APP_TS, REACT_APP_PUBLIC_KEY, REACT_APP_HASH } = process.env;
const ts = `${REACT_APP_TS}`;
const public_key = `${REACT_APP_PUBLIC_KEY}`;
const hash = `${REACT_APP_HASH}`;
const marvelUrl = 'https://gateway.marvel.com/v1/public/characters?ts=';
const apiendpoint = marvelUrl + ts +'&apikey=' + public_key + '&hash=' + hash;

const AppContent = React.createContext();

const AppProvider = ({ childern }) => {
    return (
        <AppContext.Provider value='testing'>{ childern }</AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }