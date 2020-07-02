import React from 'react';
import '../../App.css';

class FormEditarPerfil_Formacao2 extends React.Component{

    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id={`Faculdade${this.props.index}`}
                            type="text"
                            className="validate"
                            name={ `document-${ this.props.index }-document` }
                            value={this.props.escrever[1].formacao[this.props.index].faculdade}
                            onChange={this.props.escrever[0]("faculdade", this.props.index)}
                        />
                        <label htmlFor={`Faculdade${this.props.index}`}>Faculdade/Universidade</label>
                        <span className="helper-text">Ex: Universidade de Aveiro</span>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id={`Curso${this.props.index}`}
                            type="text"
                            className="validate"
                            value={this.props.escrever[1].formacao[this.props.index].curso}
                            onChange={this.props.escrever[0]("curso", this.props.index)}
                        />
                        <label htmlFor={`Curso${this.props.index}`}>Curso</label>
                        <span className="helper-text">Ex: Novas Tecnologias da Comunicação</span>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id={`Ano${this.props.index}`}
                            type="text"
                            className="validate"
                            value={this.props.escrever[1].formacao[this.props.index].ano}
                            onChange={this.props.escrever[0]("ano", this.props.index)}
                        />
                        <label htmlFor={`Ano${this.props.index}`}>Ano</label>
                        <span className="helper-text">Ex: Licenciatura, Mestrado, etc</span>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col-12 col-md-6">
                        <select
                            className="aparece"
                            value={this.props.escrever[1].formacao[this.props.index].estado}
                            onChange={this.props.escrever[0]("estado", this.props.index)}>
                            <option value="" disabled selected>Estado</option>
                            <option value="Decorrer">A decorrer</option>
                            <option value="Concluido">Concluído</option>
                        </select>
                    </div>
                    <div className="input-field col-12 col-md-6">
                        <input
                            id={`AnoConclusao${this.props.index}`}
                            type="text"
                            className="validate"
                            value={this.props.escrever[1].formacao[this.props.index].anoConclusao}
                            onChange={this.props.escrever[0]("anoConclusao", this.props.index)}
                        />
                        <label htmlFor={`AnoConclusao${this.props.index}`} className="col-12 col-md-6">Ano de Conclusão</label>
                    </div>
                </div>
            </div>
        );
    }

}

export default FormEditarPerfil_Formacao2