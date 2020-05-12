import React from 'react';
import '../../App.css';
import {Link} from "react-router-dom";
import Seta from '../../Imgs/Seta1.svg';
import Seta2 from '../../Imgs/Seta2.svg';

class FreelanceDetalhes extends React.Component {
    estilo = {
        color: "inherit",
        textDecoration: "inherit"
    };
    rodar = {
        width: "25px",
        height: "auto",
    };
    rodar2 = {
        width: "15px",
        height: "auto",
        verticalAlign: "text-bottom"
    };
    render() {
        return (
            <div>
                <div className="container-fluid Body_Detalhes_Empregos">
                    <div className="row col-12 mb-0 justify-content-center">
                        <span className="col-10 mt-4 ml-3">
                            <Link to="/freelance" style={this.estilo}>
                                <img src={Seta} style={this.rodar2} className="mr-1"/><span className="voltar">VOLTAR</span>
                            </Link>
                        </span>
                        <div className="col-lg-7 mt-4 mb-sm-2 mb-lg-4 ml-5">
                            <div className="Main_Detalhes_Emprego">
                                <div className="col-12 row justify-content-center">
                                     <span className="col-10 pl-4 Emprego_List_Info_Princ">
                                        <span className="mb-1 Titulo_Emprego_List">Edição de video musical</span>
                                        <span className="mb-1 Info_Emprego_List">Orçamento: 400€</span>
                                        <span className="mb-3 Info_Emprego_List">Data de entrega: 30/04/2020</span>
                                        <span className="row mb-0 pl-3">
                                            <span className="Area_Emprego mr-3">Design Gráfico</span>
                                            <span className="Area_Emprego mr-3">Edição de vídeo</span>
                                            <span className="Area_Emprego">Ilustração</span>
                                        </span>
                                    </span>
                                    <span className="col-2 Emprego_List_Info_Princ_Final">
                                        <span className="Info_Emprego_List">3 de Março</span>
                                    </span>
                                </div>

                                <hr className="hr col-11"/>

                                <div className="col-12 row justify-content-center">
                                     <span className="col-12 pl-4 Emprego_List_Info_Princ">
                                        <span className="mb-1 Titulo_Emprego_List">Descrição do trabalho:</span>
                                        <span className="mb-1 Info_Emprego_Detalhes">Pretendemos um vídeo bastante dinâmico e com ritmo, que cative as pessoas. A música pode ficar à sua escolha.</span>
                                    </span>
                                </div>

                                <hr className="hr col-11"/>

                                <div className="col-12 row justify-content-center">
                                    <Link to="/registo">
                                        <button className="Emprego_Det_But_Criar_Conta mt-3 ">Queres-te candidatar? Inscreve-te já na Hinamic!<img src={Seta2} className="ml-2" style={this.rodar}/></button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mt-4 ml-4 mb-5">
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
    }

}

export default FreelanceDetalhes