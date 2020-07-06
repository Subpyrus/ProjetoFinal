import React from 'react';
import {Link} from 'react-router-dom';
import FreelanceSummary from "./freelanceSummary";

const ListaFreelance = ({ freelances, pesquisa, areaTrabalho }) =>  {
    if (pesquisa == "" && areaTrabalho == "") {
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
    } else if (pesquisa !== "" && areaTrabalho !== "") {
        return (
            <div>
                { freelances && freelances.map(freelance => {
                    let nomes = freelance.NomeAnuncio.toLowerCase();
                    if (freelance.NomeAnuncio.startsWith(pesquisa) && freelance.AreaTrabalho == areaTrabalho || nomes.startsWith(pesquisa) && freelance.AreaTrabalho == areaTrabalho) {
                        return (
                            <Link to={'/freelance/detalhes/' + freelance.id}>
                                <FreelanceSummary freelance={freelance} key={freelance.id}/>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    } else if (pesquisa !== "") {
        return (
            <div>
                { freelances && freelances.map(freelance => {
                    let nomes = freelance.NomeAnuncio.toLowerCase();
                    if (freelance.NomeAnuncio.startsWith(pesquisa) || nomes.startsWith(pesquisa)) {
                        return (
                            <Link to={'/freelance/detalhes/' + freelance.id}>
                                <FreelanceSummary freelance={freelance} key={freelance.id}/>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    } else if (areaTrabalho !== "") {
        return (
            <div>
                { freelances && freelances.map(freelance => {
                    if (freelance.AreaTrabalho == areaTrabalho) {
                        return (
                            <Link to={'/freelance/detalhes/' + freelance.id}>
                                <FreelanceSummary freelance={freelance} key={freelance.id}/>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    }
};



export default ListaFreelance