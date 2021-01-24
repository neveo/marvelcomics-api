import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const FormInput = () => {
    const [ firstName, setFirstName ] = useState('');
    const [ email, setEmail ] = useState('');

    const handleSumbit = (e) => {
        e.preventDefault();
        this.props.history.push('/search');

    }

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
                           id="firstName"
                           required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input type="text"
                           id="Email"
                           required
                    />
                </div>
                <button type="submit" >Enter</button>
            </form>
        </article>
        </>
    );
};

export default FormInput;