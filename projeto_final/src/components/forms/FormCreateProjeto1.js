import React from 'react';
import '../../App';

const TamanhoMaximo = 20971520; //bytes
const TiposAceites = 'image/x-png, image/png, image/jpg, image/jpeg';
const arrayTiposAceites = TiposAceites.split(",").map((item) => {
    return item.trim()
});

class FormCreateProjeto1 extends React.Component{

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
        console.log(event.target.files);
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

    apagar = valor => {
        this.props.handleApagar(valor);
    };

    render() {
        const {valores} = this.props;
        return (
            <div className="row col-12 justify-content-center m-0 pt-5">
                <div className="col-lg-3 mb-3 mb-lg-0">
                    <span className="btn-flat but_Adicionar_arquivo text-center mb-lg-3"
                          onClick={() => this.adicionarImagem()}>Enviar arquivos</span>
                    <input type="file" hidden id="AddImagem" onChange={this.escolhaImagem}
                           multiple={false}/>
                    <span className="btn-flat but_Adicionar_arquivo text-center mb-lg-3">Texto</span>
                    <span className="btn-flat but_Adicionar_arquivo text-center mb-lg-3">Link</span>
                </div>
                <div className="col-lg-9 mb-5 area_PreVisualizar text-center p-3 p-lg-5">
                    {valores.verificacaoFicheiros !== false ?
                        valores.ficheirosAmostra && valores.ficheirosAmostra.map((imagens, index) => {
                            console.log(index);
                            return (
                                <span>
                                    <img src={imagens} style={{width: "100%"}}/>
                                    <button
                                        className="btn btnIn mt-2 mb-2"
                                        type="button"
                                        id="BtnApagar"
                                        onClick={() => this.apagar(index)}>
                                        APAGAR
                                    </button>
                                </span>
                            );
                        })
                        :
                        <span>
                            <h1 className="titulo_NovoProjeto">NOVO PROJETO</h1>
                            <span className="titulo_SubtituloProjeto">Começa já a construir o teu projeto</span>
                            <div className="row justify-content-center mt-5">
                                <span className="col-2">Enviar Projeto</span>
                                <span className="col-2">Texto</span>
                                <span className="col-2">Link</span>
                            </div>
                        </span>
                    }
                </div>
            </div>
        );
    }

}

export default FormCreateProjeto1;