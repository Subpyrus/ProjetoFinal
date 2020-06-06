import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {

    return (
        <span>
            <ul className="right hide-on-med-and-down">
                <li><NavLink className="links" to='/projetos'>PROJETOS</NavLink></li>
                <li><NavLink className="links" to='/criadores'>CRIADORES</NavLink></li>
                <li><NavLink className="links" to='/freelance'>FREELANCE</NavLink></li>
                <li><NavLink className="links" to='/empregos'>EMPREGOS</NavLink></li>
                <li><NavLink className="links" to='/vendas'>VENDAS</NavLink></li>
                <li><NavLink className="links" to='/entrar'>ENTRAR</NavLink></li>
            </ul>

            <ul className="sidenav" id="mobile-demo">
                <li><NavLink className="links" to='/projetos'>PROJETOS</NavLink></li>
                <li><NavLink className="links" to='/'>CRIADORES</NavLink></li>
                <li><NavLink className="links" to='/freelance'>FREELANCE</NavLink></li>
                <li><NavLink className="links" to='/empregos'>EMPREGOS</NavLink></li>
                <li><NavLink className="links" to='/vendas'>VENDAS</NavLink></li>
                <li><NavLink className="links" to='/entrar'>ENTRAR</NavLink></li>
            </ul>
        </span>
    )
}

export default SignedOutLinks;