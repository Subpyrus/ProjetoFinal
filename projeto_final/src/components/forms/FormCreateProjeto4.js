import React from 'react';
import '../../App.css';
import {createProject} from "../../store/actions/projectActions";
import {compose} from "redux";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { auth } from 'firebase';
import {firestoreConnect} from "react-redux-firebase";


class FormCreateProjeto4 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            distrito: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let objeto = {conteudo: this.props.objeto.ficheirosEnviar, fases: this.props.objeto.ficheirosEnviarFases, capa: this.props.objeto.ficheirosEnviarCapa, nomeProjeto: this.props.objeto.nomeProjeto, areaTrabalho: this.props.objeto.areaTrabalhoProjeto, ferramentas: this.props.objeto.ferramentasUsadas, descricaoProjeto: this.props.objeto.descricaoProjeto, empresasProjeto: this.props.objeto.EmpresasProjeto,  IdEmpregador: this.props.auth.uid, distritoUtilizador: this.state.distrito};
        this.props.createProject(objeto);
        document.getElementById('red').click();
    };

    getUserDistrito = () => {
        {this.props.user && this.props.user.map(dados => {
            if (this.state.distrito === "") {
                if (dados.id === this.props.auth.uid) {
                    this.setState({distrito: dados.Local})
                } else {
                    this.setState({distrito: ""})
                }
            }
        }) }
    };


    render() {
        const {valores} = this.props;
        return (
            <div className="row col-12 justify-content-center m-0 pt-5">
                {this.getUserDistrito()}
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
                                maxLength="20"
                                onChange={this.props.handleChange('nomeProjeto')}
                                defaultValue={valores.nomeProjeto}
                                maxLength="25"
                            />
                            <label htmlFor="nomeProjeto" className={valores.nomeProjeto != "" ? "active" : ""}>Nome do Projeto
                                <span style={{color: "red"}}>*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <select
                                className="aparece"
                                onChange={this.props.handleChange('areaTrabalhoProjeto')}
                                defaultValue={valores.areaTrabalhoProjeto}
                            >
                                <option value="" disabled selected>Escolhe a tua Área de Trabalho*</option>
                                <option value="3DAnimacao">3D e Animação</option>
                                <option value="ArtesPerfomativas">Artes Performativas</option>
                                <option value="ArtesPlasticas">Artes Plásticas</option>
                                <option value="CinemaVideo">Cinema e Vídeo</option>
                                <option value="DesenhoIlustracao">Desenho e Ilustração</option>
                                <option value="DesignGrafico">Design Gráfico</option>
                                <option value="DesignProdutos">Design de produtos</option>
                                <option value="Fotografia">Fotografia</option>
                                <option value="Musica">Música</option>
                                <option value="Pintura">Pintura</option>
                                <option value="Programacao">Programação</option>
                                <option value="OutrosTrabalhos">Outros Trabalhos</option>
                            </select>
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
                            <label htmlFor="descricaoProjeto" className={valores.descricaoProjeto != "" ? "active" : ""}>Descrição do Projeto
                                <span style={{color: "red"}}>*</span></label>
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
                    <div className="row mb-0 col s12 justify-content-end">
                        <button
                            className="btn btnIn mr-3"
                            type="button"
                            id="nextBtn"
                            onClick={this.prevStep}
                            disabled>
                            Anterior
                        </button>
                        {valores.nomeProjeto == "" || valores.areaTrabalhoProjeto == "" || valores.descricaoProjeto == "" ?
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
                <Link id="red" to="/projetos"/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        user: state.firestore.ordered.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'users'}
    ]))(FormCreateProjeto4)