import React from 'react';
import '../../App.css';

class FormCreateEmprego1 extends React.Component{
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
                            id="Salario"
                            type="number"
                            className="validate"
                            onChange={handleChange('Salario')}
                            defaultValue={valores.Salario}
                        />
                        <label htmlFor="Salario" className={valores.Salario != "" ? "active col-12" : "col-12"}>Salario</label>
                    </div>
                    <div className="input-field col-12 col-md-6">
                        <select
                            className="aparece"
                            onChange={handleChange('TipoTrabalho')}
                            defaultValue={valores.TipoTrabalho}
                        >
                            <option value="" disabled selected>Tipo de Trabalho</option>
                            <option value="FullTime">Full-Time</option>
                            <option value="PartTime">Part-Time</option>
                        </select>
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
                            onChange={handleChange('Descricao')}
                            defaultValue={valores.Descricao}
                        />
                        <label htmlFor="Descricao" className={valores.Descricao != "" ? "active col-12" : "col-12"}>Descrição do Trabalho</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col-12">
                        <select
                            className="aparece"
                            onChange={handleChange('Localizacao')}
                            defaultValue={valores.Localizacao}
                        >
                            <option value="" disabled selected>Escolhe o teu Distrito</option>
                            <option value="Aveiro">Aveiro</option>
                            <option value="Beja">Beja</option>
                            <option value="Braga">Braga</option>
                            <option value="Bragança">Bragança</option>
                            <option value="CasteloBranco">Castelo Branco</option>
                            <option value="Coimbra">Coimbra</option>
                            <option value="Evora">Évora</option>
                            <option value="Faro">Faro</option>
                            <option value="Guarda">Guarda</option>
                            <option value="Leiria">Leiria</option>
                            <option value="Lisboa">Lisboa</option>
                            <option value="Portalegre">Portalegre</option>
                            <option value="Porto">Porto</option>
                            <option value="Santarem">Santarém</option>
                            <option value="Setubal">Setúbal</option>
                            <option value="VianaCastelo">Viana do Castelo</option>
                            <option value="VilaReal">Vila Real</option>
                            <option value="Viseu">Viseu</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col-12">
                        <textarea
                            id="Requisitos"
                            className="materialize-textarea"
                            onChange={handleChange('Requisitos')}
                            defaultValue={valores.Requisitos}
                        />
                        <label htmlFor="Requisitos" className={valores.Requisitos != "" ? "active col-12" : "col-12"}>Requisitos</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col-12">
                        <textarea
                            id="Beneficios"
                            className="materialize-textarea"
                            onChange={handleChange('Beneficios')}
                            defaultValue={valores.Beneficios}
                        />
                        <label htmlFor="Beneficios" className={valores.Beneficios != "" ? "active col-12" : "col-12"}>Benefícios</label>
                    </div>
                </div>
                <div className="row justify-content-end of">
                    <div className="f">
                        <div className="col s6">
                            {valores.NomeAnuncio == "" || valores.Salario == "" || valores.TipoTrabalho == "" || valores.NumeroCandidatos == "" || valores.AreaTrabalho == "" || valores.Localizacao == "" || valores.Requisitos == "" || valores.Beneficios == "" ?
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

export default FormCreateEmprego1