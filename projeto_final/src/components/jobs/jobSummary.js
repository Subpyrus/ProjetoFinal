import React from 'react'
import Imagem from "../../Imgs/Logo_Ubi.jpg";

const JobSummary = ({job}) => {

    return (
        <div className="Emprego_Listado row">
            <span className="col-12 col-sm-4 col-md-3 mr-0 Emprego_List_Info_Princ_Imagem">
                <img src={Imagem} className="Empregos_List_Imagem"/>
            </span>
            <span className="col-12 col-sm-6 col-md-7 ml-0 pr-0 my-auto pl-0 Emprego_List_Info_Princ">
                <span className="mb-1 Titulo_Emprego_List">{job.NomeAnuncio}</span>
                <span className="mb-1 Info_Emprego_List">{job.Localizacao}</span>
                <span className="mb-3 Info_Emprego_List">{job.TipoTrabalho}</span>
                <span className="Area_Emprego">{job.AreaTrabalho}</span>
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