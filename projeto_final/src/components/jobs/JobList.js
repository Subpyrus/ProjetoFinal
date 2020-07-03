import React from 'react';
import JobSummary from "./jobSummary";
import { Link } from 'react-router-dom'

const ListaEmpregos = ({ jobs }) =>  {
    
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
}

export default ListaEmpregos