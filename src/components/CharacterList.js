import React from 'react';
import Character from './Character';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CharacterList = () => {
    const { characters, loading } = useGlobalContext();

    if(loading){
        return <Loading />
    }
    if(characters.length < 1 ){
        return(
            <h2 className="section-title">no character match that search.</h2>
        );
    }
    return (
        <div>
            <h2>character list</h2>
        </div>
    );
}

export default CharacterList;
