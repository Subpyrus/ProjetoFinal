import React from 'react';
import {Link} from "react-router-dom";
import Seta from "../../Imgs/Seta1.svg";
import Seta2 from "../../Imgs/Seta2.svg";
import Perfil from '../../Imgs/defaults/p1.png';
import { connect } from 'react-redux'
import  { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

const EmpregosDetalhes = (props) => {
    const login = "Off";
    const { job } = props;
    if (job) {
        return (
            <div>
                <div className="container-fluid Body_Detalhes_Empregos">
                    <div className="row col-12 m-0 justify-content-center">
                        <span className={login == "Off" ? "col-lg-10 col-sm-12 mt-4 ml-4 p-0" : "col-10 mt-4 ml-3"}>
                            <Link to="/empregos" style={{color:"inherit",textDecoration:"inherit"}}>
                                <img src={Seta} style={{width:"25px", height:"auto"}} className="mr-1"/><span className="voltar">VOLTAR</span>
                            </Link>
                        </span>
                        <div className={login == "Off" ? "col-sm-12 col-lg-7 mt-4 mb-sm-2 mb-lg-4 p-0" : "col-lg-7 mt-4 mb-sm-2 mb-lg-4 ml-5"}>
                            <div className="Main_Detalhes_Emprego">
                                <div className="col-12 row justify-content-center">
                                     <span className="col-10 pl-5 Emprego_List_Info_Princ">
                                        <span className="mb-1 Titulo_Emprego_List"> {job.NomeAnuncio}</span>
                                        <span className="mb-1 Info_Emprego_List">Localização: {job.Localizacao}</span>
                                        <span className="mb-1 Info_Emprego_List">{job.TipoTrabalho}</span>
                                        <span className="mb-3 Info_Emprego_List">Salário: {job.Salario} €</span>
                                        <span className="Area_Emprego">{job.AreaTrabalho}</span>
                                    </span>
                                        <span className="col-2 Emprego_List_Info_Princ_Final">
                                        <span className="Info_Emprego_List">{moment(job.ListingTime.toDate()).calendar()}</span>
                                    </span>
                                </div>
                                <hr className="hr col-11"/>
                                <div className="col-12 row justify-content-center">
                                     <span className="col-12 pl-5 Emprego_List_Info_Princ mb-3">
                                        <span className="mb-1 Titulo_Emprego_List">Descrição do trabalho:</span>
                                        <span className="mb-1 Info_Emprego_Detalhes">{job.Descricao}</span>   
                                    </span>
                                    <span className="col-12 pl-5 Emprego_List_Info_Princ mb-3">
                                        <span className="mb-1 Titulo_Emprego_List">Requisitos:</span>
                                        <span className="mb-1 Info_Emprego_Detalhes">{job.Requisitos}</span>
                                    </span>
                                    <span className="col-12 pl-5 Emprego_List_Info_Princ">
                                        <span className="mb-1 Titulo_Emprego_List">Benefícios:</span>
                                        <span className="mb-1 Info_Emprego_Detalhes">{job.Beneficios}</span>
                                    </span>
                                </div>
                                <hr className="hr col-11"/>
                                <div className="col-12 row justify-content-center m-0">
                                    <Link to="/registo">
                                        <button className="Emprego_Det_But_Criar_Conta mt-2 mb-2">Queres-te candidatar? Inscreve-te já na Hinamic!<img src={Seta2} className="ml-2" style={{width:"15px", height:"auto", verticalAlign: "text-bottom"}}/></button>
                                    </Link>
                                </div>
                                {/*<div className="col-12 row justify-content-center m-0">

                                        <button className="Emprego_Det_But_Criar_Conta mt-2 mb-2">Envia a tua Candidatura!<img src={Seta2} className="ml-2" style={{width:"15px", height:"auto", verticalAlign: "text-bottom"}}/></button>

                                </div>*/}
                            </div>
                        </div>
                        {/*style={login == "Off" ? {display : "none"} : {display: "block"}}*/}
                        <div className="col-sm-6 col-lg-3 mt-4 ml-4 mb-5 d-lg-block d-none">
                            <div className="Empregos_box_Utilizador px-3 py-4">
                                <div className="text-center">
                                    <img className="mb-2" alt="" src={Perfil} width="100px" height="100px"/>
                                    <h2 className="Empregos_Nome_Utilizador">Nome Utilizador</h2>
                                </div>
                                <span className="Empregos_Criar_Conta_Texto">
                                     Área de Trabalho<br/>
                                    E-mail: pedroaudiovisual00@gmail.com
                                </span>
                                <Link to="/registo">
                                    <button className="Emprego_But_Visitar_Perfil mt-2">Ver Perfil</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }else {
        return (
            <div className="container center">
                <p>Loading job...</p>
            </div>
        )
    }    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const jobs = state.firestore.data.jobs;
    const job = jobs ? jobs[id] : null
    return  {
        job : job
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'jobs' }
    ])
)(EmpregosDetalhes)