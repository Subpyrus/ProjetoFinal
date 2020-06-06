import React from 'react';
import '../../App.css';
import Filtros from '../layout/Filtros';
import CreatorList from '../creators/CreatorList';

class Criador extends React.Component{

    render() {
        return (
            <div>
                <Filtros pagina="criador"/>
                <div className="container-fluid Body_Criadores">
                    <CreatorList/>
                </div>
            </div>
        );
    }

}

export default Criador;