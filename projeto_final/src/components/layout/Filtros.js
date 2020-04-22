import React from 'react';
import '../../App.css';

class Filtros extends React.Component {
    render() {
        return (
            <div className="filtros row col-12 m-0 p-0">
                <span className="col-2"/>
                <span className="col-2 item_Filtro">Área de Trabalho</span>
                <span className="col-2 item_Filtro">Localização</span>
                <span className="col-2 item_Filtro">Destaques</span>
                <span className="col-2 item_Filtro2">Pesquisa</span>
                <span className="col-2"/>
            </div>
        )
    }
}

export default Filtros