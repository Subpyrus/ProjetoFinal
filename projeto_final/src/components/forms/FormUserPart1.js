import React from 'react';

class FormUserPart1 extends React.Component {
    continuar = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render(){
        const { valores, handleChange } = this.props;
        return(
            <div>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="first_name"
                            type="text"
                            className="validate"
                            onChange={handleChange('PrimeiroNome')}
                            defaultValue={valores.PrimeiroNome}
                        />
                        <label htmlFor="first_name">Primeiro Nome</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="last_name"
                            type="text"
                            className="validate"
                            onChange={handleChange('UltimoNome')}
                            defaultValue={valores.UltimoNome}
                        />
                        <label htmlFor="last_name">Último Nome</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="data"
                            type="date"
                            className="validate"
                            onChange={handleChange('DataNascimento')}
                            defaultValue={valores.DataNascimento}
                        />
                        <label htmlFor="data">Data de Nascimento</label>
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
            </div>
        )
    }
}

export default FormUserPart1;