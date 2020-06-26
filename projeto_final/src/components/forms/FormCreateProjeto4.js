import React from 'react';
import '../../App.css';

class FormCreateProjeto4 extends React.Component{

    render() {
        const {valores} = this.props;
        return (
            <div className="row col-12 justify-content-center m-0 pt-5">
                <div className="col-lg-11 mb-5 area_PreVisualizar text-center p-3 p-lg-5">
                    <div className="text-left">
                        <h4>Informações Gerais do Projeto</h4>
                        <span>Estas informações vão servir para que seja mais fácil encontrarem o teu Projeto. Podes a qualquer momento editá-las.</span>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="nomeProjeto"
                                type="text"
                                className="validate"
                                onChange={this.props.handleChange('nomeProjeto')}
                                defaultValue={valores.nomeProjeto}
                            />
                            <label htmlFor="nomeProjeto" className={valores.nomeProjeto != "" ? "active" : ""}>Nome do Projeto</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="areaTrabalhoProjeto"
                                type="text"
                                className="validate"
                                onChange={this.props.handleChange('areaTrabalhoProjeto')}
                                defaultValue={valores.areaTrabalhoProjeto}
                            />
                            <label htmlFor="areaTrabalhoProjeto" className={valores.areaTrabalhoProjeto != "" ? "active" : ""}>Àreas de trabalho</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="ferramentasUsadas"
                                type="text"
                                className="validate"
                                onChange={this.props.handleChange('ferramentasUsadas')}
                                defaultValue={valores.ferramentasUsadas}
                            />
                            <label htmlFor="ferramentasUsadas" className={valores.ferramentasUsadas != "" ? "active" : ""}>Ferramentas Usadas</label>
                        </div>
                    </div>
                    <div className="input-field col s12">
                        <select
                            className="aparece"
                            onChange={this.props.handleChange('equipa')}
                            defaultValue={valores.equipa}
                        >
                            <option value="" disabled selected>Equipa</option>
                            <option value="Mango">Mango</option>
                            <option value="Orange">Orange</option>
                            <option value="Apple">Apple</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <textarea
                            id="descricaoProjeto"
                            className="materialize-textarea"
                            onChange={this.props.handleChange('descricaoProjeto')}
                            defaultValue={valores.descricaoProjeto}
                        />
                            <label htmlFor="descricaoProjeto" className={valores.descricaoProjeto != "" ? "active" : ""}>Descrição do Projeto</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="EmpresasProjeto"
                                type="text"
                                className="validate"
                                onChange={this.props.handleChange('EmpresasProjeto')}
                                defaultValue={valores.EmpresasProjeto}
                            />
                            <label htmlFor="EmpresasProjeto" className={valores.EmpresasProjeto != "" ? "active" : ""}>Empresas, marcas, etc</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormCreateProjeto4;