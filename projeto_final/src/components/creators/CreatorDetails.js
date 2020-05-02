import React from 'react';
import '../../App.css';
import localizacao from '../../Imgs/map-marker-alt-solid.svg'
import perfil from '../../Imgs/Perfil.jpg';
import {Link} from "react-router-dom";

class Perfil extends React.Component {
    state = {
        valorB: 1,
        valorP: 1
    };
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

    testemunhoB = (valor) => {
        this.setState({valorB: valor})
    };

    opacidadeN = {
        height: "20px",
        width: "20px",
        margin: "0 6px",
        backgroundColor: "rgb(255, 133, 0)",
        border: "none",
        borderRadius: "50%",
        display: "inline-block",
        opacity: "0.5"
    };

    opacidadeS = {
        height: "20px",
        width: "20px",
        margin: "0 6px",
        backgroundColor: "rgb(255, 133, 0)",
        border: "none",
        borderRadius: "50%",
        display: "inline-block",
        opacity: "1"
    };

    seccao_escolhida = (valor) => {
        this.setState({valorP: valor})
    };

    render() {
        return (
            <div className="Perfil_Body">
                <div className="row mb-0">
                    <div className="Perfil_Inicial mb-0 col-12 justify-content-center">
                        <div className="Perfil_Info_Inicial col-9 m-auto row">
                            <div className="col-sm-12 col-lg-4">
                                <span className="m-auto Perfil_Info_Inicial_Esq">
                                    <img src={perfil} className="Foto_Perfil"/>
                                    <button className="Perfil_But_Seguir mt-4" disabled>Seguir</button>
                                    <span className="mt-3">
                                        <img src={localizacao} className="Icone_Localizacao" height="20px"
                                             width="20px"/><span className="Perfil_Localizacao">Aveiro, Aveiro</span>
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
                                <span className="Perfil_Info_Inicial_Dir">
                                    <h3 className="Perfil_Info_Intro">Olá Profissionais</h3>
                                    <h1 className="Perfil_Info_Nome">Sou a Beatriz Pais</h1>
                                    <h3 className="Perfil_Info_Trabalho">Front-End Developer</h3>
                                    <span className="Perfil_Info_Texto mb-2">
                                        Mestre em Design e com licenciatura em Novas Tecnologias da Comunicação.
                                        Atualmente trabalho como front-end developer, mas tenho um enorme pelo Design Digital, UX e Design de Comunicação.
                                    </span>
                                    <span className="Perfil_Info_Areas mb-4">Design Gráfico, CSS, Javascript</span>
                                    <span>
                                        <i className="fa fa-facebook fa-lg mr-3 icones_perfil"/>
                                        <i className="fa fa-linkedin fa-lg mr-3 icones_perfil"/>
                                        <i className="fa fa-instagram fa-lg mr-3 icones_perfil"/>
                                        <span className="Perfil_Website">website</span>
                                    </span>
                                    <span>
                                        <button className="Perfil_But_Seguir mt-4 mr-4" disabled>Transferir CV</button>
                                        <button className="Perfil_But_Seguir mt-4" disabled>Mensagem</button>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="Perfil_Projetos mb-0 col-12 justify-content-center">
                        <div className="Perfil_Info_Projetos row col-10 m-auto">
                            <span className="col-12">
                                <h1 className="Titulo_Formacao mb-4 mt-5">PROJETOS</h1>
                            </span>
                            <span className="col-12 row justify-content-center">
                                <span className="col-2 Separador_Projetos" onClick={() => this.seccao_escolhida(1)}>
                                    <span style={this.state.valorP == 1 ? this.opacidadeS : this.opacidadeN}/>
                                    <span>Design Gráfico</span>
                                </span>
                                <span className="col-2 Separador_Projetos" onClick={() => this.seccao_escolhida(2)}>
                                    <span style={this.state.valorP == 2 ? this.opacidadeS : this.opacidadeN}/>
                                    <span>Programação</span>
                                </span>
                                <span className="col-2 Separador_Projetos" onClick={() => this.seccao_escolhida(3)}>
                                    <span style={this.state.valorP == 3 ? this.opacidadeS : this.opacidadeN}/>
                                    <span>Vídeo e Fotografia</span>
                                </span>
                            </span>
                            <div className="col-12 mt-4 mb-5">
                                <span className={this.state.valorP == 1 ? "row" : "Projetos_seccao1 row"}>
                                    <div className="col-sm-6 col-lg-3 mb-2">
                                        <div className="Adicionar_Projeto m-0 p-0">
                                            <span className="Alinhamento_Titulo">
                                                <h3 className="m-0 p-0 Titulo_But_Adicionar_Projeto_2">+</h3>
                                                <h3 className="m-0 p-0 Titulo_But_Adicionar_Projeto">Adicionar Projeto</h3>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 mb-2">
                                        <Link to="/projetos/detalhes">
                                            <div className="card card_Projetos m-0 p-0">
                                                <div className="card-body">
                                                    <h5 className="card-text Proj_Info">Maria betrolina</h5>
                                                    <span className="card-text Proj_Info2">O meu cão não se cala</span>
                                                    <span className="card-text Proj_Info3">
                                                    <i className="fa fa-eye mr-1"/><span className="mr-2">533</span>
                                                    <i className="fa fa-heart mr-1"/><span className="mr-2">42</span>
                                                    <i className="fa fa-comment mr-1"/><span className="mr-2">1</span>
                                                </span>
                                                </div>
                                                <div className="card_blur"/>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 mb-2">
                                        <Link to="/projetos/detalhes">
                                            <div className="card card_Projetos m-0 p-0">
                                                <div className="card-body">
                                                    <h5 className="card-text Proj_Info">Maria betrolina</h5>
                                                    <span className="card-text Proj_Info2">O meu cão não se cala</span>
                                                    <span className="card-text Proj_Info3">
                                                    <i className="fa fa-eye mr-1"/><span className="mr-2">533</span>
                                                    <i className="fa fa-heart mr-1"/><span className="mr-2">42</span>
                                                    <i className="fa fa-comment mr-1"/><span className="mr-2">1</span>
                                                </span>
                                                </div>
                                                <div className="card_blur"/>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 mb-2">
                                        <Link to="/projetos/detalhes">
                                            <div className="card card_Projetos m-0 p-0">
                                                <div className="card-body">
                                                    <h5 className="card-text Proj_Info">Maria betrolina</h5>
                                                    <span className="card-text Proj_Info2">O meu cão não se cala</span>
                                                    <span className="card-text Proj_Info3">
                                                    <i className="fa fa-eye mr-1"/><span className="mr-2">533</span>
                                                    <i className="fa fa-heart mr-1"/><span className="mr-2">42</span>
                                                    <i className="fa fa-comment mr-1"/><span className="mr-2">1</span>
                                                </span>
                                                </div>
                                                <div className="card_blur"/>
                                            </div>
                                        </Link>
                                    </div>
                                </span>
                                <span className={this.state.valorP == 2 ? "row" : "Projetos_seccao1 row"}>
                                    <div className="col-sm-6 col-lg-3 mb-2">
                                        <div className="Adicionar_Projeto m-0 p-0">
                                            <span className="Alinhamento_Titulo">
                                                <h3 className="m-0 p-0 Titulo_But_Adicionar_Projeto_2">+</h3>
                                                <h3 className="m-0 p-0 Titulo_But_Adicionar_Projeto">Adicionar Projeto</h3>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 mb-2">
                                        <Link to="/projetos/detalhes">
                                            <div className="card card_Projetos m-0 p-0">
                                                <div className="card-body">
                                                    <h5 className="card-text Proj_Info">Maria betrolina</h5>
                                                    <span className="card-text Proj_Info2">O meu cão não se cala</span>
                                                    <span className="card-text Proj_Info3">
                                                    <i className="fa fa-eye mr-1"/><span className="mr-2">533</span>
                                                    <i className="fa fa-heart mr-1"/><span className="mr-2">42</span>
                                                    <i className="fa fa-comment mr-1"/><span className="mr-2">1</span>
                                                </span>
                                                </div>
                                                <div className="card_blur"/>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 mb-2">
                                        <Link to="/projetos/detalhes">
                                            <div className="card card_Projetos m-0 p-0">
                                                <div className="card-body">
                                                    <h5 className="card-text Proj_Info">Maria betrolina</h5>
                                                    <span className="card-text Proj_Info2">O meu cão não se cala</span>
                                                    <span className="card-text Proj_Info3">
                                                    <i className="fa fa-eye mr-1"/><span className="mr-2">533</span>
                                                    <i className="fa fa-heart mr-1"/><span className="mr-2">42</span>
                                                    <i className="fa fa-comment mr-1"/><span className="mr-2">1</span>
                                                </span>
                                                </div>
                                                <div className="card_blur"/>
                                            </div>
                                        </Link>
                                    </div>
                                </span>
                                <span className={this.state.valorP == 3 ? "row" : "Projetos_seccao1 row"}>
                                    <div className="col-sm-6 col-lg-3 mb-2">
                                        <div className="Adicionar_Projeto m-0 p-0">
                                            <span className="Alinhamento_Titulo">
                                                <h3 className="m-0 p-0 Titulo_But_Adicionar_Projeto_2">+</h3>
                                                <h3 className="m-0 p-0 Titulo_But_Adicionar_Projeto">Adicionar Projeto</h3>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 mb-2">
                                        <Link to="/projetos/detalhes">
                                            <div className="card card_Projetos m-0 p-0">
                                                <div className="card-body">
                                                    <h5 className="card-text Proj_Info">Maria betrolina</h5>
                                                    <span className="card-text Proj_Info2">O meu cão não se cala</span>
                                                    <span className="card-text Proj_Info3">
                                                    <i className="fa fa-eye mr-1"/><span className="mr-2">533</span>
                                                    <i className="fa fa-heart mr-1"/><span className="mr-2">42</span>
                                                    <i className="fa fa-comment mr-1"/><span className="mr-2">1</span>
                                                </span>
                                                </div>
                                                <div className="card_blur"/>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 mb-2">
                                        <Link to="/projetos/detalhes">
                                            <div className="card card_Projetos m-0 p-0">
                                                <div className="card-body">
                                                    <h5 className="card-text Proj_Info">Maria betrolina</h5>
                                                    <span className="card-text Proj_Info2">O meu cão não se cala</span>
                                                    <span className="card-text Proj_Info3">
                                                    <i className="fa fa-eye mr-1"/><span className="mr-2">533</span>
                                                    <i className="fa fa-heart mr-1"/><span className="mr-2">42</span>
                                                    <i className="fa fa-comment mr-1"/><span className="mr-2">1</span>
                                                </span>
                                                </div>
                                                <div className="card_blur"/>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 mb-2">
                                        <Link to="/projetos/detalhes">
                                            <div className="card card_Projetos m-0 p-0">
                                                <div className="card-body">
                                                    <h5 className="card-text Proj_Info">Maria betrolina</h5>
                                                    <span className="card-text Proj_Info2">O meu cão não se cala</span>
                                                    <span className="card-text Proj_Info3">
                                                    <i className="fa fa-eye mr-1"/><span className="mr-2">533</span>
                                                    <i className="fa fa-heart mr-1"/><span className="mr-2">42</span>
                                                    <i className="fa fa-comment mr-1"/><span className="mr-2">1</span>
                                                </span>
                                                </div>
                                                <div className="card_blur"/>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 mb-2">
                                        <Link to="/projetos/detalhes">
                                            <div className="card card_Projetos m-0 p-0">
                                                <div className="card-body">
                                                    <h5 className="card-text Proj_Info">Maria betrolina</h5>
                                                    <span className="card-text Proj_Info2">O meu cão não se cala</span>
                                                    <span className="card-text Proj_Info3">
                                                    <i className="fa fa-eye mr-1"/><span className="mr-2">533</span>
                                                    <i className="fa fa-heart mr-1"/><span className="mr-2">42</span>
                                                    <i className="fa fa-comment mr-1"/><span className="mr-2">1</span>
                                                </span>
                                                </div>
                                                <div className="card_blur"/>
                                            </div>
                                        </Link>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="Perfil_Testemunhos mb-0 col-12 justify-content-center">
                        <div className="Perfil_Info_Testemunhos row col-10 my-5 mx-auto">
                            <h1 className="Titulo_Testemunhos col-12">TESTEMUNHOS</h1>
                            <div className="col-sm-12 col-lg-3">
                                <div className="Testemunhos_Esquerda mb-5">
                                    <span>
                                        <div className="btn m-0 p-0 mb-4"
                                             style={this.state.valorB == 1 ? this.card_Testemunhos_Active : this.card_Testemunhos}
                                             onClick={() => this.testemunhoB(1)}>
                                        </div>
                                    </span>
                                    <span>
                                        <div className="btn m-0 p-0 mb-4"
                                             style={this.state.valorB == 2 ? this.card_Testemunhos_Active : this.card_Testemunhos}
                                             onClick={() => this.testemunhoB(2)}>
                                        </div>
                                    </span>
                                    <span>
                                        <div className="btn m-0 p-0 mb-4"
                                             style={this.state.valorB == 3 ? this.card_Testemunhos_Active : this.card_Testemunhos}
                                             onClick={() => this.testemunhoB(3)}>
                                        </div>
                                    </span>
                                    <span>
                                        <div className="btn m-0 p-0 mb-4"
                                             style={this.state.valorB == 4 ? this.card_Testemunhos_Active : this.card_Testemunhos}
                                             onClick={() => this.testemunhoB(4)}>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-9 mb-5">
                                <div className="Testemunhos_Direita justify-content-center m-auto row">
                                    <span className="col-sm-1 col-lg-1 my-auto">
                                        <i className="fa fa-quote-right fa-3x icones_perfil"/>
                                    </span>
                                    <span className="col-sm-6 col-lg-8 my-auto Texto_Testemunho">
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
                                <h1 className="Titulo_Formacao mb-4">FORMAÇÃO</h1>
                            </span>
                            <span className="row col-12 pl-0 mb-5">
                                <div className="col-sm-12 col-lg-6">
                                <div className="Formacao_Parte_2 justify-content-center m-auto row">
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
                                <div className="col-sm-12 col-lg-6 mt-lg-0 mt-sm-4">
                                <div className="Formacao_Parte_2 justify-content-center m-auto row">
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

export default Perfil