/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (

        <nav className="nav-wrapper blue darken-2">
            <div className="container">
                <a className="brand-logo">New York Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/ContactUs">Contact</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                </ul>
            </div>
        </nav>


    )
}

export default NavBar