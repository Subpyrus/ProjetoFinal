import React from 'react';
import '../../App.css';
import {Link} from "react-router-dom";

class ListaEmpregosEmpresa extends React.Component{
    estilo = {
        color: "inherit",
        textDecoration: "inherit"
    };
    render() {
        return (
            <div>
                <Link to="/freelance/detalhes" style={this.estilo}>
                    <div className="Emprego_Listado row">
                        <span className="col-sm-12 col-md-9 pl-4 Emprego_List_Info_Princ">
                            <span className="mb-1 Titulo_Emprego_List">Web Designer UI/UX</span>
                            <span className="mb-1 Info_Emprego_List">Localização: Santo Ovídeo, Vila Nova de Gaia</span>
                            <span className="mb-3 Info_Emprego_List">Tempo Inteiro</span>
                            <span className="Area_Emprego">Design Gráfico</span>
                        </span>
                        <span className="col-sm-12 col-md-3 Emprego_List_Info_Princ_Final pr-4">
                            <span className="Info_Emprego_List">3 de Março</span>
                            <span className="Area_Emprego2 Ver_Candidatos_Perfil">Ver Candidatos</span>
                        </span>
                    </div>
                </Link>
            </div>
        );
    }

}

export default ListaEmpregosEmpresa