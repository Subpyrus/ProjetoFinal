import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink className="links" to='/'>Projetos</NavLink></li>
            <li><NavLink className="links" to='/'>Criadores</NavLink></li>
            <li><NavLink className="links" to='/'>Freelance</NavLink></li>
            <li><NavLink className="links" to='/'>Empregos</NavLink></li>
            <li><NavLink className="links" to='/'>Vendas</NavLink></li>
            <li><NavLink to='/' className="btn-small btn-floating yellow"></NavLink></li>
        </ul> 
    )
}

export default SignedInLinks;