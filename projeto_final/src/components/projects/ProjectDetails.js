import React from 'react';
import {Modal} from "react-bootstrap";
import Imagem from '../../Imgs/Perfil.jpg';
import Coracao from '../../Imgs/heart-regular.svg';
import Coracao2 from '../../Imgs/heart-solid.svg'
import {Link} from "react-router-dom";
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {firestoreConnect} from "react-redux-firebase";
import Info from './InfoList';
import {storage} from "../../config/fbConfig";
import FasesList from "./FasesList";


class ProjectDetails extends React.Component {
    constructor(props) {
        super(props);
        //console.log(props.match);
        this.state = {
            setShowM: false,
            setShowC: false,
            src_Img: Coracao,
            imagem: ""
        }
    }

    handleCloseM = () => {
        this.setState({setShowM: false})

    };
    handleShowM = () => {
        //console.log("oi");
        this.setState({setShowM: true})
    };

    handleShowC = () => {
        this.setState({setShowC: !this.state.setShowC});
        if (this.state.setShowC === true) {
            this.setState({src_Img: Coracao2});
            //console.log(this.state.src_Img);
        } else {
            this.setState({src_Img: Coracao});
            //console.log(this.state.src_Img);
        }
    };

    getImage = (image) => {
        storage.ref('files').child(`${image}`).getDownloadURL().then((url) => {
            if (this.state.imagem == "") {
                console.log(url);
                this.setState({imagem: url})
            }
        })
    };

