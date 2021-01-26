import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const FormInput = () => {
    const [ firstName, setFirstName ] = useState('');
    const [ email, setEmail ] = useState('');

    const history = useHistory();
    
    const handleSumbit = (e) => {
        e.preventDefault();
        const formData = { firstName, email };
        history.push('/search');
    };
    return (
        <>
        <div className="title">
            <h2>Marvel character API</h2>
            <div className="underline"></div>
        </div>
        <article>
            <form className="form" onSubmit={handleSumbit}>
                <div className="form-control">
                    <label htmlFor="firstName">Name: </label>
                    <input type="text"
                        required
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input type="text"
                        id="Email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        
                    />
                </div>
                <button type="submit">Enter</button>
            </form>
        </article>
        </>
    );
    
};

export default FormInput;