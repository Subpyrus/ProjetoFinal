import React from 'react';
import '../../App.css';
import Imagem2 from '../../Imgs/Conteudo_Post1.jpg'
import Imagem3 from '../../Imgs/T1.jpg'
import Imagem4 from '../../Imgs/T2.jpg'
import Imagem5 from '../../Imgs/T3.jpg'
import Imagem6 from '../../Imgs/T4.jpg'
import Imagem7 from '../../Imgs/T5.png'
import Adicionar from '../../Imgs/Adicionar.png'
import {Link} from "react-router-dom";
import $ from "jquery";

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

    componentDidMount() {
        $('.show').click(function () { //same as on('click', function(){}); I just prefer this syntax
            let target = $(this).attr('data-target'); //this will be card1 if the first is clicked.
            $('.' + target).slideToggle('slow'); //add . for class selector and use target to find the right element
        });

        $('.close').click(function () { //close button
            $(this).parent().slideToggle('slow'); //find the nearest parent and close it
        });

        document.addEventListener('DOMContentLoaded', function() {
            const M = window.M;
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems);
        });

    };

    render() {
        return (
            <div>
                <span className="col-12 row justify-content-center hide-on-med-and-down">
                    <span className="col-4 col-lg-3 Separador_Projetos" onClick={() => this.seccao_escolhida(1)}>
                        <span style={this.state.valorP == 1 ? this.opacidadeS : this.opacidadeN}/>
                        <span>Design Gráfico</span>
                    </span>
                    <span className="col-4 col-lg-3 Separador_Projetos" onClick={() => this.seccao_escolhida(2)}>
                        <span style={this.state.valorP == 2 ? this.opacidadeS : this.opacidadeN}/>
                        <span>Programação</span>
                    </span>
                    <span className="col-4 col-lg-3 Separador_Projetos" onClick={() => this.seccao_escolhida(3)}>
                        <span style={this.state.valorP == 3 ? this.opacidadeS : this.opacidadeN}/>
                        <span>Vídeo e Fotografia</span>
                    </span>
                </span>

                <a className='dropdown-trigger btn btn-flat dropdownProjetos hide-on-large-only' href='#' data-target='dropdown1'>
                    {this.state.valorP == 1 ? "Design Gráfico" : this.state.valorP == 2 ? "Programação" : "Vídeo e Fotografia"}
                </a>
                <ul id='dropdown1' className='dropdown-content'>
                    <li onClick={() => this.seccao_escolhida(1)} className="valign-wrapper">Design Gráfico</li>
                    <li onClick={() => this.seccao_escolhida(2)} className="valign-wrapper">Programação</li>
                    <li onClick={() => this.seccao_escolhida(3)} className="valign-wrapper">Vídeo e Fotografia</li>
                </ul>

                <div className="row col-12 mt-4 mb-5">
                    <span className={this.state.valorP == 1 ? "row" : "Projetos_seccao1 row"}>
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
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-image">
                                    <Link to="/projetos/detalhes">
                                        <div className="wrap">
                                            <img className="img-fluid" src={Imagem2}/>
                                        </div>
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <div>
                                        <span className="card-title">Website 2018 - Beatriz Pais</span>
                                        <button type="button" id="show" data-target="show1"
                                                className="float-right show btn btn-custom"
                                                aria-label="Left Align"><i className="fa fa-ellipsis-v"></i>
                                        </button>
                                    </div>
                                    <span className="card-text Proj_Info3">
                                    <i className="fa fa-eye mr-2"/><span className="mr-2 nums">533</span>
                                    <i className="fa fa-heart-o mr-2"/><span className="mr-2 nums">42</span>
                                </span>
                                </div>
                                <div className="card-reveal show1">
                                    <button type="button" className="close btn-custom" data-dismiss="modal"
                                            aria-label="Close">
                                        <span aria-hidden="true">×</span></button>
                                    <p>Mestre em Design e com licenciatura em Novas Tecnologias da Comunicação.
                                        Atualmente trabalho como front-end developer mas tenho um enorme gosto pelo
                                        Design Digital (...)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-image">
                                    <Link to="/projetos/detalhes">
                                        <div className="wrap">
                                            <img className="img-fluid" src={Imagem3}/>
                                        </div>
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <div>
                                        <span className="card-title">Website 2018 - Beatriz Pais</span>
                                        <button type="button" id="show2" data-target="show2"
                                                className="float-right show btn btn-custom"
                                                aria-label="Left Align"><i className="fa fa-ellipsis-v"></i>
                                        </button>
                                    </div>
                                    <span className="card-text Proj_Info3">
                                    <i className="fa fa-eye mr-2"/><span className="mr-2 nums">533</span>
                                    <i className="fa fa-heart-o mr-2"/><span className="mr-2 nums">42</span>
                                </span>
                                </div>
                                <div className="card-reveal show2">
                                    <button type="button" className="close btn-custom" data-dismiss="modal"
                                            aria-label="Close">
                                        <span aria-hidden="true">×</span></button>
                                    <p>Mestre em Design e com licenciatura em Novas Tecnologias da Comunicação.
                                        Atualmente trabalho como front-end developer mas tenho um enorme gosto pelo
                                        Design Digital (...)</p>
                                </div>
                            </div>
                        </div>
                    </span>
                    <span className={this.state.valorP == 2 ? "row" : "Projetos_seccao1 row"}>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-image">
                                    <Link to="/projetos/detalhes">
                                        <div className="wrap">
                                            <img className="img-fluid" src={Imagem4}/>
                                        </div>
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <div>
                                        <span className="card-title">Website 2018 - Beatriz Pais</span>
                                        <button type="button" id="show3" data-target="show3"
                                                className="float-right show btn btn-custom"
                                                aria-label="Left Align"><i className="fa fa-ellipsis-v"></i>
                                        </button>
                                    </div>
                                    <span className="card-text Proj_Info3">
                                    <i className="fa fa-eye mr-2"/><span className="mr-2 nums">533</span>
                                    <i className="fa fa-heart-o mr-2"/><span className="mr-2 nums">42</span>
                                </span>
                                </div>
                                <div className="card-reveal show3">
                                    <button type="button" className="close btn-custom" data-dismiss="modal"
                                            aria-label="Close">
                                        <span aria-hidden="true">×</span></button>
                                    <p>Mestre em Design e com licenciatura em Novas Tecnologias da Comunicação.
                                        Atualmente trabalho como front-end developer mas tenho um enorme gosto pelo
                                        Design Digital (...)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-image">
                                    <Link to="/projetos/detalhes">
                                        <div className="wrap">
                                            <img className="img-fluid" src={Imagem5}/>
                                        </div>
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <div>
                                        <span className="card-title">Website 2018 - Beatriz Pais</span>
                                        <button type="button" id="show4" data-target="show4"
                                                className="float-right show btn btn-custom"
                                                aria-label="Left Align"><i className="fa fa-ellipsis-v"></i>
                                        </button>
                                    </div>
                                    <span className="card-text Proj_Info3">
                                    <i className="fa fa-eye mr-2"/><span className="mr-2 nums">533</span>
                                    <i className="fa fa-heart-o mr-2"/><span className="mr-2 nums">42</span>
                                </span>
                                </div>
                                <div className="card-reveal show4">
                                    <button type="button" className="close btn-custom" data-dismiss="modal"
                                            aria-label="Close">
                                        <span aria-hidden="true">×</span></button>
                                    <p>Mestre em Design e com licenciatura em Novas Tecnologias da Comunicação.
                                        Atualmente trabalho como front-end developer mas tenho um enorme gosto pelo
                                        Design Digital (...)</p>
                                </div>
                            </div>
                        </div>
                        </span>
                    <span className={this.state.valorP == 3 ? "row" : "Projetos_seccao1 row"}>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-image">
                                    <Link to="/projetos/detalhes">
                                        <div className="wrap">
                                            <img className="img-fluid" src={Imagem6}/>
                                        </div>
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <div>
                                        <span className="card-title">Website 2018 - Beatriz Pais</span>
                                        <button type="button" id="show5" data-target="show5"
                                                className="float-right show btn btn-custom"
                                                aria-label="Left Align"><i className="fa fa-ellipsis-v"></i>
                                        </button>
                                    </div>
                                    <span className="card-text Proj_Info3">
                                    <i className="fa fa-eye mr-2"/><span className="mr-2 nums">533</span>
                                    <i className="fa fa-heart-o mr-2"/><span className="mr-2 nums">42</span>
                                </span>
                                </div>
                                <div className="card-reveal show5">
                                    <button type="button" className="close btn-custom" data-dismiss="modal"
                                            aria-label="Close">
                                        <span aria-hidden="true">×</span></button>
                                    <p>Mestre em Design e com licenciatura em Novas Tecnologias da Comunicação.
                                        Atualmente trabalho como front-end developer mas tenho um enorme gosto pelo
                                        Design Digital (...)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-image">
                                    <Link to="/projetos/detalhes">
                                        <div className="wrap">
                                            <img className="img-fluid" src={Imagem7}/>
                                        </div>
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <div>
                                        <span className="card-title">Website 2018 - Beatriz Pais</span>
                                        <button type="button" id="show6" data-target="show6"
                                                className="float-right show btn btn-custom"
                                                aria-label="Left Align"><i className="fa fa-ellipsis-v"></i>
                                        </button>
                                    </div>
                                    <span className="card-text Proj_Info3">
                                    <i className="fa fa-eye mr-2"/><span className="mr-2 nums">533</span>
                                    <i className="fa fa-heart-o mr-2"/><span className="mr-2 nums">42</span>
                                </span>
                                </div>
                                <div className="card-reveal show6">
                                    <button type="button" className="close btn-custom" data-dismiss="modal"
                                            aria-label="Close">
                                        <span aria-hidden="true">×</span></button>
                                    <p>Mestre em Design e com licenciatura em Novas Tecnologias da Comunicação.
                                        Atualmente trabalho como front-end developer mas tenho um enorme gosto pelo
                                        Design Digital (...)</p>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        );
    }

}

export default ListProjectsPerfil