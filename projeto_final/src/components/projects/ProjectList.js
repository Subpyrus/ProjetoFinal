import React from 'react';
import Imagem2 from '../../Imgs/Conteudo_Post1.jpg'
import Imagem3 from '../../Imgs/T1.jpg'
import Imagem4 from '../../Imgs/T2.jpg'
import Imagem5 from '../../Imgs/T3.jpg'
import Imagem6 from '../../Imgs/T4.jpg'
import Imagem7 from '../../Imgs/T5.png'
import $ from 'jquery';
import {Link} from "react-router-dom";

class ListaProjetos extends React.Component {
    componentDidMount() {
        $('.show').click(function () { //same as on('click', function(){}); I just prefer this syntax
            let target = $(this).attr('data-target'); //this will be card1 if the first is clicked.
            $('.' + target).slideToggle('slow'); //add . for class selector and use target to find the right element
        });

        $('.close').click(function () { //close button
            $(this).parent().slideToggle('slow'); //find the nearest parent and close it
        });

    };

    render() {
        return (
            <div>
                <div className="container-fluid justify-content-center mt-5">
                    <div className="row col-12 m-0">
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
                    </div>
                </div>
            </div>
        );
    };
}

export default ListaProjetos