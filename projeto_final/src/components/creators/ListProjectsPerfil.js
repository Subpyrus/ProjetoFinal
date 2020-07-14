import React from 'react';
import '../../App.css';
import Adicionar from '../../Imgs/Adicionar.png'
import {Link} from "react-router-dom";
import ProjectSummary from '../projects/ProjectSummary';
import $ from "jquery";

const $x = "show";
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

                <div className="row col-12 mt-4 mb-5 m-auto">
                    <span className={this.state.valorP == 1 ? "row" : "Projetos_seccao1 row"}>
                        {this.props.id === this.props.id_user ?
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

                        {this.props.projects && this.props.projects.map(dados => {
                            if(this.props.id === dados.IdEmpregador){
                                return (
                                    <ProjectSummary info={dados} abrir={$x}/>
                                )
                            }
                        })}
                    </span>
                </div>
            </div>
        );
    }

}

export default ListProjectsPerfil