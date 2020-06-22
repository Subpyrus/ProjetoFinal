import React from 'react';
import '../../App.css';
import FormCreateProjetoTextos from './FormCreateProjetoTextos';
import Back from '../../Imgs/back.svg';
import Text from '../../Imgs/text.svg';
import Link from '../../Imgs/link.svg';

const TamanhoMaximo = 20971520; //bytes
const TiposAceites = 'image/x-png, image/png, image/jpg, image/jpeg';
const arrayTiposAceites = TiposAceites.split(",").map((item) => {
    return item.trim()
});

class FormCreateProjeto1 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            campos: []
        };
        this.addTexto = this.addTexto.bind(this);
        this.addLink = this.addLink.bind(this);
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

    addLink() {
        //console.log("texto", FormCreateProjetoTextos);
        this.props.handleChange("link1", FormCreateProjetoTextos);
    }

    escrito = (input, numero) => e => {
        //console.log(e.target.value);
        //console.log(numero);
        this.props.handleChange("texto2", e.target.value, numero)
    };

    escritoLink = (input, numero) => e => {
        //console.log(e.target.value);
        //console.log(numero);
        this.props.handleChange("link2", e.target.value, numero)
    };

    apagar = (tipo, valor) => {
        console.log(tipo);
        console.log(valor);
        this.props.handleApagar(tipo, valor);
    };

    render() {
        const {valores} = this.props;
        return (
            <div className="row col-12 justify-content-center m-0 pt-5">
                <div className="col-lg-3 mb-3">
                    <span className="btn-flat but_Adicionar_arquivo text-center mb-3"
                          onClick={() => this.adicionarImagem()}>Enviar arquivos</span>
                    <input type="file" hidden id="AddImagem" onChange={this.escolhaImagem}
                           multiple={false}/>
                    <span className="btn-flat but_Adicionar_arquivo text-center mb-3"
                           onClick={this.addTexto}>Texto</span>
                    <span className="btn-flat but_Adicionar_arquivo text-center mb-3"
                          onClick={this.addLink}>Link</span>
                    <div className="explicacaoCriarProjeto">
                        <span  className="mb-2">Carrega num dos botões para escolheres o que pretendes inserir no teu Projeto.</span>
                        <span className="mb-2"><b>1. Enviar arquivos</b>: Permite submeter imagens, áudios e vídeos.</span>
                        <span className="mb-2"><b>2. Texto</b>: Permite que escrevas o que pretenderes. Este não pode ser formatado.</span>
                        <span><b>3. Links</b>: Permite partilhar um link. Por exemplo, se tiveres um vídeo no Youtube ou no Vimeo podes colocar o link aqui diretamente em vez de enviares um arquivo.</span>
                    </div>
                </div>
                <div className="col-lg-9 mb-5 area_PreVisualizar text-center p-3 p-lg-5">
                    {valores.verificacaoFicheiros !== false ?
                        valores.ficheirosAmostra && valores.ficheirosAmostra.map((ficheiro, index) => {
                            //console.log(ficheiro);
                            if (ficheiro[0] == "imagem") {
                                //console.log(index);
                                //console.log(ficheiro[0]);
                                //console.log(valores.ficheirosAmostra);
                                return (
                                    <span>
                                        <img src={ficheiro[1]} style={{width: "100%"}}/>
                                        <button
                                            className="btn btnIn mt-2 mb-2"
                                            type="button"
                                            id="BtnApagar"
                                            onClick={() => this.apagar(ficheiro[0], index)}>
                                            APAGAR
                                        </button>
                                    </span>
                                );
                            } else if (ficheiro[0] == "texto"){
                                //console.log("aqui");
                                const Campo = ficheiro[1];
                                return(
                                    <span>
                                        <Campo key={index} index={index} tipo={ficheiro[0]} escreve={[this.escrito, index]}/>
                                        <button
                                            className="btn btnIn mt-2 mb-2 mr-1"
                                            type="button"
                                            id="BtnApagar"
                                            onClick={() => this.apagar(ficheiro[0], index)}>
                                            APAGAR
                                        </button>
                                    </span>
                                )
                            } else if (ficheiro[0] == "link"){
                                //console.log("aqui");
                                const Campo = ficheiro[1];
                                return(
                                    <span>
                                        <Campo key={index} index={index} tipo={ficheiro[0]} escreve={[this.escritoLink, index]}/>
                                        <button
                                            className="btn btnIn mt-2 mb-2"
                                            type="button"
                                            id="BtnApagar"
                                            onClick={() => this.apagar(ficheiro[0], index)}>
                                            APAGAR
                                        </button>
                                    </span>
                                )
                            }
                        })
                        :
                        <span>
                            <h1 className="titulo_NovoProjeto">NOVO PROJETO</h1>
                            <span className="titulo_SubtituloProjeto">Começa já a construir o teu projeto</span>
                            <div className="row justify-content-center mt-5">
                                <span className="col-2 icones_botoes_NovoProjeto">
                                    <img src={Back} style={{width: "40%", transform: "rotate(90deg)"}}/>
                                    <span className="btn btn-flat botoes_NovoProjeto"
                                          onClick={() => this.adicionarImagem()}>Enviar Arquivos</span>
                                </span>
                                <span className="col-2 icones_botoes_NovoProjeto">
                                    <img src={Text} style={{width: "40%"}}/>
                                    <span className="btn btn-flat botoes_NovoProjeto"
                                          onClick={this.addTexto}>Texto</span>
                                </span>
                                <span className="col-2 icones_botoes_NovoProjeto">
                                    <img src={Link} style={{width: "40%"}}/>
                                    <span className="btn btn-flat botoes_NovoProjeto"
                                          onClick={this.addLink}>Link</span>
                                </span>
                            </div>
                        </span>
                    }
                </div>
            </div>
        );
    }

}

export default FormCreateProjeto1;