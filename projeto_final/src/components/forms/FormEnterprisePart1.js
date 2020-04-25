import React from 'react';

class FormUserPart1 extends React.Component {
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
                        <label htmlFor="data">Nome da Empresa</label>
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
                        <label htmlFor="first_name">Tamanho da Empresa</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="last_name"
                            type="date"
                            className="validate"
                            onChange={handleChange('DataCriacao')}
                            defaultValue={valores.DataCriacao}
                        />
                        <label htmlFor="last_name">Ano de Fundação</label>
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
            </div>
        )
    }
}

export default FormUserPart1;