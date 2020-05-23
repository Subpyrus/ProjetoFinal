import React from 'react';
import '../../App.css';

class FormEditarPerfil_Associar extends React.Component{

    render() {
        return (
            <div className="row col-12">
                <span className="col-12 mt-3">
                    <h3 className="Editar_Perfil_Titulo">Vincular Website e Redes Sociais</h3>
                </span>
                <div className="col-12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="website"
                                type="text"
                                className="validate"
                            />
                            <label htmlFor="Website">Website</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="Instagram"
                                type="text"
                                className="validate"
                            />
                            <label htmlFor="Instagram">Instagram</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="LinkedIn"
                                type="text"
                                className="validate"
                            />
                            <label htmlFor="LinkedIn">LinkedIn</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="Facebook"
                                type="text"
                                className="validate"
                            />
                            <label htmlFor="Facebook">Facebook</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default FormEditarPerfil_Associar