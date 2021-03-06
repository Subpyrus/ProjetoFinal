import React from 'react';
import '../../App.css';
import {Link} from "react-router-dom";

class ListaEmpregosEmpresa extends React.Component{
    estilo = {
        color: "inherit",
        textDecoration: "inherit"
    };
    render() {
        const {info} = this.props;
        console.log(info);
        return (
            <div>
                <Link to={`/empregos/detalhes/${info.id}`} style={this.estilo}>
                    <div className="Emprego_Listado row">
                        <span className="col-12 col-sm-9 pl-sm-4 ml-0 pl-0 mr-0 pr-0 Emprego_List_Info_Princ">
                            <span className="mb-1 Titulo_Emprego_List">{info.NomeAnuncio}</span>
                            <span className="mb-1 Info_Emprego_List">Localização: {info.Localizacao === "Braganca" ?
                                    "Bragança"
                                    :
                                    info.Localizacao === "CasteloBranco" ?
                                        "Castelo Branco"
                                        :
                                        info.Localizacao === "Evora" ?
                                            "Évora"
                                            :
                                            info.Localizacao === "Santarem" ?
                                                "Santarém"
                                                :
                                                info.Localizacao === "Setubal" ?
                                                    "Setúbal"
                                                    :
                                                    info.Localizacao === "VianaCastelo" ?
                                                        "Viana do Castelo"
                                                        :
                                                        info.Localizacao === "VilaReal" ?
                                                            "Vila Real"
                                                            :
                                                            info.Localizacao
                                }
                                </span>
                            <span className="mb-3 Info_Emprego_List">
                                {info.TipoTrabalho === "FullTime" ?
                                    "Full-Time"
                                    :
                                    "Part-Time"
                                }
                            </span>
                            <span className="row mb-0 pl-4 pr-4 pl-sm-3 pr-sm-3 justify-content-center justify-content-sm-left alinha_categorias_Empresas">
                                <span className="Area_Emprego">
                                    {info.AreaTrabalho === "3DAnimacao" ?
                                        "3D e Animação"
                                        :
                                        info.AreaTrabalho === "ArtesPerfomativas" ?
                                            "Artes Perfomativas"
                                            :
                                            info.AreaTrabalho === "ArtesPlasticas" ?
                                                "Artes Plásticas"
                                                :
                                                info.AreaTrabalho === "CinemaVideo" ?
                                                    "Cinema e Vídeo"
                                                    :
                                                    info.AreaTrabalho === "DesenhoIlustracao" ?
                                                        "Desenho e Ilustração"
                                                        :
                                                        info.AreaTrabalho === "DesignGrafico" ?
                                                            "Design Gráfico"
                                                            :
                                                            info.AreaTrabalho === "DesignProdutos" ?
                                                                "Design Produtos"
                                                                :
                                                                info.AreaTrabalho === "Fotografia" ?
                                                                    "Fotografia"
                                                                    :
                                                                    info.AreaTrabalho === "Pintura" ?
                                                                        "Pintura"
                                                                        :
                                                                        info.AreaTrabalho === "Programacao" ?
                                                                            "Programação"
                                                                            :
                                                                            info.AreaTrabalho === "Musica" ?
                                                                                "Música"
                                                                                :
                                                                                "Outros Trabalhos"

                                    }
                                </span>
                            </span>
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