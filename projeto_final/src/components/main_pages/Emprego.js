import React from 'react';
import Filtros from '../layout/Filtros';
import '../../App.css'
import {Link} from 'react-router-dom';
import Imagem from '../../Imgs/Logo_Ubi.jpg';

class Empregos extends React.Component{
    render () {
        return (
            <div>
                <Filtros/>
                <div className="container-fluid Body_Empregos">
                    <div className="row col-12 mb-0 justify-content-center">
                        <div className="col-sm-12 col-lg-7 mt-5 mb-sm-2 mb-lg-4 ml-5">
                            <div className="Emprego_Listado row">
                                <span className="col-3 mr-0 pr-0 Emprego_List_Info_Princ_Imagem">
                                    <img src={Imagem} className="Empregos_List_Imagem"/>
                                </span>
                                <span className="col-7 ml-0 pl-0 Emprego_List_Info_Princ">
                                    <span className="mb-1 Titulo_Emprego_List">Web Designer UI/UX</span>
                                    <span className="mb-1 Info_Emprego_List">Localização: Santo Ovídeo, Vila Nova de Gaia</span>
                                    <span className="mb-3 Info_Emprego_List">Tempo Inteiro</span>
                                    <span className="Area_Emprego">Design Gráfico</span>
                                </span>
                                <span className="col-2 Emprego_List_Info_Princ_Final">
                                    <span className="Info_Emprego_List">3 de Março</span>
                                </span>
                            </div>

                            <div className="Emprego_Listado row">
                                <span className="col-3 mr-0 pr-0 Emprego_List_Info_Princ_Imagem">
                                    <img src={Imagem} className="Empregos_List_Imagem"/>
                                </span>
                                <span className="col-7 ml-0 pl-0 Emprego_List_Info_Princ">
                                    <span className="mb-1 Titulo_Emprego_List">Web Designer UI/UX</span>
                                    <span className="mb-1 Info_Emprego_List">Localização: Santo Ovídeo, Vila Nova de Gaia</span>
                                    <span className="mb-3 Info_Emprego_List">Tempo Inteiro</span>
                                    <span className="Area_Emprego">Design Gráfico</span>
                                </span>
                                <span className="col-2 Emprego_List_Info_Princ_Final">
                                    <span className="Info_Emprego_List">3 de Março</span>
                                </span>
                            </div>

                            <div className="Emprego_Listado row">
                                <span className="col-3 mr-0 pr-0 Emprego_List_Info_Princ_Imagem">
                                    <img src={Imagem} className="Empregos_List_Imagem"/>
                                </span>
                                <span className="col-7 ml-0 pl-0 Emprego_List_Info_Princ">
                                    <span className="mb-1 Titulo_Emprego_List">Web Designer UI/UX</span>
                                    <span className="mb-1 Info_Emprego_List">Localização: Santo Ovídeo, Vila Nova de Gaia</span>
                                    <span className="mb-3 Info_Emprego_List">Tempo Inteiro</span>
                                    <span className="Area_Emprego">Design Gráfico</span>
                                </span>
                                <span className="col-2 Emprego_List_Info_Princ_Final">
                                    <span className="Info_Emprego_List">3 de Março</span>
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mt-5 ml-4 mb-5">
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
        )
    }
}

export default Empregos