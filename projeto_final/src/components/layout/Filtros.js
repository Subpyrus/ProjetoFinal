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
        this.setState({[input]: e.target.value});
        console.log(this.state);
    };

    render() {
        console.log(this.state.pagina);
        return (
            <div className="filtros row col-12 m-0 p-0 justify-content-center">
                <div className="row col-12 m-0 p-0 justify-content-center">
                    <span className="col-2 item_Filtro">
                        <select
                            className="aparece"
                            onChange={this.handleChange('AreaTrabalho')}
                        >
                            <option value="" disabled selected>Área de Trabalho</option>
                            <option value="Mango">Mango</option>
                            <option value="Orange">Orange</option>
                            <option value="Apple">Apple</option>
                        </select>
                    </span>
                        <span className="col-2 item_Filtro">
                        <select
                            className="aparece"
                            onChange={this.handleChange('Localizacao')}
                        >
                            <option value="" disabled selected>Localização</option>
                            <option value="Mango">Mango</option>
                            <option value="Orange">Orange</option>
                            <option value="Apple">Apple</option>
                        </select>
                    </span>
                    {this.state.pagina == "projeto" ?
                    <span className="col-2 item_Filtro">
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
                        <span className="col-2 item_Filtro">
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
                        <span className="col-3 item_Filtro2">
                        <div className="input-field">
                            <input
                                id="Pesquisa"
                                type="search"
                                className="validate"
                                onChange={this.handleChange('Orcamento')}
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