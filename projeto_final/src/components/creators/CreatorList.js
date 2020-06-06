import React from 'react';
import '../../App.css';
import Imagem from '../../Imgs/Perfil.jpg'
import {Link} from "react-router-dom";

class CreatorList extends React.Component {

    render() {
        return (
            <div className="row col-12 justify-content-center mb-0 pt-5">
                <div className="col-6 col-sm-4 col-lg-2 mr-lg-2 mb-3">
                    <div className="card card_Criadores">
                        <div className="card-body card_body2 card_PT1 text-center">
                            <div className="text-center">
                                <img src={Imagem} className="card_Imagem mb-2"/>
                            </div>
                            <span style={{fontFamily: "Barlow Semibold, sans-serif", fontSize: "18px"}}>Beatriz Pais</span>
                            <div className="mt-1 card_body2_P2">
                                <span>Front-End Developer</span>
                                <span>Aveiro, Portugal</span>
                            </div>
                        </div>
                        <div className="card_body2 card_PT2">
                            <Link to="/perfil">
                                <button className="Criador_But_Ver_Perfil mt-2">Ver Perfil</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-2 mr-lg-2 mb-3">
                    <div className="card card_Criadores">
                        <div className="card-body card_body2 text-center">
                            <div className="text-center">
                                <img src={Imagem} className="card_Imagem mb-2"/>
                            </div>
                            <span style={{fontFamily: "Barlow Semibold, sans-serif", fontSize: "18px"}}>Beatriz Pais</span>
                            <div className="mt-1 card_body2_P2">
                                <span>Front-End Developer</span>
                                <span>Aveiro, Portugal</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-2 mr-lg-2 mb-3">
                    <div className="card card_Criadores">
                        <div className="card-body card_body2 text-center">
                            <div className="text-center">
                                <img src={Imagem} className="card_Imagem mb-2"/>
                            </div>
                            <span style={{fontFamily: "Barlow Semibold, sans-serif", fontSize: "18px"}}>Beatriz Pais</span>
                            <div className="mt-1 card_body2_P2">
                                <span>Front-End Developer</span>
                                <span>Aveiro, Portugal</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-2 mr-lg-2 mb-3">
                    <div className="card card_Criadores">
                        <div className="card-body card_body2 text-center">
                            <div className="text-center">
                                <img src={Imagem} className="card_Imagem mb-2"/>
                            </div>
                            <span style={{fontFamily: "Barlow Semibold, sans-serif", fontSize: "18px"}}>Beatriz Pais</span>
                            <div className="mt-1 card_body2_P2">
                                <span>Front-End Developer</span>
                                <span>Aveiro, Portugal</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-2 mr-lg-2 mb-3">
                    <div className="card card_Criadores">
                        <div className="card-body card_body2 text-center">
                            <div className="text-center">
                                <img src={Imagem} className="card_Imagem mb-2"/>
                            </div>
                            <span style={{fontFamily: "Barlow Semibold, sans-serif", fontSize: "18px"}}>Beatriz Pais</span>
                            <div className="mt-1 card_body2_P2">
                                <span>Front-End Developer</span>
                                <span>Aveiro, Portugal</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-2 mr-lg-2 mb-3">
                    <div className="card card_Criadores">
                        <div className="card-body card_body2 text-center">
                            <div className="text-center">
                                <img src={Imagem} className="card_Imagem mb-2"/>
                            </div>
                            <span style={{fontFamily: "Barlow Semibold, sans-serif", fontSize: "18px"}}>Beatriz Pais</span>
                            <div className="mt-1 card_body2_P2">
                                <span>Front-End Developer</span>
                                <span>Aveiro, Portugal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CreatorList;