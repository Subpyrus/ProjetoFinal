import React from 'react';
import '../../App.css';
import FormCreateProjetoTextos from "./FormCreateProjetoTextos";
import Back from "../../Imgs/back.svg";
import Text from "../../Imgs/text.svg";
import Link from "../../Imgs/link.svg";

const TamanhoMaximo = 20971520; //bytes
const TiposAceites = 'image/x-png, image/png, image/jpg, image/jpeg';
const arrayTiposAceites = TiposAceites.split(",").map((item) => {
    return item.trim()
});

class FormCreateProjeto2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            campos: []
        };
        this.addTexto = this.addTexto.bind(this);
    }

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

    adicionarImagem = () => {
        document.getElementById('AddImagem').click();
    };

    escolhaImagem = event => {
        //console.log(event.target.files);
        /*this.setState({
            ficheiros: event.target.files[0]
        });*/
        //imageBase64Data
        let currentFile = event.target.files[0];
        const verificar = this.verificarFicheiro(currentFile);
        if (verificar) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                //console.log(reader.result);
                this.props.handleChange("imagem", reader.result, currentFile);
            }, false);

            //console.log(this.props.verificacaoFicheiros);
            reader.readAsDataURL(currentFile);
            //console.log(this.state.ficheirosEnviar);
        }
    };

    addTexto() {
        //console.log("texto", FormCreateProjetoTextos);
        this.props.handleChange("texto1", FormCreateProjetoTextos);
    }

    escrito = (input, numero) => e => {
        //console.log(e.target.value);
        //console.log(numero);
        this.props.handleChange("texto2", e.target.value, numero)
    };

    apagar = (tipo, valor, refChild) => {
        //console.log(tipo);
        //console.log(valor);
        this.props.handleApagar(tipo, valor, refChild);
    };

    render() {
        const {valores} = this.props;
        return (
            <div className="row col-12 justify-content-center m-0 pt-5">
                <div className="col-lg-3 mb-3">
                    <span className="btn-flat but_Adicionar_arquivo text-center mb-3"
                          onClick={() => this.adicionarImagem()}>Enviar Imagem</span>
                    <input type="file" hidden id="AddImagem" onChange={this.escolhaImagem}
                           multiple={false}/>
                    <span className="btn-flat but_Adicionar_arquivo text-center mb-3"
                          onClick={this.addTexto}>Texto</span>
                    <div className="explicacaoCriarProjeto">
                        <span  className="mb-2">Carrega num dos botões para escolheres o que pretendes inserir nas fases do teu projeto.</span>
                        <span className="mb-2"><b>1. Enviar imagem</b>: Permite submeter uma imagem.</span>
                        <span><b>2. Texto</b>: Permite que escrevas o que pretenderes. Este não pode ser formatado.</span>
                    </div>
                </div>
                <div className="col-lg-9 mb-5 area_PreVisualizar text-center p-3 p-lg-5">
                    {valores.verificacaoFicheirosFases !== false ?
                        valores.ficheirosAmostraFases && valores.ficheirosAmostraFases.map((ficheiro, index) => {
                            if (ficheiro.Tipo == "imagem") {
                                return (
                                    <span>
                                        <img src={ficheiro.Ficheiro} style={{width: "100%"}}/>
                                        <button
                                            className="btn btnIn mt-2 mb-2"
                                            type="button"
                                            id="BtnApagar"
                                            onClick={() => this.apagar(ficheiro.Tipo, index, ficheiro.RefChild)}>
                                            APAGAR
                                        </button>
                                    </span>
                                );
                            } else if (ficheiro.Tipo == "texto"){
                                //console.log("aqui");
                                const Campo = ficheiro.Ficheiro;
                                return(
                                    <span>
                                        <Campo key={index} index={index} tipo={ficheiro.Tipo} escreve={[this.escrito, index, valores.ficheirosEnviarFases[index]]}/>
                                        <button
                                            className="btn btnIn mt-2 mb-2 mr-1"
                                            type="button"
                                            id="BtnApagar"
                                            onClick={() => this.apagar(ficheiro.Tipo, index)}>
                                            APAGAR
                                        </button>
                                    </span>
                                )
                            }
                        })
                        :
                        <span>
                            <h1 className="titulo_NovoProjeto">FASES DO PROJETO</h1>
                            <span className="titulo_SubtituloProjeto">Aqui podes criar a linha temporal com as fases do teu projeto</span>
                            <div className="row justify-content-center mt-5">
                                <span className="col-2 icones_botoes_NovoProjeto">
                                    <img src={Back} style={{width: "40%", transform: "rotate(90deg)"}}/>
                                    <span className="btn btn-flat botoes_NovoProjeto"
                                          onClick={() => this.adicionarImagem()}>Enviar Imagens</span>
                                </span>
                                <span className="col-2 icones_botoes_NovoProjeto">
                                    <img src={Text} style={{width: "40%"}}/>
                                    <span className="btn btn-flat botoes_NovoProjeto"
                                          onClick={this.addTexto}>Texto</span>
                                </span>
                            </div>
                        </span>
                    }
                </div>
            </div>
        );
    }

}

export default FormCreateProjeto2;