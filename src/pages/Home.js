import React from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';

const Home = () => {
    return (
        <main>
            <SearchForm />
            <CharacterList />
        </main>
    );
}

export default Home;
