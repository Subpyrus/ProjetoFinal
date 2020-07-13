import React from 'react';
import '../../App.css';

class FormEditarPerfil_Password extends React.Component{

    render() {
        const {valores, handleChange} = this.props;
        return (
            <div className="row col-12 mx-auto">
                <span className="col-12 mt-3">
                    <h3 className="Editar_Perfil_Titulo">Alterar Password</h3>
                </span>
                <div className="col-12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="emailEnviar"
                                type="text"
                                className="validate"
                                onChange={handleChange('emailEnviar')}
                            />
                            <label htmlFor="emailEnviar" className="active">Email para Enviar</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default FormEditarPerfil_Password