import React from 'react';
import {Link} from "react-router-dom";


class FormUserPart3 extends React.Component {
    estilo = {
        textAlign: "center",
        marginTop: "40px"
    };
    escolhido = {
        opacity: 1
    };

    continuar = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    voltar = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {valores, handleChange} = this.props;
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
                                    onClick={this.continuar}
                                    disabled>
                                    Finalizar
                                </button>
                                :
                                <button
                                    className="btn btnIn"
                                    type="button"
                                    id="nextBtn"
                                    onClick={this.continuar}>
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
    }
}


export default FormUserPart3;