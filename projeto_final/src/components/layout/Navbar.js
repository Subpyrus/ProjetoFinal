import React from './node_modules/react';
import {Navbar, Nav} from './node_modules/react-bootstrap';
import '../App.css';

function NavB() {
    return (
        <Navbar className="navbar" id="basic-navbar-nav">
            <Navbar.Brand className="logo">Hinamic</Navbar.Brand>
            <Nav>
                <Nav.Item className="pr-2">Projetos</Nav.Item>
                <Nav.Item className="pr-2 pl-2">Criadores</Nav.Item>
                <Nav.Item className="pr-2 pl-2">Freelance</Nav.Item>
                <Nav.Item className="pr-2 pl-2">Empregos</Nav.Item>
                <Nav.Item className="pl-2">Vendas</Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default NavB;