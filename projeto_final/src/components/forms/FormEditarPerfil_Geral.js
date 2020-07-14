import React from 'react';
import '../../App.css';
import Imagem from '../../Imgs/Perfil.jpg';
import { connect } from 'react-redux'
import {storage} from "../../config/fbConfig";

const TamanhoMaximo = 10485760  ; //bytes
const TiposAceites = 'image/x-png, image/png, image/jpg, image/jpeg';
const Tipo2 = 'application/pdf';
const arrayTiposAceites = TiposAceites.split(",").map((item) => {
    return item.trim()
});
class FormEditarPerfil_Geral extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            imagem: ""
        }
    }

    getImage = (image) => {
        storage.ref('files').child(`${image}`).getDownloadURL().then((url) => {
            if (this.state.imagem === "") {
                this.setState({imagem: url})
            }
        })
    };

    adicionarImagem = () => {
        document.getElementById('AddImagem').click();
    };

    verificarFicheiro = (file) => {
        if (file && file.size > TamanhoMaximo) {
            alert("Este ficheiro não é permitido. " + file.size + " bytes é demasiado grande.");
            return false
        } else if (!arrayTiposAceites.includes(file.type)) {
            alert("Este ficheiro não é permitido. Por favor seleciona uma imagem.");
            return false
        } else {
            return true
        }
    };

    verificaPDF = (file) => {
        if (file && file.size > TamanhoMaximo) {
            alert("Este ficheiro não é permitido. " + file.size + " bytes é demasiado grande.");
            return false
        } else if (file.type !== Tipo2) {
            alert("Este ficheiro não é permitido. Por favor seleciona um PDF.");
            return false
        } else {
            return true
        }
    };

    escolhaImagem = event => {
        //console.log(event.target.files);
        /*this.setState({
            ficheiros: event.target.files[0]
        });*/
        //imageBase64Data
        let currentFile = event.target.files[0];
        //console.log(currentFile.type);
        const verificar = this.verificarFicheiro(currentFile);
        if (verificar) {
            if (currentFile.type == "image/x-png" || currentFile.type == "image/png" || currentFile.type == "image/jpg" || currentFile.type == "image/jpeg") {
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                    //console.log(reader.result, currentFile);
                    this.props.handleImagem(reader.result, currentFile);
                }, false);
                reader.readAsDataURL(currentFile);
            }

            //console.log(this.props.verificacaoFicheiros);
            //console.log(this.state.ficheirosEnviar);
        }
    };

    escolhaCV = event => {
        let currentFile = event.target.files[0];
        //console.log(currentFile.type);
        const verificar = this.verificaPDF(currentFile);
        if (verificar) {
            if (currentFile.type === "application/pdf") {
                //console.log(reader.result);
                this.props.handleCV(currentFile);
            }
        }
    };

    render() {
        const {valores, handleChange, handleSubmit,authError,authSuccess} = this.props;
        this.getImage(valores.imagemPerfil);
        console.log(valores)
        return (
            <div className="row col-12 mx-auto">
                <span className="col-12 mt-3">
                    <h3 className="Editar_Perfil_Titulo">Informações gerais</h3>
                </span>
                <div className="col-sm-12 col-md-3 mt-2" style={{textAlign: "center"}}>
                    {valores.imagemMostra === "" ?
                        <img src={this.state.imagem} alt="" style={{maxWidth: "100%", height: "auto", borderRadius: "10px"}}/>
                        :
                        <img src={valores.imagemMostra} alt="" style={{maxWidth: "100%", height: "auto", borderRadius: "10px"}}/>
                    }
                    <span className="btn-flat mt-1" onClick={() => this.adicionarImagem()} style={{fontFamily: "Barlow Semibold, sans-serif"}}>Alterar Imagem</span>
                    <input type="file" hidden id="AddImagem" onChange={this.escolhaImagem}
                           multiple={false}/>
                </div>
                <div className="col-sm-12 col-md-9 mb-4 mt-2 editar_perfil_Geral">
                    <div className="row">
                        <div className="input-field col-12 col-md-6">
                            <input
                                id="PrimeiroNome"
                                type="text"
                                className="validate"
                                onChange={handleChange('primeiroNome')}
                                defaultValue={valores.primeiroNome}
                            />
                            <label htmlFor="PrimeiroNome" className={valores.primeiroNome != "" ? "col-12 col-md-6 active" : "col-12 col-md-6"}>Primeiro Nome</label>
                        </div>
                        <div className="input-field col s12 m6">
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
                            <label htmlFor="DataNascimento" className={valores.dataNascimento != "" ? "active" : ""}></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            {valores.Distrito !== "" ?
                            <select
                                className="aparece"
                                onChange={handleChange('Distrito')}
                                defaultValue={valores.Distrito}
                            >
                                <option value="" disabled>Escolhe o teu Distrito</option>
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
                                :
                                <select
                                    className="aparece"
                                    onChange={handleChange('Distrito')}
                                    defaultValue={valores.Distrito}
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
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            {valores.areaTrabalho !== "" ?
                                <select
                                    className="aparece"
                                    onChange={handleChange('areaTrabalho')}
                                    defaultValue={valores.areaTrabalho}
                                >
                                    <option value="" disabled>Escolhe a tua Área de Trabalho</option>
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
                                :
                                <select
                                    className="aparece"
                                    onChange={handleChange('areaTrabalho')}
                                    defaultValue={valores.areaTrabalho}
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
                            }
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
                                maxLength="400"
                            />
                            <label htmlFor="Sobre" className={valores.sobre != "" ? "active" : ""}>Sobre Si</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="Curriculo"
                                type="file"
                                className="validate"
                                onChange={this.escolhaCV}
                                multiple={false}
                            />
                            <label htmlFor="Curriculo" className={valores.dataNascimento != "" ? "active" : ""}></label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        authSuccess: state.auth.authSuccess,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(FormEditarPerfil_Geral)