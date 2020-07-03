import React from 'react';
import {Link} from 'react-router-dom';
import FreelanceSummary from "./freelanceSummary";

const ListaFreelance = ({ freelances }) =>  {
    
    return (
        <div>
            
            { freelances && freelances.map(freelance => {
                return(
                    <Link to={'/freelance/detalhes/' + freelance.id}>
                        <FreelanceSummary freelance={freelance} key={freelance.id}/>
                    </Link>
                )               
            })}
        </div>
    )
}



export default ListaFreelance