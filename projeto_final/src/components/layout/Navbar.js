import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavB = () => {
    return (
        <nav className="nav-wrapper black">
            <div className="container">
                <Link to='/' className="logo">HINAMIC</Link>
                <SignedOutLinks/>
            </div>
        </nav>




        /*<Navbar className="navbar" id="basic-navbar-nav">
            <Navbar.Brand className="logo">Hinamic</Navbar.Brand>
            <Nav>
                <Nav.Item className="pr-2">Projetos</Nav.Item>
                <Nav.Item className="pr-2 pl-2">Criadores</Nav.Item>
                <Nav.Item className="pr-2 pl-2">Freelance</Nav.Item>
                <Nav.Item className="pr-2 pl-2">Empregos</Nav.Item>
                <Nav.Item className="pl-2">Vendas</Nav.Item>
            </Nav>
        </Navbar>*/
    )
}

export default NavB;