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

                <div className="row col-12 mt-4 mb-5 m-auto">
                    <span className="row">
                        {this.props.id === this.props.id_user ?
                            <div className="col-12 col-md-6 col-lg-3 m-0">
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