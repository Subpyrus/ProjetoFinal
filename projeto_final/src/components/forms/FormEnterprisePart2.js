import React from 'react';
import {Link} from "react-router-dom";

class FormEnterprisePart2 extends React.Component {
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
        const {valores, handleChange} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <label>Distrito</label>
                        <select
                            className="aparece"
                            onChange={handleChange('Distrito')}
                            defaultValue={valores.Distrito}
                        >
                            <option value="" disabled selected>Escolhe o tua Distrito</option>
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
                    <div className="col-12 col-md-6">
                        <label>Área de trabalho</label>
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
                    <div className="input-field col-12 col-md-6">
                        <input
                            id="last_name"
                            type="text"
                            className="validate"
                            onChange={handleChange('Ocupacao')}
                            defaultValue={valores.Ocupacao}
                        />
                        <label htmlFor="last_name" className={valores.Ocupacao != "" ? "active col-12" : "col-12"}>Ocupação</label>
                    </div>
                </div>
                <div className="row justify-content-end of">
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
                        {valores.Pais == "" || valores.Localidade == "" || valores.AreaTrabalho == "" || valores.Ocupacao == "" ?
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
                    <span className="step"/>
                    <span className="step" style={this.escolhido}/>
                    <span className="step"/>
                </div>
                <div className="text-center mt-3">
                            <span>Já tens conta?
                                <Link to="/entrar"
                                      className="text-decoration-none text-dark font-weight-bold">
                                <ins> Entra aqui!</ins>
                            </Link>
                                </span>
                </div>
            </div>
        )
    }
}

export default FormEnterprisePart2;