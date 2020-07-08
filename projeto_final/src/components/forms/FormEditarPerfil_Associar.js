import React from 'react';
import '../../App.css';

class FormEditarPerfil_Associar extends React.Component{

    render() {
        const {valores, handleChange} = this.props;
        return (
            <div className="row col-12 mx-auto">
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
                                onChange={handleChange('website')}
                                defaultValue={valores.website}
                            />
                            <label htmlFor="website" className={valores.website != "" ? "active" : ""}>Website</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="Instagram"
                                type="text"
                                className="validate"
                                onChange={handleChange('instagram')}
                                defaultValue={valores.instagram}
                            />
                            <label htmlFor="Instagram" className={valores.instagram != "" ? "active" : ""}>Instagram</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="LinkedIn"
                                type="text"
                                className="validate"
                                onChange={handleChange('linkedin')}
                                defaultValue={valores.linkedin}
                            />
                            <label htmlFor="LinkedIn" className={valores.linkedin != "" ? "active" : ""}>LinkedIn</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="Facebook"
                                type="text"
                                className="validate"
                                onChange={handleChange('facebook')}
                                defaultValue={valores.facebook}
                            />
                            <label htmlFor="Facebook" className={valores.facebook != "" ? "active" : ""}>Facebook</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default FormEditarPerfil_Associar