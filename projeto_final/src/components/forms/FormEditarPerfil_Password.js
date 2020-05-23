import React from 'react';
import '../../App.css';

class FormEditarPerfil_Password extends React.Component{

    render() {
        const {valores, handleChange} = this.props;
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
                                onChange={handleChange('passwordAtual')}
                                defaultValue={valores.passwordAtual}
                            />
                            <label htmlFor="passwordAtual" className={valores.passwordAtual != "" ? "active" : ""}>Palavra-Passe atual</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="novaPassword"
                                type="password"
                                className="validate"
                                onChange={handleChange('passwordNova')}
                                defaultValue={valores.passwordNova}
                            />
                            <label htmlFor="novaPassword" className={valores.passwordNova != "" ? "active" : ""}>Nova Palavra-Passe</label>
                            <span className="helper-text">Mínimo 8 caracteres</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default FormEditarPerfil_Password