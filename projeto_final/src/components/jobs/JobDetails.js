import React from 'react';
import {Link} from "react-router-dom";

class EmpregosDetalhes extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid Body_Detalhes_Empregos">
                    <div className="row col-12 mb-0 justify-content-center">
                        <div className="col-lg-7 mt-5 mb-sm-2 mb-lg-4 ml-5">
                            <div className="Main_Detalhes_Emprego">

                                <div className="col-12 row justify-content-center">
                                     <span className="col-10 pl-5 Emprego_List_Info_Princ">
                                        <span className="mb-1 Titulo_Emprego_List">Web Designer UI/UX</span>
                                        <span className="mb-1 Info_Emprego_List">Localização: Santo Ovídeo, Vila Nova de Gaia</span>
                                        <span className="mb-1 Info_Emprego_List">Tempo Inteiro</span>
                                        <span className="mb-3 Info_Emprego_List">Salário: 700€ - 900€</span>
                                        <span className="Area_Emprego">Design Gráfico</span>
                                    </span>
                                        <span className="col-2 Emprego_List_Info_Princ_Final">
                                        <span className="Info_Emprego_List">3 de Março</span>
                                    </span>
                                </div>

                                <hr className="hr col-11"/>

                                <div className="col-12 row justify-content-center">
                                     <span className="col-12 pl-5 Emprego_List_Info_Princ mb-3">
                                        <span className="mb-1 Titulo_Emprego_List">Descrição do trabalho:</span>
                                        <span className="mb-1 Info_Emprego_Detalhes">Esta função é desempenhada por uma equipa de 5 elementos. Todas as sextas-feiras existem meetings para se observar o progresso do trabalho. A equipa trabalha também com programadores da empresa.</span>
                                    </span>
                                    <span className="col-12 pl-5 Emprego_List_Info_Princ mb-3">
                                        <span className="mb-1 Titulo_Emprego_List">Requisitos:</span>
                                        <span className="mb-1 Info_Emprego_Detalhes">- Experiência com HMTL e CSS</span>
                                        <span className="mb-1 Info_Emprego_Detalhes">- Experiência com JS</span>
                                        <span className="mb-1 Info_Emprego_Detalhes">- Experiência com React</span>
                                    </span>
                                    <span className="col-12 pl-5 Emprego_List_Info_Princ">
                                        <span className="mb-1 Titulo_Emprego_List">Benefícios:</span>
                                        <span className="mb-1 Info_Emprego_Detalhes">- Custos dos transportes cobertos pela empresa;</span>
                                        <span className="mb-1 Info_Emprego_Detalhes">- Horário Flexível;</span>
                                        <span className="mb-1 Info_Emprego_Detalhes">- Ambiente de trabalho criativo e colaborativo;</span>
                                    </span>
                                </div>

                                <hr className="hr col-11"/>

                                <div className="col-12 row justify-content-center">
                                    <Link to="/registo">
                                        <button className="Emprego_Det_But_Criar_Conta mt-3 ">Queres-te candidatar? Inscreve-te já na Hinamic!</button>
                                    </Link>
                                </div>

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

export default EmpregosDetalhes