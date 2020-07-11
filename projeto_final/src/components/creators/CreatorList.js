import React from 'react';
import '../../App.css';
import CreatorSummary from './CreatorSummary';

const CreatorList = ({utilizadores, pesquisa, areaTrabalho, distrito}) => {
    if (pesquisa == "" && areaTrabalho == "" && distrito == "") {
        return (
            <div className="row col-12 m-0 p-0">
                {utilizadores && utilizadores.map(dados => {
                    if (dados.TipoUtilizador === 1){
                        return (
                            <CreatorSummary creators={dados} key={dados.id}/>
                        )
                    }
                })}
            </div>
        );
    } else if (pesquisa !== "" && areaTrabalho !== "" && distrito !== ""){
        return (
            <div className="row col-12 m-0 p-0">
                {utilizadores && utilizadores.map(dados => {
                    let nomeUtilizador = `${dados.FirstName} ${dados.LastName}`;
                    let nome = nomeUtilizador.toLowerCase();
                    if (nomeUtilizador.startsWith(pesquisa) && dados.AreaTrabalho == areaTrabalho && dados.Local == distrito || nome.startsWith(pesquisa) && dados.AreaTrabalho == areaTrabalho && dados.Local == distrito){
                        if (dados.TipoUtilizador === 1) {
                            return (
                                <CreatorSummary creators={dados} key={dados.id}/>
                            )
                        }
                    }
                })}
            </div>
        );
    } else if (pesquisa !== "" && areaTrabalho !== "") {
        return (
            <div className="row col-12 m-0 p-0">
                {utilizadores && utilizadores.map(dados => {
                    let nomeUtilizador = `${dados.FirstName} ${dados.LastName}`;
                    let nome = nomeUtilizador.toLowerCase();
                    if (nomeUtilizador.startsWith(pesquisa) && dados.AreaTrabalho == areaTrabalho || nome.startsWith(pesquisa) && dados.AreaTrabalho == areaTrabalho){
                        if (dados.TipoUtilizador === 1) {
                            return (
                                <CreatorSummary creators={dados} key={dados.id}/>
                            )
                        }
                    }
                })}
            </div>
        );
    } else if (pesquisa !== "" && distrito !== ""){
        return (
            <div className="row col-12 m-0 p-0">
                {utilizadores && utilizadores.map(dados => {
                    let nomeUtilizador = `${dados.FirstName} ${dados.LastName}`;
                    let nome = nomeUtilizador.toLowerCase();
                    if (nomeUtilizador.startsWith(pesquisa) && dados.Local == distrito || nome.startsWith(pesquisa) && dados.Local == distrito) {
                        if (dados.TipoUtilizador === 1) {
                            return (
                                <CreatorSummary creators={dados} key={dados.id}/>
                            )
                        }
                    }
                })}
            </div>
        );
    } else if (areaTrabalho !== "" && distrito !== ""){
        return (
            <div className="row col-12 m-0 p-0">
                {utilizadores && utilizadores.map(dados => {
                    if (dados.AreaTrabalho == areaTrabalho && dados.Local == distrito) {
                        if (dados.TipoUtilizador === 1) {
                            return (
                                <CreatorSummary creators={dados} key={dados.id}/>
                            )
                        }
                    }
                })}
            </div>
        );
    } else if (pesquisa !== "") {
        return (
            <div className="row col-12 m-0 p-0">
                {utilizadores && utilizadores.map(dados => {
                    let nomeUtilizador = `${dados.FirstName} ${dados.LastName}`;
                    let nome = nomeUtilizador.toLowerCase();
                    if (nomeUtilizador.startsWith(pesquisa) || nome.startsWith(pesquisa)){
                        if (dados.TipoUtilizador === 1) {
                            return (
                                <CreatorSummary creators={dados} key={dados.id}/>
                            )
                        }
                    }
                })}
            </div>
        );
    } else if (areaTrabalho !== "") {
        return (
            <div className="row col-12 m-0 p-0">
                {utilizadores && utilizadores.map(dados => {
                    if (dados.AreaTrabalho == areaTrabalho) {
                        if (dados.TipoUtilizador === 1) {
                            return (
                                <CreatorSummary creators={dados} key={dados.id}/>
                            )
                        }
                    }
                })}
            </div>
        );
    } else if (distrito !== "") {
        return (
            <div className="row col-12 m-0 p-0">
                {utilizadores && utilizadores.map(dados => {
                    if (dados.Local == distrito) {
                        if (dados.TipoUtilizador === 1) {
                            return (
                                <CreatorSummary creators={dados} key={dados.id}/>
                            )
                        }
                    }
                })}
            </div>
        );
    }
};

export default CreatorList;