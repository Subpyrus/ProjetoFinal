import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Projetos</NavLink></li>
            <li><NavLink to='/'>Criadores</NavLink></li>
            <li><NavLink to='/'>Freelance</NavLink></li>
            <li><NavLink to='/'>Empregos</NavLink></li>
            <li><NavLink to='/'>Vendas</NavLink></li>
            <li><NavLink to='/'>Entrar</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;