import React from 'react'

const FreelanceSummary = ({freelance}) => {

    return (
        <div className="Emprego_Listado row">
            <span className="col-12 col-sm-10 pl-sm-4 ml-0 pl-0 mr-0 pr-0 Emprego_List_Info_Princ">
                <span className="mb-1 Titulo_Emprego_List">{freelance.NomeAnuncio}</span>
                <span className="mb-1 Info_Emprego_List">Orçamento: {freelance.Orcamento}€</span>
                <span className="mb-3 Info_Emprego_List">Data de entrega: {freelance.DataEntrega}</span>    
                <span className="Area_Emprego mr-lg-3 mb-2 mr-2 mb-sm-0">{freelance.AreaTrabalho}</span>
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

export default FreelanceSummary