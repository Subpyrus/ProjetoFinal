import React from 'react';
import '../../App.css';

class FormEditarPerfil_FormacaoAnt extends React.Component{

    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            type="text"
                            className="validate"
                            defaultValue={this.props.escrever.formacao[this.props.index].faculdade}
                            disabled
                        />
                        <span className="helper-text">Ex: Universidade de Aveiro</span>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            type="text"
                            className="validate"
                            defaultValue={this.props.escrever.formacao[this.props.index].curso}
                            disabled
                        />
                        <span className="helper-text">Ex: Novas Tecnologias da Comunicação</span>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            type="text"
                            className="validate"
                            defaultValue={this.props.escrever.formacao[this.props.index].ano}
                            disabled
                        />
                        <span className="helper-text">Ex: Licenciatura, Mestrado, etc</span>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col-12 col-md-6">
                        <select
                            className="aparece"
                            defaultValue={this.props.escrever.formacao[this.props.index].estado}
                            disabled
                        >
                            <option value="" disabled selected>Estado</option>
                            <option value="Decorrer">A decorrer</option>
                            <option value="Concluido">Concluído</option>
                        </select>
                    </div>
                    <div className="input-field col-12 col-md-6">
                        <input
                            type="text"
                            className="validate"
                            defaultValue={this.props.escrever.formacao[this.props.index].anoConclusao}
                            disabled
                        />
                    </div>
                </div>
            </div>
        );
    }

}

export default FormEditarPerfil_FormacaoAnt