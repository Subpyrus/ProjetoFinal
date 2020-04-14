import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function NavB() {
    return (
        <Navbar className="navbar justify-content-center">
            <Navbar id="basic-navbar-nav">
                <Nav>
                    <Nav.Item className="pr-2">Projetos</Nav.Item>
                    <Nav.Item className="pr-2 pl-2">Criadores</Nav.Item>
                    <Nav.Item className="pr-2 pl-2">Freelance</Nav.Item>
                    <Nav.Item className="pr-2 pl-2">Empregos</Nav.Item>
                    <Nav.Item className="pl-2">Vendas</Nav.Item>
                </Nav>
            </Navbar>
        </Navbar>
    )
}

export default NavB;