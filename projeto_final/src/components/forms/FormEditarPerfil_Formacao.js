import React from 'react';
import '../../App.css';
import FormEditarPerfil_Formacao2 from './FormEditarPerfil_Formacao2';
import FormEditarPerfil_FormacaoAnt from './FormEditarPerfil_FormacaoAnt';

class FormEditarPerfil_Formacao extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            campos: [],
            anteriores:[],
            done: false
        };

        this.add = this.add.bind(this);
        this.addAnteriores = this.addAnteriores.bind(this);
    }

    addAnteriores(number) {
        let anteriores=[];
        for(var a = 0; a < number; a++){
            for (var b in this.state.anteriores){
                anteriores.push(this.state.anteriores[b])
            }
            anteriores.push(FormEditarPerfil_FormacaoAnt)
        }
        this.setState({ 
            anteriores: anteriores,
            done: true
        });
    }

    add() {
        const campos = this.state.campos.concat(FormEditarPerfil_Formacao2);
        this.setState({campos});
        this.props.guardaCampo();
    }

    escrito = (input, numero) => e => {
        this.props.handleChange(numero, input, e.target.value)
    };

    apagarCampos = (index, verdadeiro ) => {
        this.state.campos.splice(index, 1);
        this.props.handleApagar(index + verdadeiro);
    };

    render() {
        const {valores} = this.props;
        if(valores.formacaoAntes == true && this.state.done == false){
            this.addAnteriores(valores.formacao.length)
        }
        const anterior = this.state.anteriores.map((Element, index) => {
            return (
                <div>
                    <Element key={index} index={index} escrever={valores}/>
                    <hr/>
                </div>
            )
        })
        const campos = this.state.campos.map((Element, index) => {
            return (
                <div>
                    <Element key={index + anterior.length} index={index + anterior.length} escrever={[this.escrito, valores]}/>
                    <button
                        className="btn btnIn mt-2 mb-2 mr-1"
                        type="button"
                        id="BtnApagar"
                        onClick={() => this.apagarCampos(index, anterior.length)}
                        >
                        APAGAR
                    </button>
                    <hr/>
                </div>
            )
        });
        return (
            <div className="row col-12 mx-auto">
                <span className="col-12 mt-3">
                    <h3 className="Editar_Perfil_Titulo">Formação</h3>
                </span>
                <div className="col-12 mb-4 mt-2">
                    {anterior}
                    {campos}
                </div>
                <div className="col-12 mb-4 Div_But_Adicionar_Campos">
                    <span onClick={this.add} className="col-12 col-sm-6 col-lg-4 But_Adicionar_Campos">+ Adicionar Formação</span>
                </div>
            </div>
        )
    }
}

export default FormEditarPerfil_Formacao