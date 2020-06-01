import React from 'react';
import '../../App.css';
import perfil from "../../Imgs/Logo_Ubi.jpg";
import localizacao from "../../Imgs/map-marker-alt-solid.svg";
import ListaEmpregosEmpresa from './JobListEnterprise'
import ListaEmpregos from "../jobs/JobList";
import {Link} from "react-router-dom";

class PerfilEmpresa extends React.Component {
    estilo = {
        color: "inherit",
        textDecoration: "inherit"
    };

    render() {
        return (
            <div>
                <div className="container-fluid Perfil_Body">
                    <div className="row mb-0">
                        <div className="Perfil_Empresa_Inicial mb-0 col-12 justify-content-center pb-sm-5 pb-lg-0">
                            <div className="Perfil_Empresa_Info_Inicial col-9 m-lg-auto row mt-sm-5 mx-sm-auto">
                                <div className="col-sm-12 col-lg-4">
                                <span className="m-auto Perfil_Info_Inicial_Esq">
                                    <img src={perfil} className="Foto_Perfil_Empresa"/>
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
                                    <h1 className="Perfil_Info_Nome">Somos a Ubiwhere</h1>
                                    <h3 className="Perfil_Info_Trabalho">Tecnologia</h3>
                                    <span className="Perfil_Info_Texto mb-4">
                                        Nas bases de uma grande paixão pela tecnologia, começou a nossa história em 2007. Esta paixão cresceu, e com o tempo evoluiu para uma forte vontade de criar um futuro melhor para gerações futuras.
                                        A nossa equipa diversificou-se e os nossos parceiros impulsionaram a nossa jornada de constante desenvolvimento de soluções de software centradas no utilizador.
                                    </span>
                                    <span>
                                        <i className="fa fa-facebook fa-lg mr-3 icones_perfil"/>
                                        <i className="fa fa-linkedin fa-lg mr-3 icones_perfil"/>
                                        <i className="fa fa-instagram fa-lg mr-3 icones_perfil"/>
                                        <span className="Perfil_Website">website</span>
                                    </span>
                                    <span>
                                        <button className="Perfil_But_Seguir mt-4 mr-4" disabled>Enviar CV</button>
                                        <button className="Perfil_But_Seguir mt-4" disabled>Mensagem</button>
                                    </span>
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="Perfil_Projetos mb-0 col-12 justify-content-center">
                            <div className="Perfil_Info_Projetos row col-10 m-auto justify-content-center">
                                <span className="col-12">
                                    <h1 className="Titulo_Formacao mb-4 mt-5">ANÚNCIOS DE EMPREGO</h1>
                                </span>
                                <div className="col-sm-12 col-lg-10 mt-4 mb-sm-2 mb-lg-4 ml-5">
                                    <ListaEmpregosEmpresa/>
                                    <Link to="/empregos/criar">
                                        <button className="Empresa_But_Criar_Anuncio mt-2 mb-3">+ NOVO ANÚNCIO</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default PerfilEmpresa;