import React from 'react';
import '../../App.css';
import Filtros from '../layout/Filtros';

class Projetos extends React.Component {
    render() {
        return (
            <div className="container-fluid m-0 p-0 Proj_Body">
                <Filtros/>
                <div className="row col-12 justify-content-center mt-5">
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