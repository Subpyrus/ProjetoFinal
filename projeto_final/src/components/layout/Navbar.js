import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import '../../App.css';

class NavB extends React.Component {
    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {edge:"right", preventScrolling: "true"});
        });
    }
    render() {
        return (
            <nav className="nav-wrapper black">
                <div className="container">
                    <Link to='/' className="logo">HINAMIC</Link>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                    <SignedOutLinks/>
                </div>
            </nav>
        )
    }
};

export default NavB;