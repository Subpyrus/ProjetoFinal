import React from 'react';
import {Link} from "react-router-dom";

class FormUserPart1 extends React.Component {
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
    render(){
        const { valores, handleChange } = this.props;
        return(
            <div>
                <div className="row">
                    <div className="input-field col-12 col-md-6">
                        <input
                            id="first_name"
                            type="text"
                            className="validate"
                            onChange={handleChange('PrimeiroNome')}
                            defaultValue={valores.PrimeiroNome}
                        />
                        <label htmlFor="first_name" className={valores.PrimeiroNome != "" ? "active col-12" : "col-12"}>Primeiro Nome</label>
                    </div>
                    <div className="input-field col-12 col-md-6">
                        <input
                            id="last_name"
                            type="text"
                            className="validate"
                            onChange={handleChange('UltimoNome')}
                            defaultValue={valores.UltimoNome}
                        />
                        <label htmlFor="last_name" className={valores.UltimoNome != "" ? "active col-12" : "col-12"}>Último Nome</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col-12">
                        <input
                            id="data"
                            type="date"
                            className="validate"
                            onChange={handleChange('DataNascimento')}
                            defaultValue={valores.DataNascimento}
                        />
                        <label htmlFor="data" className={valores.DataNascimento != "" ? "active col-12" : "col-12"}></label>
                    </div>
                </div>
                <div className="row justify-content-end of">
                    <div className="f">
                        <div className="col s6">
                            {valores.PrimeiroNome == "" || valores.UltimoNome == "" || valores.DataNascimento == "" ?
                                <button
                                    className="btn btnIn"
                                    type="button"
                                    id="nextBtn"
                                    onClick={this.continuar}
                                    disabled>
                                    Próximo
                                </button>
                                :
                                <button
                                    className="btn btnIn"
                                    type="button"
                                    id="nextBtn"
                                    onClick={this.continuar}>
                                    Próximo
                                </button>
                            }
                        </div>
                    </div>
                </div>
                <div style={this.estilo}>
                    <span className="step" style={this.escolhido}/>
                    <span className="step"/>
                    <span className="step"/>
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

export default FormUserPart1;