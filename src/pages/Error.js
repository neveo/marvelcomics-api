import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className="error-page section">
            <div className="error-container">
                <h3>oops! That page must in the DC world</h3>
                <Link to="/marvelcomics-api" className="btn btn-primary">
                    back home
                </Link>
            </div>
        </section>
    );
}

export default Error;
