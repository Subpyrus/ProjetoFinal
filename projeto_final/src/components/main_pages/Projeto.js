import React, {useState} from 'react';
import '../../App.css';
import Filtros from '../layout/Filtros';
import {Link} from 'react-router-dom';

class Projetos extends React.Component {
    render() {
        return (
            <div className="container-fluid m-0 p-0 Proj_Body">
                <Filtros/>
                <div className="row col-12 justify-content-center mt-5">
                    <div className="col-2 mr-2">
                        <Link to="/projetos/detalhes">
                        <div className="card m-0 p-0">
                            <div className="card-body">
                                <h5 className="card-text Proj_Info">Maria betrolina</h5>
                                <span className="card-text Proj_Info2">O meu cão não se cala</span>
                                <span className="card-text Proj_Info3">
                                    <i className="fa fa-eye"/>533
                                    <i className="fa fa-heart"/>42
                                    <i className="fa fa-comment"/>1
                                </span>
                            </div>
                            <div className="card_blur"/>
                        </div>
                        </Link>
                    </div>
                    <div className="col-2 mr-2">
                        <div className="card m-0 p-0">
                            <div className="card-body">
                                <h3 className="card-title Proj_Info">Maria betrolina</h3>
                                <p className="card-text Proj_Info">O meu cão não se cala</p>
                            </div>
                            <div className="card_blur"/>
                        </div>
                    </div>
                    <div className="col-2 mr-2">
                        <div className="card m-0 p-0">
                            <div className="card-body">
                                <h3 className="card-title Proj_Info">Maria betrolina</h3>
                                <p className="card-text Proj_Info">O meu cão não se cala</p>
                            </div>
                            <div className="card_blur"/>
                        </div>
                    </div>
                    <div className="col-2 mr-2">
                        <div className="card m-0 p-0">
                            <div className="card-body">
                                <h3 className="card-title Proj_Info">Maria betrolina</h3>
                                <p className="card-text Proj_Info">O meu cão não se cala</p>
                            </div>
                            <div className="card_blur"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projetos