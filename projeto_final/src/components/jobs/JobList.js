import React from 'react';
import JobSummary from "./jobSummary";
import { Link } from 'react-router-dom'

const ListaEmpregos = ({ jobs, pesquisa, areaTrabalho, distrito }) =>  {
    if (pesquisa == "" && areaTrabalho == "" && distrito === ""){
        return (
            <div>
                { jobs && jobs.map(job => {
                    //console.log(jobs);
                    return(
                        <Link to={'/empregos/detalhes/' + job.id} style={{color: "inherit", textDecoration: "none"}}>
                            <JobSummary job={job} key={job.id}/>
                        </Link>
                    )               
                })}
            </div>
        )
    } else if (pesquisa !== "" && areaTrabalho !== "" && distrito !== "") {
        return (
            <div>
                { jobs && jobs.map(job => {
                    let nomes = job.NomeAnuncio.toLowerCase();
                    if (job.NomeAnuncio.startsWith(pesquisa) && job.AreaTrabalho == areaTrabalho && job.Localizacao == distrito || nomes.startsWith(pesquisa) && job.AreaTrabalho == areaTrabalho && job.Localizacao == distrito) {
                        return(
                            <Link to={'/empregos/detalhes/' + job.id} style={{color: "inherit", textDecoration: "none"}}>
                                <JobSummary job={job} key={job.id}/>
                            </Link>
                        )
                    }
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
                            <Link to={'/empregos/detalhes/' + job.id} style={{color: "inherit", textDecoration: "none"}}>
                                <JobSummary job={job} key={job.id}/>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    } else if (pesquisa !== "" && distrito !== "") {
        return (
            <div>
                { jobs && jobs.map(job => {
                    let nomes = job.NomeAnuncio.toLowerCase();
                    if (job.NomeAnuncio.startsWith(pesquisa) && job.Localizacao == distrito || nomes.startsWith(pesquisa) && job.Localizacao == distrito) {
                        return(
                            <Link to={'/empregos/detalhes/' + job.id} style={{color: "inherit", textDecoration: "none"}}>
                                <JobSummary job={job} key={job.id}/>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    } else if (distrito !== "" && areaTrabalho !== "") {
        return (
            <div>
                { jobs && jobs.map(job => {
                    if (job.Localizacao == distrito && job.AreaTrabalho == areaTrabalho) {
                        return(
                            <Link to={'/empregos/detalhes/' + job.id} style={{color: "inherit", textDecoration: "none"}}>
                                <JobSummary job={job} key={job.id}/>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    } else if (pesquisa !== "") {
        return (
            <div>
                { jobs && jobs.map(job => {
                    let nomes = job.NomeAnuncio.toLowerCase();
                    if (job.NomeAnuncio.startsWith(pesquisa) || nomes.startsWith(pesquisa)) {
                        return(
                            <Link to={'/empregos/detalhes/' + job.id} style={{color: "inherit", textDecoration: "none"}}>
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
                            <Link to={'/empregos/detalhes/' + job.id} style={{color: "inherit", textDecoration: "none"}}>
                                <JobSummary job={job} key={job.id}/>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    } else if (distrito !== "") {
        return (
            <div>
                { jobs && jobs.map(job => {
                    if (job.Localizacao == distrito) {
                        return(
                            <Link to={'/empregos/detalhes/' + job.id} style={{color: "inherit", textDecoration: "none"}}>
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