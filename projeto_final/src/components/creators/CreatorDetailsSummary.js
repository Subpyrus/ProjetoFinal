import React from 'react';
import perfil from "../../Imgs/Perfil.jpg";
import {storage} from "../../config/fbConfig";
import localizacao from "../../Imgs/map-marker-alt-solid.svg";
import ListProjectsPerfil from "./ListProjectsPerfil";
import ListFavouritesPerfil from "./ListFavouritesPerfil";
import {Link} from 'react-router-dom';
import jQuery from 'jquery';

class CreatorDetailsSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valorB: 1,
            valorF: 1,
            imagemPerfil: "",
            cv: ""
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

    getImage(image) {
        storage.ref('files').child(`${image}`).getDownloadURL().then((url) => {
            if (this.state.imagemPerfil == "") {
                this.state.imagemPerfil = url;
                this.setState(this.state);
            }
        })
    }

    render() {
        const {users, id_user, id_pass, projetos,auth} = this.props;
        this.getImage(users.ImagemPerfil);
        let suf;
        if(users.Gender == "masc"){
            suf = "o"
        }else {
            suf = "a"
        }
        console.log(users);
        return (
            <div className="row mb-0">
                <div className="Perfil_Inicial mb-0 col-12 justify-content-center pb-5 pb-lg-0">
                    <div className="Perfil_Info_Inicial col-11 col-sm-10 col-md-9 m-lg-auto row mt-5 mx-auto">
                        <div className="col-sm-12 col-lg-4">
                                <span className="ml-auto Perfil_Info_Inicial_Esq">
                                    <img src={this.state.imagemPerfil} className="Foto_Perfil"/>
                                    {id_user === id_pass ?
                                        <Link to="/perfil/editar">
                                            <button className="Perfil_But_Seguir mt-4 text-uppercase">Editar
                                                perfil
                                            </button>
                                        </Link>
                                        :
                                        <button className="Perfil_But_Seguir mt-4 text-uppercase d-none">Editar
                                            perfil
                                        </button>
                                    }
                                    <span className="mt-3">
                                        <img src={localizacao} className="Icone_Localizacao" height="20px"
                                             width="20px"/><span className="Perfil_Localizacao">
                                        {users.Local === "Braganca" ?
                                            "Bragança"
                                            :
                                            users.Local === "CasteloBranco" ?
                                                "Castelo Branco"
                                                :
                                                users.Local === "Evora" ?
                                                    "Évora"
                                                    :
                                                    users.Local === "Santarem" ?
                                                        "Santarém"
                                                        :
                                                        users.Local === "Setubal" ?
                                                            "Setúbal"
                                                            :
                                                            users.Local === "VianaCastelo" ?
                                                                "Viana do Castelo"
                                                                :
                                                                users.Local === "VilaReal" ?
                                                                    "Vila Real"
                                                                    :
                                                                    users.Local
                                        }
                                        </span>
                                    </span>
                                </span>
                        </div>
                        <div className="col-sm-12 col-lg-7">
                                <span className="ml-lg-5 Perfil_Info_Inicial_Dir">
                                    <h3 className="Perfil_Info_Intro">Olá Profissionais</h3>
                                    <h1 className="Perfil_Info_Nome">Sou {suf} {users.FirstName} {users.LastName}</h1>
                                    <h3 className="Perfil_Info_Trabalho">
                                        {users.AreaTrabalho === "3DAnimacao" ?
                                            "3D e Animação"
                                            :
                                            users.AreaTrabalho === "ArtesPerfomativas" ?
                                                "Artes Perfomativas"
                                                :
                                                users.AreaTrabalho === "ArtesPlasticas" ?
                                                    "Artes Plásticas"
                                                    :
                                                    users.AreaTrabalho === "CinemaVideo" ?
                                                        "Cinema e Vídeo"
                                                        :
                                                        users.AreaTrabalho === "DesenhoIlustracao" ?
                                                            "Desenho e Ilustração"
                                                            :
                                                            users.AreaTrabalho === "DesignGrafico" ?
                                                                "Design Gráfico"
                                                                :
                                                                users.AreaTrabalho === "DesignProdutos" ?
                                                                    "Design Produtos"
                                                                    :
                                                                    users.AreaTrabalho === "Fotografia" ?
                                                                        "Fotografia"
                                                                        :
                                                                        users.AreaTrabalho === "Pintura" ?
                                                                            "Pintura"
                                                                            :
                                                                            users.AreaTrabalho === "Programacao" ?
                                                                                "Programação"
                                                                                :
                                                                                users.AreaTrabalho === "Musica" ?
                                                                                    "Música"
                                                                                    :
                                                                                    "Outros Trabalhos"

                                        }
                                    </h3>
                                    {users.Descricao && users.Descricao !== "" ?
                                        <span className="Perfil_Info_Texto mb-2">
                                            {users.Descricao}
                                        </span>
                                        :
                                        <span className="Perfil_Info_Texto mb-2 d-none">
                                            nada
                                        </span>
                                    }
                                    <span className="Perfil_Info_Areas mb-4">{users.Ocupation}</span>
                                    {users.LinkFace && users.LinkFace !== "" || users.LinkLinked && users.LinkLinked !== "" || users.LinkInsta && users.LinkInsta !== "" || users.LinkWeb && users.LinkWeb !== "" ?
                                        <span>
                                            {users.LinkFace && users.LinkFace !== "" ?
                                                <a href={users.LinkFace} target="_blank" style={{textDecoration: "none"}}>
                                                    <i className="fa fa-facebook fa-lg mr-3 icones_perfil"/>
                                                </a>
                                                :
                                                <i className="fa fa-facebook fa-lg mr-3 icones_perfil d-none"/>
                                            }
                                            {users.LinkLinked && users.LinkLinked !== "" ?
                                                <a href={users.LinkLinked} target="_blank" style={{textDecoration: "none"}}>
                                                    <i className="fa fa-linkedin fa-lg mr-3 icones_perfil"/>
                                                </a>
                                                :
                                                <i className="fa fa-linkedin fa-lg mr-3 icones_perfil d-none"/>
                                            }
                                            {users.LinkInsta && users.LinkInsta !== "" ?
                                                <a href={users.LinkInsta} target="_blank" style={{textDecoration: "none"}}>
                                                    <i className="fa fa-instagram fa-lg mr-3 icones_perfil"/>
                                                </a>
                                                :
                                                <i className="fa fa-instagram fa-lg mr-3 icones_perfil d-none"/>
                                            }
                                            {users.LinkWeb && users.LinkWeb !== "" ?
                                                <a href={users.LinkWeb} target="_blank" style={{textDecoration: "none"}}>
                                                    <span className="Perfil_Website">website</span>
                                                </a>
                                                :
                                                <span className="Perfil_Website d-none">website</span>
                                            }
                                        </span>
                                        :
                                        <span className="d-none"/>
                                    }
                                    <span>
                                        {!auth.uid || users.Curriculo == null ?
                                            <button className="Perfil_But_Seguir_2 mt-4 mr-4 text-uppercase" disabled>Transferir CV</button>
                                            :
                                            <a href={users.Curriculo} target="_blank">
                                                <button className="Perfil_But_Seguir mt-4 mr-4 text-uppercase">Transferir CV</button>
                                            </a>
                                            
                                        }
                                    </span>
                                </span>
                        </div>
                    </div>
                </div>
                <div className="Perfil_Projetos mb-0 col-12 justify-content-center">
                    <div className="Perfil_Info_Projetos row col-10 m-auto">
                            <span className="col-12 d-none d-md-flex" style={{display: "flex"}}>
                                <h1 className={this.state.valorF == 1 ? "btn-flat Titulo_Formacao mb-4 mt-5 pr-3" : "btn-flat Titulo_Formacao_2 mb-4 mt-5 pr-3"}
                                    onClick={() => this.escolha_Projetos(1)}>PROJETOS</h1><h3
                                className={this.state.valorF == 1 ? "btn-flat Titulo_Formacao_2 mb-4 mt-5 pl-3" : "btn-flat Titulo_Formacao_4 mb-4 mt-5 pl-3"}
                                onClick={() => this.escolha_Projetos(2)}>PROJETOS FAVORITOS</h3>
                            </span>
                        <span className="col-12 d-block d-md-none" style={{display: "flex"}}>
                                <h1 className={"btn-flat Titulo_Formacao mb-4 mt-5 pr-3"}>PROJETOS</h1>
                            </span>
                        <span className="col-12 justify-content-center mt-3">
                                {
                                    this.state.valorF == 1 ?
                                        <ListProjectsPerfil projects={projetos} id={id_pass} id_user={id_user}/>
                                        :
                                        <ListFavouritesPerfil favoritos={users.Favoritos} projects={projetos}/>
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
                                <h1 className="Titulo_Formacao_3 mb-0 mb-lg-4">FORMAÇÃO</h1>
                            </span>
                        <span className="row col-12 pl-0 pr-0 mb-5">
                            {users.Formacao && jQuery.isEmptyObject(users.Formacao) ?
                                <div className="col-sm-12 col-lg-6 mt-lg-0 mt-5 px-0">
                                    <span>Este utilizador ainda não colocou nenhuma formação!</span>
                                </div>
                                :
                                users.Formacao.map(dados => {
                                    return(
                                        <div className="col-sm-12 col-lg-6 mt-lg-0 mt-5 mb-0 mb-md-4 px-0">
                                            <div className="Formacao_Parte_2 mr-lg-5 pb-2 justify-content-center m-auto row">
                                                <span className="Ano_Formacao ml-5 mr-5 mt-2">
                                                    {dados.anoConclusao}
                                                </span>
                                                <span className="Tipo_Formacao1 ml-5 mr-5">
                                                    {dados.ano}
                                                </span>
                                                <span className="Tipo_Formacao2 ml-5 mr-5">
                                                    {dados.curso}
                                                </span>
                                                <span className="Local_Formacao ml-5 mr-5">
                                                    {dados.faculdade}
                                                </span>
                                                <span className="Formacao_Concluida ml-5 mr-5 mb-2">
                                                    {dados.estado === "Concluido" ?
                                                        "CONCLUÍDO"
                                                        :
                                                        "A DECORRER"
                                                    }

                                                </span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </span>
                    </div>
                </div>
            </div>

        )
    }


}

export default CreatorDetailsSummary