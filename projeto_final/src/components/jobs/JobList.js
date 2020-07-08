import React from 'react';
import JobSummary from "./jobSummary";
import { Link } from 'react-router-dom'

const ListaEmpregos = ({ jobs, pesquisa, areaTrabalho }) =>  {
    if (pesquisa == "" && areaTrabalho == ""){
        return (
            <div>
                { jobs && jobs.map(job => {
                    return(
                        <Link to={'/empregos/detalhes/' + job.id}>
                            <JobSummary job={job} key={job.id}/>
                        </Link>
                    )               
                })}
            </div>
        )
    } else if (pesquisa !== "" && areaTrabalho !== "") {
        return (
            <div>
                { jobs && jobs.map(job => {
                    let nomes = job.NomeAnuncio.toLowerCase();
                    if (job.NomeAnuncio.startsWith(pesquisa) && job.AreaTrabalho == areaTrabalho || nomes.startsWith(pesquisa) && job.AreaTrabalho == areaTrabalho) {
                        return(
                            <Link to={'/empregos/detalhes/' + job.id}>
                                <JobSummary job={job} key={job.id}/>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    }else if (pesquisa !== "") {
        return (
            <div>
                { jobs && jobs.map(job => {
                    let nomes = job.NomeAnuncio.toLowerCase();
                    if (job.NomeAnuncio.startsWith(pesquisa) || nomes.startsWith(pesquisa)) {
                        return(
                            <Link to={'/empregos/detalhes/' + job.id}>
                                <JobSummary job={job} key={job.id}/>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    } else if (areaTrabalho !== "") {
        return (
            <div>
                { jobs && jobs.map(job => {
                    if (job.AreaTrabalho == areaTrabalho) {
                        return(
                            <Link to={'/empregos/detalhes/' + job.id}>
                                <JobSummary job={job} key={job.id}/>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    }
}

export default ListaEmpregos