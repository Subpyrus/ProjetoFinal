import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink className="links" to='/projetos'>PROJETOS</NavLink></li>
            <li><NavLink className="links" to='/'>CRIADORES</NavLink></li>
            <li><NavLink className="links" to='/'>FREELANCE</NavLink></li>
            <li><NavLink className="links" to='/'>EMPREGOS</NavLink></li>
            <li><NavLink className="links" to='/vendas'>VENDAS</NavLink></li>
            <li><NavLink className="links" to='/entrar'>ENTRAR</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;