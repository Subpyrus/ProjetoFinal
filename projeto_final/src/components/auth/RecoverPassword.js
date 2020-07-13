import React from 'react';
import '../../App.css';
import sg from '../../Imgs/sg.png';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import { recoverPassword } from '../../store/actions/authActions'

class RecoverPassword extends React.Component {
    state = {
        email: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.recoverPassword(this.state.email);
    }

    render() {
        const {auth,recoverError,recoverSuccess} = this.props;
        if(auth.uid != null ) {
            return <Redirect to="/"/>
        }else  {
             return (
                <div className="container-fluid noscroll fundo">
                    <div className="container box">
                        <div className="row justify-content-center mb-0">
                            <div className="boxIn p-5">
                                <div className="text-center">
                                    <img src={sg} width="auto" className="mb-3"/>
                                    <h4 className="titulo">Recuperação de Password</h4>
                                    <p className="bemvindo">Insira aqui o seu email e vai ser enviado um email com um link para alterar a sua palavra passe.</p>
                                </div>
                                <hr className="line mb-3"/>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="input-field">
                                        <input type="email" id="email" onChange={this.handleChange}/>
                                        <label htmlFor="email">Endereço de E-mail</label>
                                    </div>
                                    <div className="text-center pt-2">
                                        <button className="btn btnIn w-100"
                                                type="submit">Enviar
                                        </button>
                                    </div>
                                </form>
                                <div className="red-text center">
                                    {recoverError ? <p>{recoverError}</p> : null}
                                </div>
                                <div className="green-text center">
                                    {recoverSuccess ? <p>{recoverSuccess}</p> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }   
    }
}


const mapStateToProps = (state) => {
    return {
        recoverError: state.auth.recoverError,
        recoverSuccess: state.auth.recoverSuccess,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        recoverPassword: (email) => dispatch(recoverPassword(email))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RecoverPassword);