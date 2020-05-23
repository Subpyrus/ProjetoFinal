import React from 'react';
import '../../App.css';
import FormEditarPerfil_Formacao2 from './FormEditarPerfil_Formacao2';

class FormEditarPerfil_Formacao extends React.Component {

    render() {
        return (
            <div className="row col-12">
                <span className="col-12 mt-3">
                    <h3 className="Editar_Perfil_Titulo">Formação</h3>
                </span>
                <div className="col-12 mb-4 mt-2" style={{borderBottom: "#f2f2f2 solid 1px"}}>
                    <FormEditarPerfil_Formacao2/>
                </div>
                <div className="col-12 mb-4 Div_But_Adicionar_Campos">
                    <span className="col-3 But_Adicionar_Campos">+ Adicionar Formação</span>
                </div>
            </div>
        );
    }

}

export default FormEditarPerfil_Formacao