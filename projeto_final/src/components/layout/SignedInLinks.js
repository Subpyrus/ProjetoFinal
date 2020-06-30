import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <span>
            <ul className="right hide-on-med-and-down">
                <li><NavLink className="links" to='/projetos'>PROJETOS</NavLink></li>
                <li><NavLink className="links" to='/'>CRIADORES</NavLink></li>
                <li><NavLink className="links" to='/'>FREEELANCE</NavLink></li>
                <li><NavLink className="links" to='/'>EMPREGOS</NavLink></li>
                <li><NavLink className="links" to='/vendas'>VENDAS</NavLink></li>
                <li><NavLink onClick={props.signOut} className="links" to='/'>LOG OUT</NavLink></li>
                <li><NavLink to='/' className="btn-small btn-floating yellow"></NavLink></li>
            </ul>

            <ul className="sidenav" id="mobile-demo">
                <li><NavLink className="links" to='/projetos'>PROJETOS</NavLink></li>
                <li><NavLink className="links" to='/'>CRIADORES</NavLink></li>
                <li><NavLink className="links" to='/'>FREEELANCE</NavLink></li>
                <li><NavLink className="links" to='/'>EMPREGOS</NavLink></li>
                <li><NavLink className="links" to='/vendas'>VENDAS</NavLink></li>
                <li><NavLink onClick={props.signOut} className="links" to='/'>LOG OUT</NavLink></li>
                <li><NavLink to='/' className="btn-small btn-floating yellow"></NavLink></li>
            </ul>
        </span>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);