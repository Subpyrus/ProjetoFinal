import React from 'react';
import '../../App.css';
import {createProject} from "../../store/actions/projectActions";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'


class FormCreateProjeto4 extends React.Component{


    handleSubmit = (e) => {
        e.preventDefault();
        let objeto = {conteudo: this.props.objeto.ficheirosEnviar, fases: this.props.objeto.ficheirosEnviarFases, capa: this.props.objeto.ficheirosEnviarCapa, nomeProjeto: this.props.objeto.nomeProjeto, areaTrabalho: this.props.objeto.areaTrabalhoProjeto, ferramentas: this.props.objeto.ferramentasUsadas, descricaoProjeto: this.props.objeto.descricaoProjeto, empresasProjeto: this.props.objeto.EmpresasProjeto};
        this.props.createProject(objeto);
        console.log("ola")
        document.getElementById('red').click();
    };


    render() {
        const {valores} = this.props;
        return (
            <div className="row col-12 justify-content-center m-0 pt-5">
                <div className="col-lg-11 mb-5 area_PreVisualizar text-center p-3 p-lg-5">
                    <div className="text-left">
                        <h4>Informações Gerais do Projeto</h4>
                        <span>Estas informações vão servir para que seja mais fácil encontrarem o teu Projeto. Podes a qualquer momento editá-las.</span>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="nomeProjeto"
                                type="text"
                                className="validate"
                                onChange={this.props.handleChange('nomeProjeto')}
                                defaultValue={valores.nomeProjeto}
                            />
                            <label htmlFor="nomeProjeto" className={valores.nomeProjeto != "" ? "active" : ""}>Nome do Projeto</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="areaTrabalhoProjeto"
                                type="text"
                                className="validate"
                                onChange={this.props.handleChange('areaTrabalhoProjeto')}
                                defaultValue={valores.areaTrabalhoProjeto}
                            />
                            <label htmlFor="areaTrabalhoProjeto" className={valores.areaTrabalhoProjeto != "" ? "active" : ""}>Àreas de trabalho</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="ferramentasUsadas"
                                type="text"
                                className="validate"
                                onChange={this.props.handleChange('ferramentasUsadas')}
                                defaultValue={valores.ferramentasUsadas}
                            />
                            <label htmlFor="ferramentasUsadas" className={valores.ferramentasUsadas != "" ? "active" : ""}>Ferramentas Usadas</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <textarea
                            id="descricaoProjeto"
                            className="materialize-textarea"
                            onChange={this.props.handleChange('descricaoProjeto')}
                            defaultValue={valores.descricaoProjeto}
                        />
                            <label htmlFor="descricaoProjeto" className={valores.descricaoProjeto != "" ? "active" : ""}>Descrição do Projeto</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="EmpresasProjeto"
                                type="text"
                                className="validate"
                                onChange={this.props.handleChange('EmpresasProjeto')}
                                defaultValue={valores.EmpresasProjeto}
                            />
                            <label htmlFor="EmpresasProjeto" className={valores.EmpresasProjeto != "" ? "active" : ""}>Empresas, marcas, etc</label>
                        </div>
                    </div>
                    <div className="input-field col s12">
                        <select
                            className="aparece"
                            onChange={this.props.handleChange('equipa')}
                            defaultValue={valores.equipa}
                        >
                            <option value="" disabled selected>Equipa</option>
                            <option value="Mango">Mango</option>
                            <option value="Orange">Orange</option>
                            <option value="Apple">Apple</option>
                        </select>
                    </div>
                    <div className="col s12">
                        {valores.nomeProjeto == "" || valores.areaTrabalhoProjeto == "" || valores.ferramentasUsadas == "" || valores.descricaoProjeto == "" || valores.EmpresasProjeto == "" ?
                            <button
                                className="btn btnIn"
                                type="button"
                                id="nextBtn"
                                onClick={this.handleSubmit}
                                disabled
                            >
                                Publicar
                            </button>
                            :
                            <button
                                className="btn btnIn"
                                type="button"
                                id="nextBtn"
                                onClick={this.handleSubmit}
                            >
                                Publicar
                            </button>
                        }
                    </div>
                </div>
                <Link id="red" to="/"/>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(FormCreateProjeto4)