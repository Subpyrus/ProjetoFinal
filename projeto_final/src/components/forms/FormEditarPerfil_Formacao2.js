import React from 'react';
import '../../App.css';

class FormEditarPerfil_Formacao2 extends React.Component{

    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="Faculdade"
                            type="text"
                            className="validate"
                            name={ `document-${ this.props.index }-document` }
                        />
                        <label htmlFor="Faculdade">Faculdade/Universidade</label>
                        <span className="helper-text">Ex: Universidade de Aveiro</span>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="Curso"
                            type="text"
                            className="validate"
                        />
                        <label htmlFor="Curso">Curso</label>
                        <span className="helper-text">Ex: Novas Tecnologias da Comunicação</span>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="Ano"
                            type="text"
                            className="validate"
                        />
                        <label htmlFor="Ano">Ano</label>
                        <span className="helper-text">Ex: Licenciatura, Mestrado, etc</span>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <select
                            className="aparece">
                            <option value="" disabled selected>Estado</option>
                            <option value="Mango">A decorrer</option>
                            <option value="Orange">Concluído</option>
                        </select>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="AnoConclusao"
                            type="text"
                            className="validate"
                        />
                        <label htmlFor="AnoConclusao">Ano de Conclusão</label>
                    </div>
                </div>
            <hr/>
            </div>
        );
    }

}

export default FormEditarPerfil_Formacao2