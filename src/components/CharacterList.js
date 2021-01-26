import React from 'react';
import Character from './Character';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CharacterList = () => {
    const { characters, loading } = useGlobalContext();
    console.log(characters);

    if(loading){
        return <Loading />
    }
    if(characters.length < 1 ){
        return(
            <h2 className="section-title">no character match that search.</h2>
        );
    }
    return (
        <section className="section">
            <h2 className="section-title">characters</h2>
            <div className="characters-center">
                {characters.map((item) => {
                    return <Character Key={item.id} {...item} />
                })}
            </div>
        </section>
    );
}

export default CharacterList;
