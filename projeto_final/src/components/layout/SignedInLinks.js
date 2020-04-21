import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink className="links" to='/projetos'>PROJETOS</NavLink></li>
            <li><NavLink className="links" to='/'>CRIADORES</NavLink></li>
            <li><NavLink className="links" to='/'>FREEELANCE</NavLink></li>
            <li><NavLink className="links" to='/'>EMPREGOS</NavLink></li>
            <li><NavLink className="links" to='/vendas'>VENDAS</NavLink></li>
            <li><NavLink to='/' className="btn-small btn-floating yellow"></NavLink></li>
        </ul> 
    )
}

export default SignedInLinks;