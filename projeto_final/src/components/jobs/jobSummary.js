import React from 'react'
import Imagem from "../../Imgs/Logo_Ubi.jpg";

const JobSummary = ({job, users}) => {

    return (
        <div className="Emprego_Listado row">
            <span className="col-12 col-sm-10 pl-sm-4 ml-0 pl-0 mr-0 pr-0 Emprego_List_Info_Princ">
                <span className="mb-1 Titulo_Emprego_List">{job.NomeAnuncio}</span>
                <span className="mb-1 Info_Emprego_List">
                    {job.Localizacao === "Braganca" ?
                        "Bragança"
                        :
                        job.Localizacao === "CasteloBranco" ?
                            "Castelo Branco"
                            :
                            job.Localizacao === "Evora" ?
                                "Évora"
                                :
                                job.Localizacao === "Santarem" ?
                                    "Santarém"
                                    :
                                    job.Localizacao === "Setubal" ?
                                        "Setúbal"
                                        :
                                        job.Localizacao === "VianaCastelo" ?
                                            "Viana do Castelo"
                                            :
                                            job.Localizacao === "VilaReal" ?
                                                "Vila Real"
                                                :
                                                job.Localizacao
                    }
                </span>
                <span className="mb-3 Info_Emprego_List">
                    {job.TipoTrabalho === "FullTime" ?
                        "Full-Time"
                        :
                        "Part-Time"
                    }
                    </span>
                <span className="zona_da_area">
                    <span className="Area_Emprego mr-lg-3 mb-2 mr-2 mb-sm-0">
                    {job.AreaTrabalho === "3DAnimacao" ?
                        "3D e Animação"
                        :
                        job.AreaTrabalho === "ArtesPerfomativas" ?
                            "Artes Perfomativas"
                            :
                            job.AreaTrabalho === "ArtesPlasticas" ?
                                "Artes Plásticas"
                                :
                                job.AreaTrabalho === "CinemaVideo" ?
                                    "Cinema e Vídeo"
                                    :
                                    job.AreaTrabalho === "DesenhoIlustracao" ?
                                        "Desenho e Ilustração"
                                        :
                                        job.AreaTrabalho === "DesignGrafico" ?
                                            "Design Gráfico"
                                            :
                                            job.AreaTrabalho === "DesignProdutos" ?
                                                "Design Produtos"
                                                :
                                                job.AreaTrabalho === "Fotografia" ?
                                                    "Fotografia"
                                                    :
                                                    job.AreaTrabalho === "Pintura" ?
                                                        "Pintura"
                                                        :
                                                        job.AreaTrabalho === "Programacao" ?
                                                            "Programação"
                                                            :
                                                            job.AreaTrabalho === "Musica" ?
                                                                "Música"
                                                                :
                                                                "Outros Trabalhos"

                    }
                </span>
                    {job && job.candidatos.map(dados => {
                        if (users === dados){
                            return(
                                <span className="Area_Emprego_2 mr-lg-3 mb-2 mr-2 mb-sm-0">
                                    Candidatura submetida
                                </span>
                            )
                        }
                    })}
                </span>
            </span>
            <span className="col-2 Emprego_List_Info_Princ_Final d-sm-block d-none">
                <span className="Info_Emprego_List pr-4"></span>
            </span>
            <div className="go-corner">
                <div className="go-arrow">
                    →
                </div>
            </div>
        </div>
    )
}

export default JobSummary