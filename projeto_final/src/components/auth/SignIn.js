import React from 'react';
import '../../App.css';
import sg from '../../Imgs/sg.png';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
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
    }

    render() {
        const {authError,auth} = this.props;

        if (auth.uid == null) {
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
                                        <Link to=''  className="text-decoration-none text-black-50">
                                            <ins>Esqueci-me da palavra-passe.</ins>
                                        </Link>
                                    </div>
                                    <div className="red-text center">
                                        {authError ? <p>{authError}</p> : null}
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
                </div>
    
            )
        }else {
            return(
                <Redirect to="/" />
            )
        }
        
    }
}


const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);