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
                        <span className="col-12 col-sm-9 pl-sm-4 ml-0 pl-0 mr-0 pr-0 Emprego_List_Info_Princ">
                            <span className="mb-1 Titulo_Emprego_List">Web Designer UI/UX</span>
                            <span className="mb-1 Info_Emprego_List">Localização: Santo Ovídeo, Vila Nova de Gaia</span>
                            <span className="mb-3 Info_Emprego_List">Tempo Inteiro</span>
                            <span className="row mb-0 pl-4 pr-4 pl-sm-3 pr-sm-3 justify-content-center justify-content-sm-left alinha_categorias_Empresas">
                                <span className="Area_Emprego">Design Gráfico</span>
                                <span className="Area_Emprego2 d-md-none d-block mt-2">Ver Candidatos</span>
                            </span>
                        </span>
                        <span className="col-12 col-md-3 Emprego_List_Info_Princ_Final pr-4 d-md-inline-flex d-none">
                            <span className="Info_Emprego_List">3 de Março</span>
                            <span className="Area_Emprego2 Ver_Candidatos_Perfil">Ver Candidatos</span>
                        </span>
                        <div className="go-corner">
                            <div className="go-arrow">
                                →
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }

}

export default ListaEmpregosEmpresa