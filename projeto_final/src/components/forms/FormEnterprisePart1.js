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
                            onChange={handleChange('NomeEmpresa')}
                            defaultValue={valores.NomeEmpresa}
                        />
                        <label htmlFor="data" className={valores.NomeEmpresa != "" ? "active" : ""}>Nome da
                            Empresa</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="first_name"
                            type="text"
                            className="validate"
                            onChange={handleChange('TamanhoEmpresa')}
                            defaultValue={valores.TamanhoEmpresa}
                        />
                        <label htmlFor="first_name" className={valores.TamanhoEmpresa != "" ? "active" : ""}>Tamanho da
                            Empresa</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="last_name"
                            type="date"
                            className="validate"
                            onChange={handleChange('DataCriacao')}
                            defaultValue={valores.DataCriacao}
                        />
                        <label htmlFor="last_name" className={valores.DataCriacao != "" ? "active" : ""}>Ano de
                            Fundação</label>
                    </div>
                </div>
                <div className="row justify-content-end of">
                    <div className="f">
                        <div className="col s6">
                            {valores.NomeEmpresa == "" || valores.TamanhoEmpresa == "" || valores.DataCriacao == "" ?
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