import React from 'react';
import '../../App.css';
import {Link} from "react-router-dom";

class ListFavouritesPerfil extends React.Component{

    render() {
        return (
            <div>
                <div className="col-12 mt-4 mb-5">
                    <span className="row justify-content-center">
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

export default ListFavouritesPerfil;