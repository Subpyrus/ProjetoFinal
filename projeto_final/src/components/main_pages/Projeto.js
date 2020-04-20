import React from 'react';
import '../../App.css';
import Filtros from '../layout/Filtros';

class Projetos extends React.Component {
    render() {
        return (
            <div className="container-fluid m-0 p-0 Proj_Body">
                <Filtros/>
                <div className="row col-12 justify-content-center mt-5">
                    <span className="col-2 Proj_Item mr-2">
                        <h3 className="Proj_Info">Maria betrolina</h3>
                        <p className="Proj_Info">O meu cão não se cala</p>
                    </span>
                    <span className="col-2 Proj_Item mr-2 ml-2">Bom dia</span>
                    <span className="col-2 Proj_Item mr-2 ml-2">Bom dia</span>
                    <span className="col-2 Proj_Item ml-2">Bom dia</span>
                </div>
            </div>
        )
    }
}

export default Projetos