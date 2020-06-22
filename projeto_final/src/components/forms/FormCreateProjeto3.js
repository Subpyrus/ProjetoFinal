import React from 'react';
import '../../App.css';
import Back from "../../Imgs/back.svg";

const TamanhoMaximo = 20971520; //bytes
const TiposAceites = 'image/x-png, image/png, image/jpg, image/jpeg';
const arrayTiposAceites = TiposAceites.split(",").map((item) => {
    return item.trim()
});

class FormCreateProjeto3 extends React.Component{

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
                    <span>Visualização da capa</span>
                    <span className="btn-flat but_Adicionar_arquivo text-center mb-3 mt-2"
                          onClick={() => this.adicionarImagem()}>Enviar arquivos</span>
                    <input type="file" hidden id="AddImagem" onChange={this.escolhaImagem}
                           multiple={false}/>
                    <div className="explicacaoCriarProjeto">
                        <span  className="mb-2">Carrega num dos botões para escolheres o que pretendes inserir no teu Projeto.</span>
                        <span className="mb-2"><b>1. Enviar arquivos</b>: Permite submeter imagens, áudios e vídeos.</span>
                        <span><b>2. Texto</b>: Permite que escrevas o que pretenderes. Este não pode ser formatado.</span>
                    </div>
                </div>
                <div className="col-lg-9 mb-5 area_PreVisualizar text-center p-3 p-lg-5">
                    {valores.verificacaoFicheirosCapa !== false ?
                        valores.ficheirosAmostraCapa && valores.ficheirosAmostraCapa.map((ficheiro, index) => {
                            //console.log(ficheiro);
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
                        })
                        :
                        <span>
                            <h1 className="titulo_NovoProjeto">Capa do Projeto</h1>
                            <span className="titulo_SubtituloProjeto">Usa uma imagem que cative os outros utilizadores</span>
                            <div className="row justify-content-center mt-5">
                                <span className="col-4 icones_botoes_NovoProjeto">
                                    <button
                                        className="btn btnIn mb-2"
                                        type="button"
                                        id="BtnApagar"
                                        onClick={() => this.adicionarImagem()}>
                                        Carregar imagem
                                    </button>
                                </span>
                            </div>
                        </span>
                    }
                </div>
            </div>
        );
    }
}

export default FormCreateProjeto3;