import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = React.useRef('');

    const searchCharacter = () => {
        setSearchTerm(searchValue.current.value);
    }
    React.useEffect(() => {
        searchValue.current.focus();
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    
    return (
        <section className="section search">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Find a character in the Marvel Universe:</label>
                    <input type="text" id="name" ref={searchValue} onChange={searchCharacter}/>
                </div>
            </form>
        </section>
    );
}

export default SearchForm;