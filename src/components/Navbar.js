import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../marvel.svg';
//import SearchFrom from './SearchForm';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/marvelcomics-api">
                    <img src={logo} alt="Marvel Logo" className="logo"></img>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/marvelcomics-api">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/marvelcomics-api/about">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;