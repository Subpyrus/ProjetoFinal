import React from 'react';
import '../../App.css';

class FormEditarPerfil_Password extends React.Component{

    render() {
        return (
            <div className="row col-12">
                <span className="col-12 mt-3">
                    <h3 className="Editar_Perfil_Titulo">Alterar Password</h3>
                </span>
                <div className="col-12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="passwordAtual"
                                type="password"
                                className="validate"
                            />
                            <label htmlFor="passwordAtual">Palavra-Passe atual</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="novaPassword"
                                type="password"
                                className="validate"
                            />
                            <label htmlFor="novaPassword">Nova Palavra-Passe</label>
                            <span className="helper-text" data-error="wrong"
                                  data-success="right">Mínimo 8 caracteres</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default FormEditarPerfil_Password