import React from 'react';
import {Modal} from "react-bootstrap";
import Imagem from '../../Imgs/Perfil.jpg';
import Coracao from '../../Imgs/heart-regular.svg';
import Coracao2 from '../../Imgs/heart-solid.svg'
import Conteudo1 from '../../Imgs/Conteudo_Post1.jpg';
import Conteudo2 from '../../Imgs/Conteudo_Post2.png';
import Conteudo3 from '../../Imgs/Conteudo_Post3.png';
import Conteudo4 from '../../Imgs/Conteudo_Post4.png';
import {Link} from "react-router-dom";


class ProjectDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setShowM: false,
            setShowC: false,
            src_Img: Coracao
        }
    }

    handleCloseM = () => {
        this.setState({setShowM: false})

    };
    handleShowM = () => {
        console.log("oi");
        this.setState({setShowM: true})
    };

    handleShowC = () => {
        this.setState({setShowC: !this.state.setShowC});
        if (this.state.setShowC === true) {
            this.setState({src_Img: Coracao2});
            console.log(this.state.src_Img);
        } else {
            this.setState({src_Img: Coracao});
            console.log(this.state.src_Img);
        }
    };

    render() {
        return (
            <div className="Proj_Det_Body container-fluid row col-12 justify-content-center m-0 p-0">
                <div className="Proj_Det_Conteudo col-lg-10 col-md-12 pl-0 pl-sm-5 pr-sm-5 pr-0">
                    <div className="row col-12">
                        <div className="d-flex flex-column col-md-12 col-lg-9">
                            <h2 className="Proj_Det_Titulo">Website 2018 - Beatriz Pais
                                <span className="Proj_nome_uti"> @Beatriz Pais</span></h2>
                            <div className="Proj_Det_Subtitulo d-none d-md-block mt-md-1 mt-lg-4 mb-4">
                                <section className="Proj_Det_Subtitulo_Parte1 mt-3">
                                    <span className="Areas_Trabalho_Proj_Det mr-4">UI/UI & Web Design</span>
                                    <span className="Areas_Trabalho_Proj_Det mr-4">Programação</span>
                                    <span className="Areas_Trabalho_Proj_Det">Design Gráfico</span>
                                </section>
                            </div>
                        </div>
                        <div className="align-items-lg-end d-flex flex-column col-md-12 col-lg-3">
                            <button className="Criador_But_Ver_Perfil mt-sm-3 mt-md-2"
                                    onClick={this.handleShowM}>Fases do Projeto
                            </button>
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
                        <section className="mb-3">
                            <img src={Conteudo1} width="100%" height="auto"/>
                        </section>
                        <section className="mb-3">
                            <img src={Conteudo2} width="100%" height="auto"/>
                        </section>
                        <section className="mb-3">
                            <img src={Conteudo3} width="100%" height="auto"/>
                        </section>
                        <section className="mb-3">
                            <img src={Conteudo4} width="100%" height="auto"/>
                        </section>
                        <section>
                            <span className="Proj_Det_Texto">Visita em beatrizpais.com</span>
                        </section>
                    </div>

                    <hr className="hr"/>

                    <div className="Proj_Det_Likes justify-content-center mt-5 mb-4">
                        <img className="like" src={this.state.src_Img} width="75px" height="75px"
                             onClick={this.handleShowC}/>
                        <h1 className="ml-3 Proj_Det_Nr_Likes">42</h1>
                    </div>

                    <hr className="hr"/>

                    <div className="Proj_Det_Info d-flex flex-md-row col-12 mt-4 mb-4 pr-sm-0">
                        <div className="col-md-3 d-none d-md-block">
                            <img src={Imagem} className="w-100 h-auto imgperfilproj"/>
                        </div>
                        <div className="col-md-2 Proj_Det_Info1 pl-sm-2">
                            <h3 className="nome_uti">Beatriz Pais</h3>
                            <span className="mb-1" style={{color: "#D56D00"}}>Front-End Developer</span>
                            <span className="mb-1">Aveiro</span>
                            <button className="Criador_But_Ver_Perfil mt-1 disabled">SEGUIR</button>
                        </div>
                        <div className="col-md-7 Proj_Det_Info1 d-none d-sm-block">
                            <h4 className="mb-3 Proj_Det_Info_Texto">
                                Mestre em Design e com licenciatura em Novas Tecnologias da Comunicação.
                                Atualmente trabalho como front-end developer, mas tenho um enorme pelo Design
                                Digital, UX e Design de Comunicação.
                            </h4>
                            <span className="Proj_Det_Info_Texto2">Design Gráfico, Css e JavaScript.</span>
                        <br/>
                            <span className="Proj_Det_Info_Texto2">Visita o
                                <b><Link to="/perfil" className="navegar"> meu perfil </Link></b>
                                para veres os meus outros projetos.</span>
                        </div>
                    </div>

                    <hr className="hr"/>

                    <div className="Proj_Det_Comentarios justify-content-center mt-4 mb-2">
                        <span className="Proj_Det_Texto_Registar">Para deixares aqui o teu comentário
                            <b><Link to="/entrar" className="navegar"> entra</Link></b> na tua conta ou
                            <b><Link to="/registar" className="navegar"> cria uma conta</Link></b>.</span>
                    </div>

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
                                    <li>
                                        <div className="timeline-badge primary">
                                        </div>
                                        <div className="timeline-panel mr-xl-5 mr-md-0">
                                            <div className="timeline-heading">
                                                <img className="img-responsive"
                                                     src="http://lorempixel.com/1600/500/sports/2"/>
                                            </div>
                                            <div className="timeline-body">
                                                <h4 className="titulofase">Primeira Fase</h4>
                                                <img src={Conteudo1} width="100%" height="auto"/>
                                                <p className="textofase">Mussum ipsum cacilds, vidis litro abertis.
                                                    Consetis adipiscings elitis.
                                                    Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis
                                                    santis.
                                                    Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra
                                                    quem é
                                                    amistosis quis leo.</p>
                                            </div>

                                        </div>
                                    </li>

                                    <li className="timeline-inverted">
                                        <div className="timeline-badge primary">
                                        </div>
                                        <div className="timeline-panel ml-5">
                                            <div className="timeline-body">
                                                <h4 className="titulofase">Segunda Fase</h4>
                                                <p className="textofase">Mussum ipsum cacilds, vidis litro abertis.
                                                    Consetis adipiscings elitis.
                                                    Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis
                                                    santis.
                                                    Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra
                                                    quem é
                                                    amistosis quis leo.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="clearfix" style={{float: 'none'}}></li>
                                </ul>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default ProjectDetails;