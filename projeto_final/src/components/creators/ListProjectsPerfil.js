import React from 'react';
import '../../App.css';
import {Link} from "react-router-dom";

class ListProjectsPerfil extends React.Component {
    state = {
        valorB: 1,
        valorP: 1
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
            <div>
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
        );
    }

}

export default ListProjectsPerfil