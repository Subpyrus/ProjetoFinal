import React from 'react';
import '../../App.css';
import sg from '../../Imgs/sg.png';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
        setTimeout(this.redirect,1000);
    }

    redirect = (e) => {
        const {auth} = this.props;
        console.log(auth)
        if(auth.uid != null) {
            document.getElementById('red').click();
        }
    }

    render() {
        const {authError,authSuccess} = this.props;

            return (
                <div className="container-fluid noscroll fundo">
                    <div className="container box">
                        <div className="row justify-content-center mb-0">
                            <div className="boxIn p-5">
                                <div className="text-center">
                                    <img src={sg} width="auto" className="mb-3"/>
                                    <h4 className="titulo">Entrar</h4>
                                    <p className="bemvindo">Bem-Vindo(a) de volta</p>
                                </div>
                                <hr className="line mb-3"/>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="input-field">
                                        <input type="email" id="email" onChange={this.handleChange}/>
                                        <label htmlFor="email">Endereço de E-mail</label>
                                    </div>
                                    <div className="input-field ">
                                        <input type="password" id="password" onChange={this.handleChange}/>
                                        <label htmlFor="password">Palavra-Passe</label>
                                    </div>
                                    <div className="text-center mb-3">
                                        <Link to='/recuperarPassword'  className="text-decoration-none text-black-50">
                                            <ins>Esqueci-me da palavra-passe</ins>
                                        </Link>
                                    </div>
                                    <div className="red-text center">
                                        {authError ? <p>{authError}</p> : null}
                                    </div>
                                    <div className="green-text center">
                                        {authSuccess ? <p>{authSuccess}</p> : null}
                                    </div>
                                    <div className="text-center pt-2">
                                        <button className="btn btnIn w-100"
                                                type="submit">ENTRAR
                                        </button>
                                    </div>
                                </form>
                                <div className="text-center mt-3">
                                <span>Ainda não tens conta? <Link to="/registo" className="text-decoration-none text-dark font-weight-bold"> <ins>A colmeia está à tua espera!</ins> </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link id="red" to="/"></Link>
                </div>
            )
        
    }
}


const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        authSuccess: state.auth.authSuccess,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);