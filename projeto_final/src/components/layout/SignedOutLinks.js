import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink className="links" to='/'>PROJETOS</NavLink></li>
            <li><NavLink className="links" to='/'>CRIADORES</NavLink></li>
            <li><NavLink className="links" to='/'>FREELANCE</NavLink></li>
            <li><NavLink className="links" to='/'>EMPREGOS</NavLink></li>
            <li><NavLink className="links" to='/'>VENDAS</NavLink></li>
            <li><NavLink className="links" to='/'>ENTRAR</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;