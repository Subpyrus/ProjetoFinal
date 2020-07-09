import React from 'react';
import '../../App.css';
import localizacao from '../../Imgs/map-marker-alt-solid.svg'
import perfil from '../../Imgs/Perfil.jpg';
import ListProjectsPerfil from './ListProjectsPerfil';
import ListFavouritesPerfil from './ListFavouritesPerfil';
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {firestoreConnect} from "react-redux-firebase";
import {storage} from '../../config/fbConfig';

class Perfil extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            valorB: 1,
            valorF: 1,
            imagemPerfil: ""
        };
    }
    card_Testemunhos = {
        backgroundImage: `url(${perfil})`,
        backgroundSize: "calc(100% + 2px) calc(100% + 2px)",
        backgroundPositionX: "-1px",
        backgroundPositionY: "-1px",
        height: "70px",
        width: "70px",
        margin: "0",
        padding: "0",
        opacity: "0.5",
        overflow: "hidden",
        boxShadow: "none",
        border: "0!important"
    };
    card_Testemunhos_Active = {
        backgroundImage: `url(${perfil})`,
        backgroundSize: "calc(100% + 2px) calc(100% + 2px)",
        backgroundPositionX: "-1px",
        backgroundPositionY: "-1px",
        height: "90px",
        width: "90px",
        margin: "0",
        padding: "0",
        opacity: "1",
        overflow: "hidden",
        boxShadow: "none",
        border: "0!important"
    };
    card_Testemunhos_Active2 = {
        backgroundImage: `url(${perfil})`,
        backgroundSize: "calc(100% + 2px) calc(100% + 2px)",
        backgroundPositionX: "-1px",
        backgroundPositionY: "-1px",
        height: "70px",
        width: "70px",
        margin: "0",
        padding: "0",
        opacity: "1",
        overflow: "hidden",
        boxShadow: "none",
        border: "0!important"
    };

    testemunhoB = (valor) => {
        this.setState({valorB: valor})
    };
    escolha_Projetos = (valor) => {
        this.setState({valorF: valor})
    };

    getImage (image) {
        storage.ref('files').child(`${image}`).getDownloadURL().then((url) => {
            if (this.state.imagemPerfil == "") {
                this.state.imagemPerfil = url;
                this.setState(this.state);
                //console.log(this.state);
            }
        })
    }

    render() {
        const {auth, users} = this.props;
        console.log(users);
        this.getImage(users.ImagemPerfil);
        return (
            <div className="Perfil_Body">
                <div className="row mb-0">
                    <div className="Perfil_Inicial mb-0 col-12 justify-content-center pb-5 pb-lg-0">
                        <div className="Perfil_Info_Inicial col-11 col-sm-10 col-md-9 m-lg-auto row mt-5 mx-auto">
                            <div className="col-sm-12 col-lg-4">
                                <span className="ml-auto Perfil_Info_Inicial_Esq">
                                    <img src={this.state.imagemPerfil} className="Foto_Perfil"/>
                                    <button className="Perfil_But_Seguir mt-5 text-uppercase" disabled>Seguir</button>
                                    <span className="mt-3">
                                        <img src={localizacao} className="Icone_Localizacao" height="20px"
                                             width="20px"/><span className="Perfil_Localizacao">{users.Local}</span>
                                    </span>
                                    <span className="mt-3 row">
                                        <span className="col-6 Perfil_Seguidores">
                                            <span className="Seguidores">200</span>
                                            <span className="Texto_Seguir">SEGUIDORES</span>
                                        </span>
                                        <span className="col-6 Perfil_Seguidores">
                                            <span className="Seguidores">63</span>
                                            <span className="Texto_Seguir">A SEGUIR</span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div className="col-sm-12 col-lg-7">
                                <span className="ml-lg-5 Perfil_Info_Inicial_Dir">
                                    <h3 className="Perfil_Info_Intro">Olá Profissionais</h3>
                                    <h1 className="Perfil_Info_Nome">Sou a {users.FirstName} {users.LastName}</h1>
                                    <h3 className="Perfil_Info_Trabalho">{users.Ocupation}</h3>
                                    <span className="Perfil_Info_Texto mb-2">
                                        Mestre em Design e com licenciatura em Novas Tecnologias da Comunicação.
                                        Atualmente trabalho como front-end developer, mas tenho um enorme pelo
                                        Design Digital, UX e Design de Comunicação.
                                    </span>
                                    <span className="Perfil_Info_Areas mb-4">Design Gráfico, CSS, Javascript</span>
                                    <span>
                                        <i className="fa fa-facebook fa-lg mr-3 icones_perfil"/>
                                        <i className="fa fa-linkedin fa-lg mr-3 icones_perfil"/>
                                        <i className="fa fa-instagram fa-lg mr-3 icones_perfil"/>
                                        <span className="Perfil_Website">website</span>
                                    </span>
                                    <span>
                                        <a href="">
                                            <button className="Perfil_But_Seguir mt-4 mr-4 text-uppercase" disabled>Transferir CV</button>
                                        </a>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="Perfil_Projetos mb-0 col-12 justify-content-center">
                        <div className="Perfil_Info_Projetos row col-10 m-auto">
                            <span className="col-12 d-none d-md-flex" style={{display: "flex"}}>
                                <h1 className={this.state.valorF == 1 ? "btn-flat Titulo_Formacao mb-4 mt-5 pr-3" : "btn-flat Titulo_Formacao_2 mb-4 mt-5 pr-3" } onClick={() => this.escolha_Projetos(1)}>PROJETOS</h1><h3 className={this.state.valorF == 1 ? "btn-flat Titulo_Formacao_2 mb-4 mt-5 pl-3" : "btn-flat Titulo_Formacao_4 mb-4 mt-5 pl-3"} onClick={() => this.escolha_Projetos(2)}>PROJETOS FAVORITOS</h3>
                            </span>
                            <span className="col-12 d-block d-md-none" style={{display: "flex"}}>
                                <h1 className={"btn-flat Titulo_Formacao mb-4 mt-5 pr-3"}>PROJETOS</h1>
                            </span>
                            <span className="col-12 justify-content-center mt-3">
                                {
                                    this.state.valorF == 1 ?
                                        <ListProjectsPerfil/>
                                        :
                                        <ListFavouritesPerfil/>
                                }
                            </span>
                            <span className="col-12 d-block d-md-none" style={{display: "flex"}}>
                                <h3 className={"btn-flat Titulo_Formacao_3 mb-4 mt-2 pl-3"}>PROJETOS FAVORITOS</h3>
                            </span>
                            <span className="col-12 justify-content-center mt-3 d-block d-md-none">
                                <ListFavouritesPerfil/>
                            </span>
                        </div>
                    </div>
                    <div className="Perfil_Testemunhos mb-0 col-12 justify-content-center">
                        <div className="Perfil_Info_Testemunhos row col-10 my-5 mx-auto">
                            <h1 className="Titulo_Testemunhos col-12">TESTEMUNHOS</h1>
                            <div className="col-lg-12 col-xl-3 justify-content-center">
                                <div className="Testemunhos_Esquerda mb-3 text-center d-none d-md-block">
                                    <span className="col-6 col-md-4 col-xl-12 text-center itens_esquerda">
                                        <div className="btn mr-3 p-0 mb-4"
                                             style={this.state.valorB == 1 ? this.card_Testemunhos_Active : this.card_Testemunhos}
                                             onClick={() => this.testemunhoB(1)}>
                                        </div>
                                    </span>
                                    <span className="col-6 col-md-4 col-xl-12 text-center itens_esquerda">
                                        <div className="btn mr-3 p-0 mb-4"
                                             style={this.state.valorB == 2 ? this.card_Testemunhos_Active : this.card_Testemunhos}
                                             onClick={() => this.testemunhoB(2)}>
                                        </div>
                                    </span>
                                    <span className="col-6 col-md-4 col-xl-12 text-center itens_esquerda">
                                        <div className="btn mr-3 p-0 mb-4"
                                             style={this.state.valorB == 3 ? this.card_Testemunhos_Active : this.card_Testemunhos}
                                             onClick={() => this.testemunhoB(3)}>
                                        </div>
                                    </span>
                                    <span className="col-6 col-md-4 col-xl-12 text-center itens_esquerda">
                                        <div className="btn mr-3 p-0 mb-4"
                                             style={this.state.valorB == 4 ? this.card_Testemunhos_Active : this.card_Testemunhos}
                                             onClick={() => this.testemunhoB(4)}>
                                        </div>
                                    </span>
                                </div>
                                <div className="Testemunhos_Esquerda mb-3 text-center d-block d-md-none">
                                    <span className="col-6 col-md-4 col-xl-12 text-center">
                                        <div className="btn mr-0 p-0 mb-4"
                                             style={this.state.valorB == 1 ? this.card_Testemunhos_Active2 : this.card_Testemunhos}
                                             onClick={() => this.testemunhoB(1)}>
                                        </div>
                                    </span>
                                    <span className="col-6 col-md-4 col-xl-12 text-center">
                                        <div className="btn mr-0 p-0 mb-4"
                                             style={this.state.valorB == 2 ? this.card_Testemunhos_Active2 : this.card_Testemunhos}
                                             onClick={() => this.testemunhoB(2)}>
                                        </div>
                                    </span>
                                    <span className="col-6 col-md-4 col-xl-12 text-center">
                                        <div className="btn mr-0 p-0 mb-4"
                                             style={this.state.valorB == 3 ? this.card_Testemunhos_Active2 : this.card_Testemunhos}
                                             onClick={() => this.testemunhoB(3)}>
                                        </div>
                                    </span>
                                    <span className="col-6 col-md-4 col-xl-12 text-center">
                                        <div className="btn mr-0 p-0 mb-4"
                                             style={this.state.valorB == 4 ? this.card_Testemunhos_Active2 : this.card_Testemunhos}
                                             onClick={() => this.testemunhoB(4)}>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-9 mb-5 p-0">
                                <div className="Testemunhos_Direita pt-5 pb-5 justify-content-center m-auto row">
                                    <span className="col-md-1 col-lg-1 mr-2 px-4 px-md-0 my-auto">
                                        <i className="fa fa-quote-right fa-3x icones_perfil"/>
                                    </span>
                                    <span className="col-md-6 col-lg-8 my-auto px-4 px-md-0 Texto_Testemunho">
                                        {this.state.valorB == 1 ?
                                            "Excelente profissional. Muito criativa, com excelentes capacidades no design gráfico. Cumpriu o prazo sem falta!" :
                                            this.state.valorB == 2 ?
                                                "Excelente profissional." :
                                                this.state.valorB == 3 ?
                                                    "Excelente profissional. Muito criativa, com excelentes capacidades de programação. Cumpriu tudo o que pedi!" :
                                                    "Fez um excelente trabalho!"
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Perfil_Formacao mb-0 col-12">
                        <div className="col-10 row Perfil_Info_Formacao mx-auto justify-content-center my-4">
                            <span className="col-12">
                                <h1 className="Titulo_Formacao_3 mb-4">FORMAÇÃO</h1>
                            </span>
                            <span className="row col-12 pl-0 pr-0 mb-5">
                                <div className="col-sm-12 col-lg-6 px-0">
                                    <div className="Formacao_Parte_2 mr-lg-5 pb-2 justify-content-center m-auto row">
                                        <span className="Ano_Formacao ml-5 mr-5 mt-2">
                                            2018
                                        </span>
                                        <span className="Tipo_Formacao1 ml-5 mr-5">
                                            Mestrado
                                        </span>
                                        <span className="Tipo_Formacao2 ml-5 mr-5">
                                            Design
                                        </span>
                                        <span className="Local_Formacao ml-5 mr-5">
                                            Universidade de Aveiro
                                        </span>
                                        <span className="Formacao_Concluida ml-5 mr-5 mb-2">
                                            CONCLUÍDO
                                        </span>
                                    </div>
                                </div>
                                <div className="col-sm-12 px-0 col-lg-6 mt-lg-0 mt-5">
                                    <div className="Formacao_Parte_2 pb-2 justify-content-center m-auto row">
                                        <span className="Ano_Formacao ml-5 mr-5 mt-2">
                                            2016
                                        </span>
                                        <span className="Tipo_Formacao1 ml-5 mr-5">
                                            Mestrado
                                        </span>
                                        <span className="Tipo_Formacao2 ml-5 mr-5">
                                            Novas Tecnologias da Comunicação
                                        </span>
                                        <span className="Local_Formacao ml-5 mr-5">
                                            Universidade de Aveiro
                                        </span>
                                        <span className="Formacao_Concluida ml-5 mr-5 mb-2">
                                            CONCLUÍDO
                                        </span>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        users: state.firebase.profile
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' }
    ]))(Perfil)