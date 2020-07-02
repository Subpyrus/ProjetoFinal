import React from 'react';
import {Link} from 'react-router-dom';

class ListaFreelance extends React.Component {
    estilo = {
        color: "inherit",
        textDecoration: "inherit"
    };
    render() {
        return (
            <div>
                <Link to="/freelance/detalhes" style={this.estilo}>
                    <div className="Emprego_Listado row">
                    <span className="col-10 pl-4 ml-0 pl-0 Emprego_List_Info_Princ">
                        <span className="mb-1 Titulo_Emprego_List">Edição de vídeo musical</span>
                        <span className="mb-1 Info_Emprego_List">Orçamento: 400€</span>
                        <span className="mb-3 Info_Emprego_List">Data de entrega: 30/04/2020</span>
                        <span className="row mb-0 pl-3 justify-content-xs-center justify-content-left">
                            <span className="Area_Emprego mr-lg-3 mb-2 mr-2 mb-sm-0">Design Gráfico</span>
                            <span className="Area_Emprego mr-lg-3 mb-2 mr-2 mb-sm-0">Edição de vídeo</span>
                            <span className="Area_Emprego mb-sm-0 mb-2">Ilustração</span>
                        </span>
                    </span>
                    <span className="col-2 Emprego_List_Info_Princ_Final d-sm-block d-none">
                        <span className="Info_Emprego_List pr-4">3 de Março</span>
                    </span>
                        <div className="go-corner">
                            <div className="go-arrow">
                                →
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/freelance/detalhes" style={this.estilo}>
                    <div className="Emprego_Listado row">
                    <span className="col-10 pl-4 ml-0 pl-0 Emprego_List_Info_Princ">
                        <span className="mb-1 Titulo_Emprego_List">Edição de vídeo musical</span>
                        <span className="mb-1 Info_Emprego_List">Orçamento: 400€</span>
                        <span className="mb-3 Info_Emprego_List">Data de entrega: 30/04/2020</span>
                        <span className="row mb-0 pl-3">
                            <span className="Area_Emprego mr-lg-3 mb-2 mr-2 mb-sm-0">Design Gráfico</span>
                            <span className="Area_Emprego mr-lg-3 mb-2 mr-2 mb-sm-0">Edição de vídeo</span>
                            <span className="Area_Emprego mb-sm-0 mb-2">Ilustração</span>
                        </span>
                    </span>
                        <span className="col-2 Emprego_List_Info_Princ_Final d-sm-block d-none">
                        <span className="Info_Emprego_List pr-4">3 de Março</span>
                    </span>
                        <div className="go-corner">
                            <div className="go-arrow">
                                →
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/freelance/detalhes" style={this.estilo}>
                    <div className="Emprego_Listado row">
                    <span className="col-10 pl-4 ml-0 pl-0 Emprego_List_Info_Princ">
                        <span className="mb-1 Titulo_Emprego_List">Edição de vídeo musical</span>
                        <span className="mb-1 Info_Emprego_List">Orçamento: 400€</span>
                        <span className="mb-3 Info_Emprego_List">Data de entrega: 30/04/2020</span>
                        <span className="row mb-0 pl-3">
                            <span className="Area_Emprego mr-lg-3 mb-2 mr-2 mb-sm-0">Design Gráfico</span>
                            <span className="Area_Emprego mr-lg-3 mb-2 mr-2 mb-sm-0">Edição de vídeo</span>
                            <span className="Area_Emprego mb-sm-0 mb-2">Ilustração</span>
                        </span>
                    </span>
                        <span className="col-2 Emprego_List_Info_Princ_Final d-sm-block d-none">
                        <span className="Info_Emprego_List pr-4">3 de Março</span>
                    </span>
                        <div className="go-corner">
                            <div className="go-arrow">
                                →
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ListaFreelance