import React from 'react'

const FreelanceSummary = ({freelance, users}) => {
    return (
        <div className="Emprego_Listado row">
            <span className="col-12 col-sm-10 pl-sm-4 ml-0 pl-0 mr-0 pr-0 Emprego_List_Info_Princ">
                <span className="mb-1 Titulo_Emprego_List">{freelance.NomeAnuncio}</span>
                <span className="mb-1 Info_Emprego_List">Orçamento: {freelance.Orcamento}€</span>
                <span className="mb-3 Info_Emprego_List">Data de entrega: {freelance.DataEntrega}</span>
                <span className="zona_da_area">
                    <span className="Area_Emprego mr-lg-3 mb-2 mr-2 mb-sm-0">
                    {freelance.AreaTrabalho === "3DAnimacao" ?
                        "3D e Animação"
                        :
                        freelance.AreaTrabalho === "ArtesPerfomativas" ?
                            "Artes Perfomativas"
                            :
                            freelance.AreaTrabalho === "ArtesPlasticas" ?
                                "Artes Plásticas"
                                :
                                freelance.AreaTrabalho === "CinemaVideo" ?
                                    "Cinema e Vídeo"
                                    :
                                    freelance.AreaTrabalho === "DesenhoIlustracao" ?
                                        "Desenho e Ilustração"
                                        :
                                        freelance.AreaTrabalho === "DesignGrafico" ?
                                            "Design Gráfico"
                                            :
                                            freelance.AreaTrabalho === "DesignProdutos" ?
                                                "Design Produtos"
                                                :
                                                freelance.AreaTrabalho === "Fotografia" ?
                                                    "Fotografia"
                                                    :
                                                    freelance.AreaTrabalho === "Pintura" ?
                                                        "Pintura"
                                                        :
                                                        freelance.AreaTrabalho === "Programacao" ?
                                                            "Programação"
                                                            :
                                                            freelance.AreaTrabalho === "Musica" ?
                                                                "Música"
                                                                :
                                                                "Outros Trabalhos"

                    }
                    </span>
                    {freelance && freelance.candidatos.map(dados => {
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
            <div className="go-corner">
                <div className="go-arrow">
                    →
                </div>
            </div>
        </div>
    )
}

export default FreelanceSummary