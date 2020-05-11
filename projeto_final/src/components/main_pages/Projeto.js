import React from 'react';
import '../../App.css';
import Filtros from '../layout/Filtros';
import ListaProjetos from '../projects/ProjectList';

class Projetos extends React.Component {
    render() {
        return (
            <div className="container-fluid m-0 p-0 Proj_Body">
                <Filtros/>
                <ListaProjetos/>
            </div>
        )
    }
}

export default Projetos