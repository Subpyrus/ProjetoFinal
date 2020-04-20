import React from 'react';
import '../../App.css';

function Filtros() {
    return(
        <div className="filtros row col-12 m-0 p-0">
            <span className="col-2 item_Filtro"/>
            <span className="col-2 item_Filtro">Área de trabalho</span>
            <span className="col-2 item_Filtro">Localização</span>
            <span className="col-2 item_Filtro">Destaques</span>
            <span className="col-2 item_Filtro">Pesquisa</span>
            <span className="col-2 item_Filtro"/>
        </div>
    )
}

export default Filtros