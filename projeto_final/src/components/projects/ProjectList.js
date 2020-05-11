import React from 'react';
import {Link} from "react-router-dom";

class ListaProjetos extends React.Component {

    render() {
        return (
            <div>
                <div className="row col-12 justify-content-center mt-5">
                    <div className="col-2 mr-2">
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
                    <div className="col-2 mr-2">
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
                    <div className="col-2 mr-2">
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
                    <div className="col-2 mr-2">
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
                </div>
            </div>
        );
    }

}

export default ListaProjetos