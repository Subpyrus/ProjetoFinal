import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import { Redirect } from 'react-router'

class FormEnterprisePart3 extends React.Component {
    estilo = {
        textAlign: "center",
        marginTop: "40px"
    };
    escolhido = {
        opacity: 1
    };

    voltar = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {valores, handleChange, handleSubmit,auth,signUpError} = this.props;
        if(auth.uid == null) {
            return (
                <div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="data"
                                type="text"
                                className="validate"
                                onChange={handleChange('Email')}
                                defaultValue={valores.Email}
                            />
                            <label htmlFor="data" className={valores.Email != "" ? "active" : ""}>Endereço de E-mail</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="first_name"
                                type="password"
                                className="validate"
                                onChange={handleChange('Password')}
                                defaultValue={valores.Password}
                            />
                            <label htmlFor="first_name" className={valores.Password != "" ? "active" : ""}>Password</label>
                        </div>
                    </div>
                    <div className="row justify-content-end of">
                        <div className="red-text center">
                            {signUpError ? <p>{signUpError}</p> : null}
                        </div>
                        <div className="f">
                            <div className="col s6">
                                <button
                                    className="btn btnIn"
                                    type="button"
                                    id="prevBtn"
                                    onClick={this.voltar}>
                                    Anterior
                                </button>
                            </div>
                            <div className="col s6">
                                {valores.Email == "" || valores.Password == "" ?
                                    <button
                                        className="btn btnIn"
                                        type="button"
                                        id="nextBtn"
                                        onClick={handleSubmit}
                                        disabled>
                                        Finalizar
                                    </button>
                                    :
                                    <button
                                        className="btn btnIn"
                                        type="button"
                                        id="nextBtn"
                                        onClick={handleSubmit}>
                                        Finalizar
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                    <div style={this.estilo}>
                        <span className="step"/>
                        <span className="step"/>
                        <span className="step" style={this.escolhido}/>
                    </div>
                    <div className="text-center mt-3">
                                <span>Já tens conta?
                                    <Link to="/entrar"
                                          className="text-decoration-none text-dark font-weight-bold">
                                    <ins> Entra aqui!</ins>
                                </Link>
                                    </span>
                    </div>
                </div>
            )
        }else{
            return(
                <Redirect to="/" />
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        signUpError: state.auth.signUpError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(FormEnterprisePart3);