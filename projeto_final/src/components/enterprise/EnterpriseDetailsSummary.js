import React from 'react';
import '../../App.css';
import perfil from "../../Imgs/Logo_Ubi.jpg";
import localizacao from "../../Imgs/map-marker-alt-solid.svg";
import {Link} from "react-router-dom";
import ListaEmpregosEmpresa from "./JobListEnterprise";
import {storage} from "../../config/fbConfig";
import emailjs from "emailjs-com";
import {Modal} from "react-bootstrap";


class EnterpriseDetailsSummary extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            imagemPerfil: "",
            NomeEmpresa: "",
            NomeUser: "",
            curriculo: "",
            emailCandidato: "",
            areaTrabalho: "",
            emailEmpresa: "",
            setShowM: false
        };
    }

    guardaInfo(NomeEmpresa, NomeUser, emailCandidato, areaTrabalho, emailEmpresa, curriculo){
        if (this.state.NomeEmpresa === "" && this.state.NomeUser === "" && this.state.emailCandidato === "" && this.state.areaTrabalho === "" && this.state.emailEmpresa === "" && this.state.curriculo === "") {
            this.setState({
                NomeEmpresa: NomeEmpresa,
                NomeUser: NomeUser,
                curriculo: curriculo,
                emailCandidato: emailCandidato,
                areaTrabalho: areaTrabalho,
                emailEmpresa: emailEmpresa
            })
        }
    }

    getImage(image) {
        storage.ref('files').child(`${image}`).getDownloadURL().then((url) => {
            if (this.state.imagemPerfil == "") {
                this.state.imagemPerfil = url;
                this.setState(this.state);
                //console.log(this.state);
            }
        })
    }

    enviaMail(e, parametro){
        e.preventDefault();
        emailjs.send('gmail', 'email_para_enviar', parametro, 'user_UAnswsOL1vNOW5D8EghtO')
            .then((result) => {
                this.handleShowM();
                //window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
            }, (error) => {
                console.log(error.text);
            });
    }

    handleCloseM = () => {
        this.setState({setShowM: false})

    };
    handleShowM = () => {
        //console.log("oi");
        this.setState({setShowM: true})
    };

    render() {
        const {users, utils, id_user, id_pass, job, auth} = this.props;
        console.log(users);
        this.getImage(users.ImagemPerfil);
        {utils && utils.map(dados => {
            if (dados.id === auth.uid) {
                console.log(dados);
                this.guardaInfo(users.NomeEmpresa, dados.FirstName, auth.email, dados.AreaTrabalho, users.EmailEmpresa, dados.Curriculo)
            }
        })}
        return (
            <div className="row mb-0">
                <div className="Perfil_Empresa_Inicial mb-0 col-12 justify-content-center pb-5 pb-lg-0">
                    <div className="Perfil_Empresa_Info_Inicial col-11 col-sm-10 col-md-9 m-lg-auto row mt-5 mx-auto">
                        <div className="col-sm-12 col-lg-4">
                                <span className="m-auto Perfil_Info_Inicial_Esq">
                                    <img src={this.state.imagemPerfil} className="Foto_Perfil_Empresa"/>
                                    {id_user === id_pass ?
                                        <Link to="/perfil/empresa/editar">
                                            <button className="Perfil_But_Seguir mt-5 text-uppercase">Editar perfil</button>
                                        </Link>
                                        :
                                        <button className="Perfil_But_Seguir mt-5 text-uppercase d-none">nada</button>
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
                                <span className="Perfil_Info_Inicial_Dir">
                                    <h3 className="Perfil_Info_Intro">Olá Profissionais</h3>
                                    <h1 className="Perfil_Info_Nome">Somos a {users.NomeEmpresa}</h1>
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
                                        <span className="Perfil_Info_Texto mb-4">
                                            {users.Descricao}
                                        </span>
                                        :
                                        <span className="d-none">
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
                                    {utils && utils.map(dados => {
                                        if (dados.id === auth.uid) {
                                            return(
                                                <span>
                                                    {dados.TipoUtilizador === 1 && dados.Curriculo !== null ?
                                                        <button className="Perfil_But_Seguir mt-4 mr-4" onClick={(coisas) => this.enviaMail(coisas, this.state)}>Enviar CV</button>
                                                        :
                                                        <button className="Perfil_But_Seguir_2 mt-4 mr-4" disabled>Enviar CV</button>
                                                    }
                                                </span>
                                            )
                                        }
                                    })}
                                </span>
                        </div>
                    </div>
                </div>
                <div className="Perfil_Projetos mb-0 col-12 justify-content-center">
                    <div className="Perfil_Info_Projetos row col-10 m-auto justify-content-center">
                                <span className="col-12">
                                    <h1 className="Titulo_Formacao_Empresa mb-4 mt-5">ANÚNCIOS DE EMPREGO</h1>
                                </span>
                        <div className="col-sm-12 col-lg-10 mt-4 mb-sm-2 mb-lg-4 ml-lg-5 m-auto text-center text-md-left">
                            <Link to="/empregos/criar">
                                <button className="Empresa_But_Criar_Anuncio mt-2 mb-3">+ NOVO ANÚNCIO</button>
                            </Link>
                            {job && job.map(dados => {
                                if (dados.IdUser === id_pass){
                                    return(
                                        <ListaEmpregosEmpresa info={dados}/>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div id="myModal" className="modal fade">
                    <Modal
                        className="bg-transparent mh-100"
                        size="lg"
                        show={this.state.setShowM}
                        onHide={this.handleCloseM}
                        backdrop="static"
                        keyboard={false}
                        aria-labelledby="example-custom-modal-styling-title">
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title"
                                         className="titulomodal">
                                Enviar CV</Modal.Title>
                        </Modal.Header>
                        <Modal.Body id="modalbody">
                            <div className="container p-0 mt-3 mb-3 cont-fases texto_Modal">
                                O teu currículo foi enviado!
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button
                                className="btn btnIn mr-3"
                                type="button"
                                id="nextBtn"
                                onClick={() => this.handleCloseM()}>
                                Fechar
                            </button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }

}

export default EnterpriseDetailsSummary;