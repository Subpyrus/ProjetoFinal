import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import '../../App.css';

const NavB = () => {
    return (
        <nav className="nav-wrapper black">
            <div className="container">
                <Link to='/' className="logo">HINAMIC</Link>
                <SignedOutLinks/>
            </div>
        </nav> 
    )
}

export default NavB;