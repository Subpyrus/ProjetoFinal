import React from 'react';
import '../../App.css';

class FormCreateFreelance1 extends React.Component{
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

    render() {
        const {valores, handleChange} = this.props;
        return (
            <div className="px-5">
                <div className="row">
                    <div className="input-field col-12">
                        <input
                            id="Nome"
                            type="text"
                            className="validate"
                            onChange={handleChange('NomeAnuncio')}
                            defaultValue={valores.NomeAnuncio}
                        />
                        <label htmlFor="Nome" className={valores.NomeAnuncio != "" ? "active col-12" : "col-12"}>Nome do Anúncio</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col-12 col-md-6">
                        <input
                            id="Orcamento"
                            type="number"
                            className="validate"
                            onChange={handleChange('Orcamento')}
                            defaultValue={valores.Orcamento}
                        />
                        <label htmlFor="Orcamento" className={valores.Orcamento != "" ? "active col-12" : "col-12"}>Orçamento</label>
                    </div>
                    <div className="input-field col-12 col-md-6">
                        <input
                            id="DataEntrega"
                            type="date"
                            className="validate"
                            onChange={handleChange('DataEntrega')}
                            defaultValue={valores.DataEntrega}
                        />
                        <label htmlFor="DataEntrega" className={valores.DataEntrega != "" ? "active col-12" : "col-12"}>Data de Entrega</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col-12 col-md-6">
                        <input
                            id="NumeroCandidatos"
                            type="number"
                            className="validate"
                            onChange={handleChange('NumeroCandidatos')}
                            defaultValue={valores.NumeroCandidatos}
                        />
                        <label htmlFor="NumeroCandidatos" className={valores.NumeroCandidatos != "" ? "active col-12" : "col-12"}>Número máximo de Candidatos</label>
                    </div>
                    <div className="input-field col-12 col-md-6">
                        <select
                            className="aparece"
                            onChange={handleChange('AreaTrabalho')}
                            defaultValue={valores.AreaTrabalho}
                        >
                            <option value="" disabled selected>Escolhe a tua Área de Trabalho</option>
                            <option value="3DAnimacao">3D e Animação</option>
                            <option value="ArtesPerfomativas">Artes Performativas</option>
                            <option value="ArtesPlasticas">Artes Plásticas</option>
                            <option value="CinemaVideo">Cinema e Vídeo</option>
                            <option value="DesenhoIlustracao">Desenho e Ilustração</option>
                            <option value="DesignGrafico">Design Gráfico</option>
                            <option value="DesignProdutos">Design de produtos</option>
                            <option value="Fotografia">Fotografia</option>
                            <option value="Musica">Música</option>
                            <option value="Pintura">Pintura</option>
                            <option value="Programacao">Programação</option>
                            <option value="OutrosTrabalhos">Outros Trabalhos</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col-12">
                        <textarea
                            id="Descricao"
                            className="materialize-textarea"
                            onChange={handleChange('DescricaoTrabalho')}
                            defaultValue={valores.DescricaoTrabalho}
                        />
                        <label htmlFor="Descricao" className={valores.DescricaoTrabalho != "" ? "active col-12" : "col-12"}>Descrição do Trabalho</label>
                    </div>
                </div>
                <div className="row justify-content-end of">
                    <div className="f">
                        <div className="col s6">
                            {valores.NomeAnuncio == "" || valores.Orcamento == "" || valores.DataEntrega == "" || valores.NumeroCandidatos == "" || valores.AreaTrabalho == "" || valores.DescricaoTrabalho == "" ?
                                <button
                                    className="btn btnIn"
                                    type="button"
                                    id="nextBtn"
                                    onClick={this.continuar}
                                    disabled>
                                    Próximo
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
                    <span className="step" style={this.escolhido}/>
                    <span className="step"/>
                </div>
            </div>
        );
    }

}

export default FormCreateFreelance1