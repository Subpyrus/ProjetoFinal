import React from 'react';
import {Button, Modal} from "react-bootstrap";
import Coracao from '../../Imgs/heart-regular.svg';
import Coracao2 from '../../Imgs/heart-solid.svg'
import Conteudo1 from '../../Imgs/Conteudo_Post1.jpg';
import Conteudo2 from '../../Imgs/Conteudo_Post2.png';
import Conteudo3 from '../../Imgs/Conteudo_Post3.png';
import Conteudo4 from '../../Imgs/Conteudo_Post4.png';


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
        if (this.state.setShowC === true){
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
                <div className="Proj_Det_Conteudo col-10 pl-5 pr-5">
                    <div className="Proj_Det_Titulo">
                        <h2 className="pr-4 Proj_Det_Titulo1">Website 2018</h2>
                        <h2 className="Proj_Det_Titulo1">Beatriz Pais</h2>
                    </div>

                    <div className="Proj_Det_Subtitulo mt-3 mb-4">
                        <section className="Proj_Det_Subtitulo_Parte1">
                            <span className="Areas_Trabalho_Proj_Det mr-4">UI/UI & Web Design</span>
                            <span className="Areas_Trabalho_Proj_Det mr-4">Programação</span>
                            <span className="Areas_Trabalho_Proj_Det">Design Gráfico</span>
                        </section>
                        <section className="Proj_Det_Subtitulo_Parte2">
                            <span>15 de Julho, 2018</span>
                            <br/>
                            <span>
                                <i className="fa fa-eye mr-1"/><span className="mr-3">533</span>
                                <i className="fa fa-heart mr-1"/><span className="mr-3">42</span>
                                <i className="fa fa-comment mr-1"/><span>1</span>
                            </span>
                        </section>
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
                        <img src={this.state.src_Img} width="75px" height="75px" onClick={this.handleShowC}/>
                        <h1 className="Proj_Det_Nr_Likes">42</h1>
                    </div>

                    <hr className="hr"/>

                    <div className="Proj_Det_Info row col-12 mt-5 mb-4">
                        <div className="col-2 offset-2 Proj_Det_Info1">
                            <h3>Beatriz Pais</h3>
                            <span className="mb-1">Front-End Developer</span>
                            <span className="mb-1">Aveiro, Portugal</span>
                            <button className="mt-1">Seguir</button>
                        </div>
                        <div className="col-7 offset-1 Proj_Det_Info1">
                            <h4 className="mb-3 Proj_Det_Info_Texto">
                                Mestre em Design e com licenciatura em Novas Tecnologias da Comunicação.
                                Atualmente trabalho como front-end developer, mas tenho um enorme pelo Design Digital, UX e Design de Comunicação.
                            </h4>
                            <span className="Proj_Det_Info_Texto2">Design Gráfico, Css e JavaScript</span>
                            <span className="Proj_Det_Info_Texto2">Visita o <b>meu perfil</b> para veres no que é que trabalho mais.</span>
                        </div>
                    </div>

                    <hr className="hr"/>

                    <div className="Proj_Det_Comentarios justify-content-center mt-4 mb-2">
                        <span className="Proj_Det_Texto_Registar">Para deixares aqui o teu comentário <b>entra</b> na tua conta ou <b>cria uma conta</b>.</span>
                    </div>

                </div>

                <Modal show={this.state.setShowM} onHide={this.handleCloseM}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseM}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleCloseM}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}

export default ProjectDetails;