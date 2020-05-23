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
                    <div className="input-field col s12">
                        <input
                            id="Nome"
                            type="text"
                            className="validate"
                            onChange={handleChange('NomeAnuncio')}
                            defaultValue={valores.NomeAnuncio}
                        />
                        <label htmlFor="Nome" className={valores.NomeAnuncio != "" ? "active" : ""}>Nome do Anúncio</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="Salario"
                            type="text"
                            className="validate"
                            onChange={handleChange('Salario')}
                            defaultValue={valores.Salario}
                        />
                        <label htmlFor="Salario" className={valores.Salario != "" ? "active" : ""}>Salario</label>
                    </div>
                    <div className="input-field col s6">
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
                    <div className="input-field col s6">
                        <input
                            id="NumeroCandidatos"
                            type="text"
                            className="validate"
                            onChange={handleChange('NumeroCandidatos')}
                            defaultValue={valores.NumeroCandidatos}
                        />
                        <label htmlFor="NumeroCandidatos" className={valores.NumeroCandidatos != "" ? "active" : ""}>Número máximo de Candidatos</label>
                    </div>
                    <div className="input-field col s6">
                        <select
                            className="aparece"
                            onChange={handleChange('AreaTrabalho')}
                            defaultValue={valores.AreaTrabalho}
                        >
                            <option value="" disabled selected>Escolhe a tua Área de Trabalho</option>
                            <option value="Mango">Mango</option>
                            <option value="Orange">Orange</option>
                            <option value="Apple">Apple</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea
                            id="Descricao"
                            className="materialize-textarea"
                            onChange={handleChange('DescricaoTrabalho')}
                            defaultValue={valores.DescricaoTrabalho}
                        />
                        <label htmlFor="Descricao" className={valores.DescricaoTrabalho != "" ? "active" : ""}>Descrição do Trabalho</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea
                            id="Localizacao"
                            className="materialize-textarea"
                            onChange={handleChange('Localizacao')}
                            defaultValue={valores.Localizacao}
                        />
                        <label htmlFor="Localizacao" className={valores.Localizacao != "" ? "active" : ""}>Localização</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea
                            id="Requisitos"
                            className="materialize-textarea"
                            onChange={handleChange('Requisitos')}
                            defaultValue={valores.Requisitos}
                        />
                        <label htmlFor="Requisitos" className={valores.Requisitos != "" ? "active" : ""}>Requisitos</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea
                            id="Beneficios"
                            className="materialize-textarea"
                            onChange={handleChange('Beneficios')}
                            defaultValue={valores.Beneficios}
                        />
                        <label htmlFor="beneficios" className={valores.Beneficios != "" ? "active" : ""}>Benefícios</label>
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