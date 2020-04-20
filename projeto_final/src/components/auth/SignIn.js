import React from 'react';
import '../../App.css';
import sg from '../../Imgs/sg.png';
import {Link} from 'react-router-dom';

class SignIn extends React.Component {
    state = {};

    render() {
        return (
            <div className="container-fluid noscroll fundo">
                <div className="container box">
                    <div className="row justify-content-center">
                        <div className="boxIn p-5">
                            <div className="text-center">
                                <img src={sg} width="auto" className="mb-3"/>
                                <h4 className="titulo">Entrar</h4>
                                <p className="bemvindo">Bem-Vindo(a) de volta</p>
                            </div>
                            <hr className="line mb-4"/>
                            <div className="input-field">
                                <input type="email" id="email"/>
                                <label htmlFor="email">Endereço de E-mail</label>
                            </div>
                            <div className="input-field ">
                                <input type="password" id="password"/>
                                <label htmlFor="password">Palavra-Passe</label>
                            </div>
                            <div className="text-center mb-3">
                                <Link  className="text-decoration-none text-black-50">
                                    <ins>Esqueci-me da palavra-passe.</ins>
                                </Link>
                            </div>
                            <div className="text-center pt-2">
                                <button className="btn btnIn w-100"
                                        type="submit">ENTRAR
                                </button>
                            </div>
                            <div className="text-center mt-3">
                            <span>Ainda não tens conta? <Link
                                className="text-decoration-none text-dark font-weight-bold">
                                <ins>A colmeia está à tua espera!</ins>
                            </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default SignIn;