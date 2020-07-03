import React from 'react';
import '../../App.css';
import {Link} from "react-router-dom";
import Seta from '../../Imgs/Seta1.svg';
import Seta2 from '../../Imgs/Seta2.svg';
import { connect } from 'react-redux'
import  { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const FreelanceDetalhes = (props) => {
    const login = "Off";
    const { freelance } = props;
    if(freelance) {
        const data = new Date(freelance.ListingTime.seconds*1000);
        return (
            <div>
                <div className="container-fluid Body_Detalhes_Empregos">
                    <div className="row col-12 mb-0 justify-content-center">
                        <span className={login == "Off" ? "col-9 mt-4 ml-4" : "col-10 mt-4 ml-3"}>
                            <Link to="/freelance" style={{color:"inherit",textDecoration:"inherit"}}>
                                <img src={Seta} style={{width:"25px", height:"auto"}} className="mr-1"/><span className="voltar">VOLTAR</span>
                            </Link>
                        </span>
                        <div className={login == "Off" ? "col-9 mt-4 mb-sm-2 mb-lg-4 ml-4" : "col-lg-7 mt-4 mb-sm-2 mb-lg-4 ml-5"}>
                            <div className="Main_Detalhes_Emprego">
                                <div className="col-12 row justify-content-center">
                                     <span className="col-10 pl-4 Emprego_List_Info_Princ">
                                        <span className="mb-1 Titulo_Emprego_List">{freelance.NomeAnuncio}</span>
                                        <span className="mb-1 Info_Emprego_List">Orçamento: {freelance.Orcamento} €</span>
                                        <span className="mb-3 Info_Emprego_List">Data de entrega: {freelance.DataEntrega} </span>
                                        <span className="Area_Emprego">{freelance.AreaTrabalho}</span>
                                    </span>
                                    <span className="col-2 Emprego_List_Info_Princ_Final">
                                        <span className="Info_Emprego_List">{data.getUTCDate()}/{data.getUTCMonth()}/{data.getUTCFullYear()}</span>
                                    </span>
                                </div>

                                <hr className="hr col-11"/>

                                <div className="col-12 row justify-content-center">
                                     <span className="col-12 pl-4 Emprego_List_Info_Princ">
                                        <span className="mb-1 Titulo_Emprego_List">Descrição do trabalho:</span>
                                        <span className="mb-1 Info_Emprego_Detalhes">{freelance.DescricaoTrabalho}</span>
                                    </span>
                                </div>

                                <hr className="hr col-11"/>

                                <div className="col-12 row justify-content-center">
                                    <Link to="/registo">
                                        <button className="Emprego_Det_But_Criar_Conta mt-3 ">Queres-te candidatar? Inscreve-te já na Hinamic!<img src={Seta2} className="ml-2" style={{width:"15px", height:"auto", verticalAlign: "text-bottom"}}/></button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mt-4 ml-4 mb-5" style={login == "Off" ? {display : "none"} : {display: "block"}}>
                            <div className="Empregos_Criar_Conta px-3 py-4">
                                <h2 className="Empregos_Criar_Conta_Titulo">Ainda não fazes parte da nossa colmeia?</h2>
                                <span className="Empregos_Criar_Conta_Texto">
                                    Oferecemos-te um espaço <br/> para promoveres o <br/> teu trabalho criativo.
                                </span>
                                <Link to="/registo">
                                    <button className="Emprego_But_Criar_Conta mt-2">Criar Perfil</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else {
        return (
            <div className="container center">
                <p>Loading freelance...</p>
            </div>
        )
    }    
        
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const freelances = state.firestore.data.freelances;
    const freelance = freelances ? freelances[id] : null
    return  {
        freelance : freelance
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'freelances' }
    ])
)(FreelanceDetalhes)