    render() {
        const {auth, projects, users} = this.props;
        //console.log(projects);
        //console.log(this.props.match.params.id);
        return (
            <div className="Proj_Det_Body container-fluid row col-12 justify-content-center m-0 p-0">
                {projects && projects.map(dados => {
                    if (dados.id === this.props.match.params.id) {
                        console.log(dados);
                        return (
                            <span className="col-lg-10 col-md-12">
                            <div className="Proj_Det_Conteudo pl-0 pl-sm-5 pr-sm-5 pr-0">
                                <div className="row col-12">
                                    <div className="d-flex flex-column col-md-12 col-lg-9">
                                        <h2 className="Proj_Det_Titulo">{dados.nomeProjeto}
                                            {users && users.map(info => {
                                                if(info.id === dados.IdEmpregador){
                                                    return(
                                                        <span className="Proj_nome_uti"> @{info.FirstName} {info.LastName}</span>
                                                    )
                                                }
                                            })}
                                        </h2>
                                        <div className="Proj_Det_Subtitulo d-none d-md-block mt-md-1 mt-lg-4 mb-4">
                                            <section className="Proj_Det_Subtitulo_Parte1 mt-3">
                                                <span className="Areas_Trabalho_Proj_Det mr-4">
                                                    {dados.areaTrabalho === "3DAnimacao" ?
                                                        "3D e Animação"
                                                        :
                                                        dados.areaTrabalho === "ArtesPerfomativas" ?
                                                            "Artes Perfomativas"
                                                            :
                                                            dados.areaTrabalho === "ArtesPlasticas" ?
                                                                "Artes Plásticas"
                                                                :
                                                                dados.areaTrabalho === "CinemaVideo" ?
                                                                    "Cinema e Vídeo"
                                                                    :
                                                                    dados.areaTrabalho === "DesenhoIlustracao" ?
                                                                        "Desenho e Ilustração"
                                                                        :
                                                                        dados.areaTrabalho === "DesignGrafico" ?
                                                                            "Design Gráfico"
                                                                            :
                                                                            dados.areaTrabalho === "DesignProdutos" ?
                                                                                "Design Produtos"
                                                                                :
                                                                                dados.areaTrabalho === "Fotografia" ?
                                                                                    "Fotografia"
                                                                                    :
                                                                                    dados.areaTrabalho === "Pintura" ?
                                                                                        "Pintura"
                                                                                        :
                                                                                        dados.areaTrabalho === "Programacao" ?
                                                                                            "Programação"
                                                                                            :
                                                                                            dados.areaTrabalho === "Musica" ?
                                                                                                "Música"
                                                                                                :
                                                                                                "Outros Trabalhos"

                                                    }
                                                </span>
                                            </section>
                                        </div>
                                    </div>
                                    <div className="align-items-lg-end d-flex flex-column col-md-12 col-lg-3">
                                        {dados.fases.length > 0 ?
                                        <button className="Criador_But_Ver_Perfil mt-sm-3 mt-md-2"
                                                onClick={this.handleShowM}>Fases do Projeto
                                        </button>
                                            :
                                            <button className="Criador_But_Ver_Perfil_2 mt-sm-3 mt-md-2"
                                                    disabled>Fases do Projeto
                                            </button>
                                        }
                                        <div className="Proj_Det_Subtitulo_Parte2 align-items-lg-end
                                     d-flex flex-lg-column flex-md-row mt-4">
                                            <span className="mt-md-1 mt-lg-0 d-none d-lg-block">15 de Julho, 2018</span>
                                            <span className="mt-1">
                                        <i className="fa fa-eye fa-lg mr-1"/><span className="mr-3">533</span>
                                        <i className="fa fa-heart-o fa-lg mr-1"/><span className="mr-3">42</span>
                                        <i className="fa fa-comment-o fa-lg mr-1"/><span className="mr-3">1</span>
                                            <i className="fa fa-star-o fa-lg"/>
                                    </span>
                                        </div>
                                    </div>
                                </div>

                                <hr className="hr"/>

                                <div className="Proj_Det_Main mt-4 mb-4">
                                    {dados.conteudo && dados.conteudo.map(conteudo => {
                                        return (
                                            <Info tipo={conteudo.Tipo} ficheiro={conteudo.Ficheiro}/>
                                        )
                                    })}
                                </div>
                                {auth.uid ?
                                    <hr className="hr"/>
                                    :
                                    <hr className="hr d-none"/>
                                }
                                {auth.uid ?
                                    <div className="Proj_Det_Likes justify-content-center mt-5 mb-4">
                                        <img className="like" src={this.state.src_Img} width="75px" height="75px"
                                             onClick={this.handleShowC}/>
                                        <h1 className="ml-3 Proj_Det_Nr_Likes">42</h1>
                                    </div>
                                    :
                                    <div className="Proj_Det_Likes justify-content-center mt-5 mb-4 d-none">
                                        <img className="like" src={this.state.src_Img} width="75px" height="75px"
                                             onClick={this.handleShowC}/>
                                        <h1 className="ml-3 Proj_Det_Nr_Likes">42</h1>
                                    </div>
                                }

                                {dados.ferramentas !== "" || dados.empresasProjeto !== "" ?
                                    <hr className="hr"/>
                                    :
                                    <hr className="hr d-none"/>
                                }
                                {dados.ferramentas !== "" || dados.empresasProjeto !== "" ?
                                    <div className="Proj_Det_Infos_final mt-4 mb-4">
                                        {dados.ferramentas !== "" ?
                                            <span className="Proj_Det_Infos_final">
                                                <span className="Proj_Det_Infos_final_Texto">Ferramentas:</span>
                                                <span>{dados.ferramentas}</span>
                                            </span>
                                            :
                                            <span className="d-none">
                                                <span className="Proj_Det_Infos_final_Texto">Ferramentas:</span>
                                                <span>{dados.ferramentas}</span>
                                            </span>
                                        }
                                        {dados.empresasProjeto !== "" ?
                                            <span className="Proj_Det_Infos_final">
                                                <span className="Proj_Det_Infos_final_Texto">Empresas:</span>
                                                <span>{dados.empresasProjeto}</span>
                                            </span>
                                            :
                                            <span className="d-none">
                                                <span className="Proj_Det_Infos_final_Texto">Empresas:</span>
                                                <span>{dados.empresasProjeto}</span>
                                            </span>
                                        }
                                    </div>
                                    :
                                    <div className="Proj_Det_Infos_final mt-4 mb-4 d-none">
                                        <span>nada</span>
                                    </div>
                                }

                                <hr className="hr"/>

                                <div className="Proj_Det_Info d-flex flex-md-row col-12 mt-4 mb-4 pr-sm-0">
                                    <div className="col-md-3 d-none d-md-block">
                                        {users && users.map(info => {
                                            if (info.id === dados.IdEmpregador) {
                                                this.getImage(info.ImagemPerfil);
                                                return (
                                                    <img src={this.state.imagem} className="w-100 h-auto imgperfilproj"/>
                                                )
                                            }
                                        })}
                                    </div>
                                    {users && users.map(info => {
                                        if (info.id === dados.IdEmpregador) {
                                            return (
                                            <div className="col-md-2 Proj_Det_Info1 pl-sm-2">
                                                <h3 className="nome_uti">{info.FirstName} {info.LastName}</h3>
                                                <span className="mb-1" style={{color: "#D56D00"}}>
                                                    {info.AreaTrabalho === "3DAnimacao" ?
                                                        "3D e Animação"
                                                        :
                                                        info.AreaTrabalho === "ArtesPerfomativas" ?
                                                            "Artes Perfomativas"
                                                            :
                                                            info.AreaTrabalho === "ArtesPlasticas" ?
                                                                "Artes Plásticas"
                                                                :
                                                                info.AreaTrabalho === "CinemaVideo" ?
                                                                    "Cinema e Vídeo"
                                                                    :
                                                                    info.AreaTrabalho === "DesenhoIlustracao" ?
                                                                        "Desenho e Ilustração"
                                                                        :
                                                                        info.AreaTrabalho === "DesignGrafico" ?
                                                                            "Design Gráfico"
                                                                            :
                                                                            info.AreaTrabalho === "DesignProdutos" ?
                                                                                "Design Produtos"
                                                                                :
                                                                                info.AreaTrabalho === "Fotografia" ?
                                                                                    "Fotografia"
                                                                                    :
                                                                                    info.AreaTrabalho === "Pintura" ?
                                                                                        "Pintura"
                                                                                        :
                                                                                        info.AreaTrabalho === "Programacao" ?
                                                                                            "Programação"
                                                                                            :
                                                                                            info.AreaTrabalho === "Musica" ?
                                                                                                "Música"
                                                                                                :
                                                                                                "Outros Trabalhos"

                                                    }
                                                </span>
                                                <span className="mb-1">
                                                    {info.Local === "Braganca" ?
                                                        "Bragança"
                                                        :
                                                        info.Local === "CasteloBranco" ?
                                                            "Castelo Branco"
                                                            :
                                                            info.Local === "Evora" ?
                                                                "Évora"
                                                                :
                                                                info.Local === "Santarem" ?
                                                                    "Santarém"
                                                                    :
                                                                    info.Local === "Setubal" ?
                                                                        "Setúbal"
                                                                        :
                                                                        info.Local === "VianaCastelo" ?
                                                                            "Viana do Castelo"
                                                                            :
                                                                            info.Local === "VilaReal" ?
                                                                                "Vila Real"
                                                                                :
                                                                                info.Local
                                                    }
                                                </span>
                                                {auth.uid ?
                                                    <button className="Criador_But_Ver_Perfil mt-1">SEGUIR</button>
                                                    :
                                                    <button className="Criador_But_Ver_Perfil_2 mt-1 disabled">SEGUIR</button>
                                                }
                                            </div>
                                            )
                                        }
                                    })}
                                    {users && users.map(info => {
                                        if (info.id === dados.IdEmpregador) {
                                            return(
                                                <div className="col-md-7 Proj_Det_Info1 d-none d-sm-block">
                                                    <h4 className="mb-3 Proj_Det_Info_Texto">
                                                        {info.Descricao}
                                                    </h4>
                                                    <span className="Proj_Det_Info_Texto2">{info.Ocupation}.</span>
                                                    <br/>
                                                    <span className="Proj_Det_Info_Texto2">Visita o
                                                    <b><Link to={`/perfil/utilizador/${info.id}`} className="navegar"> meu perfil </Link></b>
                                                    para veres os meus outros projetos.</span>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>

                                {auth.uid ?
                                    <hr className="hr d-none"/>
                                    :
                                    <hr className="hr"/>
                                }

                                {auth.uid ?
                                    <div className="Proj_Det_Comentarios justify-content-center mt-4 mb-2 d-none">
                                        <span className="Proj_Det_Texto_Registar">Para deixares aqui o teu comentário
                                            <b><Link to="/entrar" className="navegar"> entra</Link></b> na tua conta ou
                                            <b><Link to="/registar" className="navegar"> cria uma conta</Link></b>.
                                        </span>
                                    </div>
                                    :
                                    <div className="Proj_Det_Comentarios justify-content-center mt-4 mb-2">
                                        <span className="Proj_Det_Texto_Registar">Para deixares aqui o teu comentário
                                            <b><Link to="/entrar" className="navegar"> entra</Link></b> na tua conta ou
                                            <b><Link to="/registar" className="navegar"> cria uma conta</Link></b>.
                                        </span>
                                    </div>
                                }

                            </div>
                                <div id="myModal" className="modal fade">
                                    <Modal
                                        className="bg-transparent mh-100"
                                        size="xl"
                                        show={this.state.setShowM}
                                        onHide={this.handleCloseM}
                                        backdrop="static"
                                        keyboard={false}
                                        aria-labelledby="example-custom-modal-styling-title">
                                        <Modal.Header closeButton>
                                            <Modal.Title id="example-custom-modal-styling-title"
                                                         className="titulomodal">
                                                Fases do Projeto</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body id="modalbody">
                                            <div className="container p-0 mt-3 cont-fases">
                                                <ul className="timeline">
                                                    {dados.fases && dados.fases.map((info, index) =>{
                                                        console.log(info);
                                                        if (((index+1) % 2 !== 0)){
                                                            return(
                                                                <li>
                                                                    <div className="timeline-badge primary">
                                                                    </div>
                                                                    <FasesList tipo={info.Tipo} index={(index)} info={info}/>
                                                                </li>
                                                            )
                                                        } else {
                                                            return (
                                                                <li className="timeline-inverted">
                                                                    <div className="timeline-badge primary">
                                                                    </div>
                                                                    <div className="timeline-panel ml-5">
                                                                        <FasesList tipo={info.Tipo} index={(index)} info={info}/>
                                                                    </div>
                                                                </li>
                                                            )
                                                        }
                                                    })}
                                                    <li className="clearfix" style={{float: 'none'}}></li>
                                                </ul>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>

                            </span>
                        )
                    }
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        auth: state.firebase.auth,
        projects: state.firestore.ordered.projects,
        users: state.firestore.ordered.users
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'},
        {collection: 'users'}
    ])
)(ProjectDetails);