import React from 'react';
import '../../App.css';

class Filtros extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pagina: this.props.pagina
        }
    }

    handleChange = input => e => {
        //console.log(e.target.value);
        if (input == "pesquisa"){
            this.props.search(e.target.value);
        } else if (input == "AreaTrabalho") {
            this.props.areaTrabalho(e.target.value);
        } else if (input == "Localizacao") {
            this.props.distrito(e.target.value);
        }
        //console.log(this.state);
    };

    render() {
        //console.log(this.state.pagina);
        return (
            <div className="filtros row col-12 m-0 p-0 justify-content-center">
                <div className="row col-12 m-0 p-0 justify-content-center pt-2 pt-lg-0">
                    <span className="col-6 col-lg-2 item_Filtro">
                        <select
                            className="aparece"
                            onChange={this.handleChange('AreaTrabalho')}
                        >
                            <option value="" disabled selected>Área de Trabalho</option>
                            <option value="">Nenhuma</option>
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
                    </span>
                        <span className="col-6 col-lg-2 item_Filtro">
                        <select
                            className="aparece"
                            onChange={this.handleChange('Localizacao')}
                        >
                            <option value="" disabled selected>Distrito</option>
                            <option value="">Nenhum</option>
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
                    </span>
                    {this.state.pagina == "projeto" || this.state.pagina == "criador" ?
                    <span className="col-6 col-lg-2 item_Filtro">
                        <select
                            className="aparece"
                            onChange={this.handleChange('Destaques')}
                        >
                            <option value="" disabled selected>Destaques</option>
                            <option value="Mango">Mango</option>
                            <option value="Orange">Orange</option>
                            <option value="Apple">Apple</option>
                        </select>
                    </span>
                        :
                        <span className="col-6 col-lg-2 item_Filtro">
                            <select
                                className="aparece"
                                onChange={this.handleChange('Destaques')}
                            >
                                <option value="" disabled selected>Orçamento</option>
                                <option value="Mango">Mango</option>
                                <option value="Orange">Orange</option>
                                <option value="Apple">Apple</option>
                            </select>
                        </span>
                    }
                        <span className="col-6 col-lg-3 item_Filtro2">
                        <div className="input-field">
                            <input
                                id="Pesquisa"
                                type="search"
                                className="validate"
                                onChange={this.handleChange("pesquisa")}
                            />
                            <label htmlFor="Pesquisa">Pesquisa</label>
                        </div>
                    </span>
                </div>
            </div>
        )
    }
}

export default Filtros