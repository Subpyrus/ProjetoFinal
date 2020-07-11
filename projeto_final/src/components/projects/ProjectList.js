import React from 'react';
import Adicionar from '../../Imgs/Adicionar.png'
import {Link} from "react-router-dom";
import ProjectSummary from './ProjectSummary';

const ListaProjetos = ({projetos, pesquisa, areaTrabalho, verificar, distrito, abrir}) => {
    if (pesquisa == "" && areaTrabalho == "" && distrito == "") {
        return (
            <div className="row col-12 m-0">
                {verificar !== undefined ?
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
                    :
                    <div className="col-12 col-md-6 col-lg-3 d-none">
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
                }
                {projetos && projetos.map(dados => {
                    //console.log(dados);
                    return (
                        <ProjectSummary info={dados} abrir={abrir}/>
                    )
                })}
            </div>
        );
    } else if (pesquisa !== "" && areaTrabalho !== "" && distrito !== ""){
        return (
            <div className="row col-12 m-0">
                {verificar !== undefined ?
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
                    :
                    <div className="col-12 col-md-6 col-lg-3 d-none">
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
                }
                {projetos && projetos.map(dados => {
                    let nome = dados.nomeProjeto.toLowerCase();
                    if (dados.nomeProjeto.startsWith(pesquisa) && dados.areaTrabalho == areaTrabalho && dados.distritoUtilizador === distrito || nome.startsWith(pesquisa) && dados.areaTrabalho == areaTrabalho && dados.distritoUtilizador === distrito) {
                        return (
                            <ProjectSummary info={dados} abrir={abrir}/>
                        )
                    }
                })}
            </div>
        );
    } else if (pesquisa !== "" && areaTrabalho !== "") {
        return (
            <div className="row col-12 m-0">
                {verificar !== undefined ?
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
                    :
                    <div className="col-12 col-md-6 col-lg-3 d-none">
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
                }
                {projetos && projetos.map(dados => {
                    let nome = dados.nomeProjeto.toLowerCase();
                    if (dados.nomeProjeto.startsWith(pesquisa) && dados.areaTrabalho == areaTrabalho || nome.startsWith(pesquisa) && dados.areaTrabalho == areaTrabalho) {
                        return (
                            <ProjectSummary info={dados} abrir={abrir}/>
                        )
                    }
                })}
            </div>
        );
    } else if (pesquisa !== "" && distrito !== ""){
        return (
            <div className="row col-12 m-0">
                {verificar !== undefined ?
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
                    :
                    <div className="col-12 col-md-6 col-lg-3 d-none">
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
                }
                {projetos && projetos.map(dados => {
                    let nome = dados.nomeProjeto.toLowerCase();
                    if (dados.nomeProjeto.startsWith(pesquisa) && dados.distritoUtilizador === distrito || nome.startsWith(pesquisa) && dados.distritoUtilizador == distrito) {
                        return (
                            <ProjectSummary info={dados} abrir={abrir}/>
                        )
                    }
                })}
            </div>
        );
    } else if (areaTrabalho !== "" && distrito !== ""){
        return (
            <div className="row col-12 m-0">
                {verificar !== undefined ?
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
                    :
                    <div className="col-12 col-md-6 col-lg-3 d-none">
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
                }
                {projetos && projetos.map(dados => {
                    if (dados.areaTrabalho == areaTrabalho && dados.distritoUtilizador == distrito) {
                        return (
                            <ProjectSummary info={dados} abrir={abrir}/>
                        )
                    }
                })}
            </div>
        );
    } else if (pesquisa !== "") {
        return (
            <div className="row col-12 m-0">
                {verificar !== undefined ?
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
                    :
                    <div className="col-12 col-md-6 col-lg-3 d-none">
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
                }
                {projetos && projetos.map(dados => {
                    let nome = dados.nomeProjeto.toLowerCase();
                    if (dados.nomeProjeto.startsWith(pesquisa) || nome.startsWith(pesquisa)) {
                        return (
                            <ProjectSummary info={dados} abrir={abrir}/>
                        )
                    }
                })}
            </div>
        );
    } else if (areaTrabalho !== "") {
        return (
            <div className="row col-12 m-0">
                {verificar !== undefined ?
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
                    :
                    <div className="col-12 col-md-6 col-lg-3 d-none">
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
                }
                {projetos && projetos.map(dados => {
                    if (dados.areaTrabalho == areaTrabalho) {
                        return (
                            <ProjectSummary info={dados} abrir={abrir}/>
                        )
                    }
                })}
            </div>
        );
    } else if (distrito !== "") {
        return (
            <div className="row col-12 m-0">
                {verificar !== undefined ?
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
                    :
                    <div className="col-12 col-md-6 col-lg-3 d-none">
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
                }
                {projetos && projetos.map(dados => {
                    if (dados.distritoUtilizador == distrito) {
                        return (
                            <ProjectSummary info={dados} abrir={abrir}/>
                        )
                    }
                })}
            </div>
        );
    }
};

export default ListaProjetos