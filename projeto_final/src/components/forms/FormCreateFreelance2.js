import React from 'react';
import '../../App.css';

class FormCreateFreelance2 extends React.Component{
    estilo = {
        textAlign: "center",
        marginTop: "40px"
    };
    escolhido = {
        opacity: 1
    };

    continuar = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    voltar = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {valores} = this.props;
        return (
            <div>
                <div className="px-5 row Criar_Freelance_Meio_2_Info">
                    <span className="mb-2 Titulo_Emprego_List_2">{valores.NomeAnuncio}</span>
                    <span className="Info_Emprego_List">Orçamento: {valores.Orcamento}€</span>
                    <span className="mb-3 Info_Emprego_List">Data de entrega: {valores.DataEntrega}</span>
                    <span className="row mb-3 pl-3">
                        <span className="Area_Freelance mr-3">{valores.AreaTrabalho}</span>
                    </span>
                    <span className="mb-3 Info_Emprego_List">{valores.NumeroCandidatos} Candidatos</span>
                </div>

                <hr className="line mx-4"/>

                <div className="px-5 row Criar_Freelance_Meio_2_Info">
                    <span className="mb-1 Titulo_Emprego_List_3">Descrição do Projeto</span>
                    <span className="mb-1 Info_Emprego_List_2">{valores.DescricaoTrabalho}</span>
                </div>

                <hr className="line mx-4"/>

                <div className="px-5 row Criar_Freelance_Meio_2_Info">
                    <span className="mb-1 Titulo_Emprego_List_3">Descrição do Projeto</span>
                    <span className="mb-1 Info_Emprego_List_2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </div>

                <div className="px-5 row justify-content-end of">
                    <div className="f">
                        <div className="col s6">
                            <button
                                className="btn btnIn"
                                type="button"
                                id="prevBtn"
                                onClick={this.voltar}>
                                Anterior
                            </button>
                        </div>
                        <div className="col s6">
                            {valores.NomeAnuncio == "" || valores.Orcamento == "" || valores.DataEntrega == "" || valores.NumeroCandidatos == "" || valores.AreaTrabalho == "" || valores.DescricaoTrabalho == "" ?
                                <button
                                    className="btn btnIn"
                                    type="button"
                                    id="nextBtn"
                                    onClick={this.continuar}
                                    disabled
                                >
                                    Publicar
                                </button>
                                :
                                <button
                                    className="btn btnIn"
                                    type="button"
                                    id="nextBtn"
                                    onClick={this.continuar}>
                                    Próximo
                                </button>
                            }
                        </div>
                    </div>
                </div>

                <div style={this.estilo}>
                    <span className="step"/>
                    <span className="step" style={this.escolhido}/>
                </div>
            </div>
        );
    }

}

export default FormCreateFreelance2