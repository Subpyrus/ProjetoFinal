import React from 'react';
import {Link} from 'react-router-dom';
import FreelanceSummary from "./freelanceSummary";

const ListaFreelance = ({ freelances, pesquisa, areaTrabalho, distrito, orcamento, users }) =>  {
    if (pesquisa == "" && areaTrabalho == "" && distrito == "") {
        return (
            <div>
                { freelances && freelances.map(freelance => {
                    return(
                        <Link to={'/freelance/detalhes/' + freelance.id} freelanceID={freelance.id} style={{color: "inherit", textDecoration: "none"}}>
                            <FreelanceSummary freelance={freelance} key={freelance.id} users={users}/>
                        </Link>
                    )
                })}
            </div>
        )
    }else if (pesquisa !== "" && areaTrabalho !== "" && distrito !== ""){
        return (
            <div>
                { freelances && freelances.map(freelance => {
                    let nomes = freelance.NomeAnuncio.toLowerCase();
                    if (freelance.NomeAnuncio.startsWith(pesquisa) && freelance.AreaTrabalho == areaTrabalho && freelance.distritoCriador == distrito || nomes.startsWith(pesquisa) && freelance.AreaTrabalho == areaTrabalho && freelance.distritoCriador == distrito) {
                        return (
                            <Link to={'/freelance/detalhes/' + freelance.id} freelanceID={freelance.id} style={{color: "inherit", textDecoration: "none"}}>
                                <FreelanceSummary freelance={freelance} key={freelance.id} users={users}/>
                            </Link>
                        )
                    }
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
                            <Link to={'/freelance/detalhes/' + freelance.id} freelanceID={freelance.id} style={{color: "inherit", textDecoration: "none"}}>
                                <FreelanceSummary freelance={freelance} key={freelance.id} users={users}/>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    } else if (pesquisa !== "" && distrito !== "") {
        return (
            <div>
                { freelances && freelances.map(freelance => {
                    let nomes = freelance.NomeAnuncio.toLowerCase();
                    if (freelance.NomeAnuncio.startsWith(pesquisa) && freelance.distritoCriador == distrito || nomes.startsWith(pesquisa) && freelance.distritoCriador == distrito) {
                        return (
                            <Link to={'/freelance/detalhes/' + freelance.id} freelanceID={freelance.id} style={{color: "inherit", textDecoration: "none"}}>
                                <FreelanceSummary freelance={freelance} key={freelance.id} users={users}/>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    } else if (distrito !== "" && areaTrabalho !== "") {
        return (
            <div>
                { freelances && freelances.map(freelance => {
                    if (freelance.distritoCriador == distrito && freelance.AreaTrabalho == areaTrabalho) {
                        return (
                            <Link to={'/freelance/detalhes/' + freelance.id} freelanceID={freelance.id} style={{color: "inherit", textDecoration: "none"}}>
                                <FreelanceSummary freelance={freelance} key={freelance.id} users={users}/>
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
                            <Link to={'/freelance/detalhes/' + freelance.id} freelanceID={freelance.id} style={{color: "inherit", textDecoration: "none"}}>
                                <FreelanceSummary freelance={freelance} key={freelance.id} users={users}/>
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
                            <Link to={'/freelance/detalhes/' + freelance.id} freelanceID={freelance.id} style={{color: "inherit", textDecoration: "none"}}>
                                <FreelanceSummary freelance={freelance} key={freelance.id} users={users}/>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    } else if (distrito !== "") {
        return (
            <div>
                { freelances && freelances.map(freelance => {
                    if (freelance.distritoCriador == distrito) {
                        return (
                            <Link to={'/freelance/detalhes/' + freelance.id} freelanceID={freelance.id} style={{color: "inherit", textDecoration: "none"}}>
                                <FreelanceSummary freelance={freelance} key={freelance.id} users={users}/>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    }
};



export default ListaFreelance