import React from 'react';
import '../../App.css';
import JobSummary from "./jobSummary";

const ListaEmpregos = ({ jobs }) =>  {
    
    console.log(jobs)
    return (
        <div>
            
            { jobs && jobs.map(job => {
                return(
                    <div>
                        <JobSummary job={job} key={job.id}/>
                    </div>
                )               
            })}
        </div>
    )
}

export default ListaEmpregos