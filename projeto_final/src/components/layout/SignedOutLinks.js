import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {

    return (
            <ul>
                <li><NavLink className="links" to='/projetos'>PROJETOS</NavLink></li>
                <li><NavLink className="links" to='/criadores'>CRIADORES</NavLink></li>
                <li><NavLink className="links" to='/freelance'>FREELANCE</NavLink></li>
                <li><NavLink className="links" to='/empregos'>EMPREGOS</NavLink></li>
                <li><NavLink className="links" to='/vendas'>VENDAS</NavLink></li>
                <li><NavLink className="links" to='/entrar'>ENTRAR</NavLink></li>
            </ul>
    )
}

export default SignedOutLinks;