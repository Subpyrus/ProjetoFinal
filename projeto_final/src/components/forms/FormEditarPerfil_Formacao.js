import React from 'react';
import '../../App.css';
import FormEditarPerfil_Formacao2 from './FormEditarPerfil_Formacao2';

class FormEditarPerfil_Formacao extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            campos: []
        };

        this.add = this.add.bind(this);
    }

    add() {
        const campos = this.state.campos.concat(FormEditarPerfil_Formacao2);
        this.setState({campos});
    }

    render() {
        const campos = this.state.campos.map((Element, index) => {
            return <Element key={index} index={index}/>
        });
        return (
            <div className="row col-12">
                <span className="col-12 mt-3">
                    <h3 className="Editar_Perfil_Titulo">Formação</h3>
                </span>
                <div className="col-12 mb-4 mt-2">
                    {campos}
                </div>
                <div className="col-12 mb-4 Div_But_Adicionar_Campos">
                    <span onClick={this.add} className="col-4 But_Adicionar_Campos">+ Adicionar Formação</span>
                </div>
            </div>
        );
    }

}

export default FormEditarPerfil_Formacao