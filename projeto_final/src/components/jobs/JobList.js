import React from 'react';
import '../../App.css';
import Imagem from "../../Imgs/Logo_Ubi.jpg";
import {Link} from "react-router-dom";

class ListaEmpregos extends React.Component {
    estilo = {
        color: "inherit",
        textDecoration: "inherit"
    };
    render() {
        return (
            <div>
                <Link to="/freelance/detalhes" style={this.estilo}>
                    <div className="Emprego_Listado row">
                    <span className="col-3 mr-0 pr-0 Emprego_List_Info_Princ_Imagem">
                        <img src={Imagem} className="Empregos_List_Imagem"/>
                    </span>
                        <span className="col-7 ml-0 pl-0 Emprego_List_Info_Princ">
                        <span className="mb-1 Titulo_Emprego_List">Web Designer UI/UX</span>
                        <span className="mb-1 Info_Emprego_List">Localização: Santo Ovídeo, Vila Nova de Gaia</span>
                        <span className="mb-3 Info_Emprego_List">Tempo Inteiro</span>
                        <span className="Area_Emprego">Design Gráfico</span>
                    </span>
                        <span className="col-2 Emprego_List_Info_Princ_Final">
                        <span className="Info_Emprego_List pr-4">3 de Março</span>
                    </span>
                    </div>
                </Link>

                <Link to="/freelance/detalhes" style={this.estilo}>
                    <div className="Emprego_Listado row">
                    <span className="col-3 mr-0 pr-0 Emprego_List_Info_Princ_Imagem">
                        <img src={Imagem} className="Empregos_List_Imagem"/>
                    </span>
                        <span className="col-7 ml-0 pl-0 Emprego_List_Info_Princ">
                        <span className="mb-1 Titulo_Emprego_List">Web Designer UI/UX</span>
                        <span className="mb-1 Info_Emprego_List">Localização: Santo Ovídeo, Vila Nova de Gaia</span>
                        <span className="mb-3 Info_Emprego_List">Tempo Inteiro</span>
                        <span className="Area_Emprego">Design Gráfico</span>
                    </span>
                        <span className="col-2 Emprego_List_Info_Princ_Final">
                        <span className="Info_Emprego_List pr-4">3 de Março</span>
                    </span>
                    </div>
                </Link>

                <Link to="/freelance/detalhes" style={this.estilo}>
                    <div className="Emprego_Listado row">
                    <span className="col-3 mr-0 pr-0 Emprego_List_Info_Princ_Imagem">
                        <img src={Imagem} className="Empregos_List_Imagem"/>
                    </span>
                        <span className="col-7 ml-0 pl-0 Emprego_List_Info_Princ">
                        <span className="mb-1 Titulo_Emprego_List">Web Designer UI/UX</span>
                        <span className="mb-1 Info_Emprego_List">Localização: Santo Ovídeo, Vila Nova de Gaia</span>
                        <span className="mb-3 Info_Emprego_List">Tempo Inteiro</span>
                        <span className="Area_Emprego">Design Gráfico</span>
                    </span>
                        <span className="col-2 Emprego_List_Info_Princ_Final">
                        <span className="Info_Emprego_List pr-4">3 de Março</span>
                    </span>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ListaEmpregos