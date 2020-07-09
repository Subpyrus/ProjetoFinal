import React from 'react';
import Imagem2 from '../../Imgs/Conteudo_Post1.jpg'
import Imagem3 from '../../Imgs/T1.jpg'
import Imagem4 from '../../Imgs/T2.jpg'
import Imagem5 from '../../Imgs/T3.jpg'
import Imagem6 from '../../Imgs/T4.jpg'
import Imagem7 from '../../Imgs/T5.png'
import Adicionar from '../../Imgs/Adicionar.png'
import $ from 'jquery';
import {Link} from "react-router-dom";
import ProjectSummary from './ProjectSummary';

const ListaProjetos = ({projetos, pesquisa, areaTrabalho, distrito}) => {
    if (pesquisa == "" && areaTrabalho == "" && distrito == "") {
        return (
            <div className="row col-12 m-0">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-image">
                            <Link to="/projetos/criar">
                                <img className="img-fluid" src={Adicionar}/>
                            </Link>
                        </div>
                        <div className="card-content text-center ">
                            <div>
                            <span className="card-title Adicionar_Projeto">
                                Adicionar Projeto</span>
                            </div>
                        </div>
                    </div>
                </div>
                {projetos && projetos.map(dados => {
                    return (
                        <ProjectSummary info={dados}/>
                    )
                })}
            </div>
        );
    } else if (pesquisa !== "" && areaTrabalho !== "" && distrito !== ""){
        return (
            <div className="row col-12 m-0">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-image">
                            <Link to="/projetos/criar">
                                <img className="img-fluid" src={Adicionar}/>
                            </Link>
                        </div>
                        <div className="card-content text-center ">
                            <div>
                            <span className="card-title Adicionar_Projeto">
                                Adicionar Projeto</span>
                            </div>
                        </div>
                    </div>
                </div>
                {projetos && projetos.map(dados => {
                    let nome = dados.nomeProjeto.toLowerCase();
                    if (dados.nomeProjeto.startsWith(pesquisa) && dados.areaTrabalho == areaTrabalho && dados.Local == distrito || nome.startsWith(pesquisa) && dados.areaTrabalho == areaTrabalho && dados.Local == distrito) {
                        return (
                            <ProjectSummary info={dados}/>
                        )
                    }
                })}
            </div>
        );
    } else if (pesquisa !== "" && areaTrabalho !== "") {
        return (
            <div className="row col-12 m-0">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-image">
                            <Link to="/projetos/criar">
                                <img className="img-fluid" src={Adicionar}/>
                            </Link>
                        </div>
                        <div className="card-content text-center ">
                            <div>
                            <span className="card-title Adicionar_Projeto">
                                Adicionar Projeto</span>
                            </div>
                        </div>
                    </div>
                </div>
                {projetos && projetos.map(dados => {
                    let nome = dados.nomeProjeto.toLowerCase();
                    if (dados.nomeProjeto.startsWith(pesquisa) && dados.areaTrabalho == areaTrabalho || nome.startsWith(pesquisa) && dados.areaTrabalho == areaTrabalho) {
                        return (
                            <ProjectSummary info={dados}/>
                        )
                    }
                })}
            </div>
        );
    } else if (pesquisa !== "" && distrito !== ""){
        return (
            <div className="row col-12 m-0">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-image">
                            <Link to="/projetos/criar">
                                <img className="img-fluid" src={Adicionar}/>
                            </Link>
                        </div>
                        <div className="card-content text-center ">
                            <div>
                            <span className="card-title Adicionar_Projeto">
                                Adicionar Projeto</span>
                            </div>
                        </div>
                    </div>
                </div>
                {projetos && projetos.map(dados => {
                    let nome = dados.nomeProjeto.toLowerCase();
                    if (dados.nomeProjeto.startsWith(pesquisa) && dados.Local == distrito || nome.startsWith(pesquisa) && dados.Local == distrito) {
                        return (
                            <ProjectSummary info={dados}/>
                        )
                    }
                })}
            </div>
        );
    } else if (areaTrabalho !== "" && distrito !== ""){
        return (
            <div className="row col-12 m-0">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-image">
                            <Link to="/projetos/criar">
                                <img className="img-fluid" src={Adicionar}/>
                            </Link>
                        </div>
                        <div className="card-content text-center ">
                            <div>
                            <span className="card-title Adicionar_Projeto">
                                Adicionar Projeto</span>
                            </div>
                        </div>
                    </div>
                </div>
                {projetos && projetos.map(dados => {
                    if (dados.areaTrabalho == areaTrabalho && dados.Local == distrito) {
                        return (
                            <ProjectSummary info={dados}/>
                        )
                    }
                })}
            </div>
        );
    } else if (pesquisa !== "") {
        return (
            <div className="row col-12 m-0">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-image">
                            <Link to="/projetos/criar">
                                <img className="img-fluid" src={Adicionar}/>
                            </Link>
                        </div>
                        <div className="card-content text-center ">
                            <div>
                            <span className="card-title Adicionar_Projeto">
                                Adicionar Projeto</span>
                            </div>
                        </div>
                    </div>
                </div>
                {projetos && projetos.map(dados => {
                    let nome = dados.nomeProjeto.toLowerCase();
                    if (dados.nomeProjeto.startsWith(pesquisa) || nome.startsWith(pesquisa)) {
                        return (
                            <ProjectSummary info={dados}/>
                        )
                    }
                })}
            </div>
        );
    } else if (areaTrabalho !== "") {
        return (
            <div className="row col-12 m-0">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-image">
                            <Link to="/projetos/criar">
                                <img className="img-fluid" src={Adicionar}/>
                            </Link>
                        </div>
                        <div className="card-content text-center ">
                            <div>
                            <span className="card-title Adicionar_Projeto">
                                Adicionar Projeto</span>
                            </div>
                        </div>
                    </div>
                </div>
                {projetos && projetos.map(dados => {
                    if (dados.areaTrabalho == areaTrabalho) {
                        return (
                            <ProjectSummary info={dados}/>
                        )
                    }
                })}
            </div>
        );
    } else if (distrito !== "") {
        return (
            <div className="row col-12 m-0">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-image">
                            <Link to="/projetos/criar">
                                <img className="img-fluid" src={Adicionar}/>
                            </Link>
                        </div>
                        <div className="card-content text-center ">
                            <div>
                            <span className="card-title Adicionar_Projeto">
                                Adicionar Projeto</span>
                            </div>
                        </div>
                    </div>
                </div>
                {projetos && projetos.map(dados => {
                    if (dados.Local == distrito) {
                        return (
                            <ProjectSummary info={dados}/>
                        )
                    }
                })}
            </div>
        );
    }
};

export default ListaProjetos