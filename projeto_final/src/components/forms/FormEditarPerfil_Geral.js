import React from 'react';
import '../../App.css';
import Imagem from '../../Imgs/Perfil.jpg';

class FormEditarPerfil_Geral extends React.Component {

    render() {
        const {valores, handleChange} = this.props;
        return (
            <div className="row col-12">
                <span className="col-12 mt-3">
                    <h3 className="Editar_Perfil_Titulo">Informações gerais</h3>
                </span>
                <div className="col-sm-12 col-md-3 mt-2" style={{textAlign: "center"}}>
                    <img src={Imagem} alt="" style={{maxWidth: "100%", height: "auto", borderRadius: "10px"}}/>
                    <span className="btn-flat mt-1" style={{fontFamily: "Barlow Semibold, sans-serif"}}>Mudar Foto de perfil</span>
                </div>
                <div className="col-sm-12 col-md-9 mb-4 mt-2" style={{borderLeft: "#ec9400 solid 1px"}}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                id="PrimeiroNome"
                                type="text"
                                className="validate"
                                onChange={handleChange('primeiroNome')}
                                defaultValue={valores.primeiroNome}
                            />
                            <label htmlFor="PrimeiroNome" className={valores.primeiroNome != "" ? "active" : ""}>Primeiro Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="UltimoNome"
                                type="text"
                                className="validate"
                                onChange={handleChange('ultimoNome')}
                                defaultValue={valores.ultimoNome}
                            />
                            <label htmlFor="UltimoNome" className={valores.ultimoNome != "" ? "active" : ""}>Último Nome</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="DataNascimento"
                                type="date"
                                className="validate"
                                onChange={handleChange('dataNascimento')}
                                defaultValue={valores.dataNascimento}
                            />
                            <label htmlFor="DataNascimento" className={valores.dataNascimento != "" ? "active" : ""}>Data de Nascimento</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                id="Conselho"
                                type="text"
                                className="validate"
                                onChange={handleChange('conselho')}
                                defaultValue={valores.conselho}
                            />
                            <label htmlFor="Conselho" className={valores.conselho != "" ? "active" : ""}>Conselho</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="Cidade"
                                type="text"
                                className="validate"
                                onChange={handleChange('localidade')}
                                defaultValue={valores.localidade}
                            />
                            <label htmlFor="Cidade" className={valores.localidade != "" ? "active" : ""}>Localidade/Cidade</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <select
                                className="aparece"
                                onChange={handleChange('areaTrabalho')}
                                defaultValue={valores.areaTrabalho}
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
                            <input
                                id="Ocupacao"
                                type="text"
                                className="validate"
                                onChange={handleChange('ocupacao')}
                                defaultValue={valores.ocupacao}
                            />
                            <label htmlFor="Ocupacao" className={valores.ocupacao != "" ? "active" : ""}>Ocupação</label>
                            <span className="helper-text">Ex: Web Designer</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea
                                id="Sobre"
                                className="materialize-textarea"
                                onChange={handleChange('sobre')}
                                defaultValue={valores.sobre}
                            />
                            <label htmlFor="Sobre" className={valores.sobre != "" ? "active" : ""}>Sobre Si</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormEditarPerfil_Geral