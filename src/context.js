import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

//building endpoint with api keys
const { REACT_APP_TS, REACT_APP_PUBLIC_KEY, REACT_APP_HASH } = process.env;
const ts = `${REACT_APP_TS}`;
const public_key = `${REACT_APP_PUBLIC_KEY}`;
const hash = `${REACT_APP_HASH}`;
const marvelUrl = 'https://gateway.marvel.com/v1/public/characters?ts=';
const apiendpoint = marvelUrl + ts +'&apikey=' + public_key + '&hash=' + hash;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [ loading, setLoading ] = useState(true);
  const [ searchTerm, setSearchTerm ] = useState('t');
  const [ characters, setCharacters ] = useState([]);

  const fetchMarvelCharacters = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${apiendpoint}`+`&nameStartsWith=`+`${searchTerm}`)
      const data = await response.json();
      const {results} = data.data;

      if(results){
        const newCharacters = results.map((item) => {
          const {id,name,description,thumbnail} = item;
          return {id,name,description,thumbnail }
        })
        setCharacters(newCharacters);

      }else{
        setCharacters([])
      }
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
      
    }
  }

  useEffect(() => {
    fetchMarvelCharacters()
  }, [searchTerm]);

  return (
    <AppContext.Provider 
      value={{
        loading,
        characters,
        setSearchTerm,
      }}>
        {children}
    </AppContext.Provider>
  ) 
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }