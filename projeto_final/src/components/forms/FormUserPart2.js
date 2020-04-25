import React from 'react';

class FormUserPart2 extends React.Component {
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
                    <div className="col s6">
                        <label>País</label>
                        <select
                            className="aparece"
                            onChange={handleChange('Pais')}
                            defaultValue={valores.Pais}
                        >
                            <option value="" disabled selected>Escolhe o teu País</option>
                            <option value="1">Mango</option>
                            <option value="2">Orange</option>
                            <option value="3">Apple</option>
                        </select>
                    </div>
                    <div className="col s6">
                        <label>Localidade</label>
                        <select
                            className="aparece"
                            onChange={handleChange('Localidade')}
                            defaultValue={valores.Localidade}
                        >
                            <option value="" disabled selected>Escolhe a tua Localidade</option>
                            <option value="1">Mango</option>
                            <option value="2">Orange</option>
                            <option value="3">Apple</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <label>Área de trabalho</label>
                        <select
                            className="aparece"
                            onChange={handleChange('AreaTrabalho')}
                            defaultValue={valores.AreaTrabalho}
                        >
                            <option value="" disabled selected>Escolhe a tua Área de Trabalho</option>
                            <option value="1">Mango</option>
                            <option value="2">Orange</option>
                            <option value="3">Apple</option>
                        </select>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="last_name"
                            type="text"
                            className="validate"
                            onChange={handleChange('Ocupacao')}
                            defaultValue={valores.Ocupacao}
                        />
                        <label htmlFor="last_name">Ocupação</label>
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
                            {valores.Pais == "" || valores.Localidade == "" || valores.AreaTrabalho == "" || valores.Ocupacao == "" ?
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

export default FormUserPart2;