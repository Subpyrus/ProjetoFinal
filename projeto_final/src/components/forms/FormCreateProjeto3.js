import React from 'react';
import '../../App.css';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const TamanhoMaximo = 20971520; //bytes
const TiposAceites = 'image/x-png, image/png, image/jpg, image/jpeg';
const minHeight = 600;
const minWidth = 800;
var resultadoImg = false;
const arrayTiposAceites = TiposAceites.split(",").map((item) => {
    return item.trim()
});

class FormCreateProjeto3 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            crop: {
                aspect: 4/3
            },
            imgSrcCriada: null,
            tamanhoCorreto: false
        }
    }

    verificarFicheiro = async (file) => {
        //console.log(file);
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

    /*verificaImagem(file) {
        let reader = new FileReader();
        return new Promise((resolve, reject) => {
        reader.onload = function (e) {
            let img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                let w = this.width;
                let h = this.height;
                if (w >= minWidth && h >= minHeight) {
                    return resolve("Verdadeiro");
                } else {
                    return reject("Falso");
                }
            }
        };
        reader.readAsDataURL(file);
        })
    };*/

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

    apagar = (tipo, valor, refChild) => {
        //console.log(tipo);
        //console.log(valor);
        this.props.handleApagar(tipo, valor, refChild);
        this.setState({tamanhoCorreto: false});
        this.setState({crop: undefined});
        this.setState({crop: {aspect: 4/3}});
        this.setState({croppedImageUrl: undefined});
        this.setState({imgSrcCriada: null});
    };

    //converte o crop em imagem
    base64StringtoFile (base64String, filename) {
        var arr = base64String.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }
        return new File([u8arr], filename, {type: mime})
    }

    //Obtém a extensão da imagem
    extractImageFileExtensionFromBase64 (base64Data) {
        return base64Data.substring('data:image/'.length, base64Data.indexOf(';base64'))
    }

    guardarCapa = (tipo, imagem) => {
        this.setState({tamanhoCorreto: true});
        let imagemConvertida = this.base64StringtoFile(imagem, `Capa.${this.state.imgSrcCriada}`);
        this.props.handleChange(tipo, imagemConvertida)
    };

    handleImageLoaded = (image) => {
        //console.log(image);
        this.imageRef = image
    };
    handleOnCropChange = (crop) => {
        //console.log(crop);
        this.setState({crop});
        //console.log(this.state.crop);
    };
    handleOnCropComplete = (crop) => {
        //console.log(crop);
        this.makeClientCrop(crop);
    };

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
                this.imageRef,
                crop,
                'newFile.jpeg'
            );
            let extensao = this.extractImageFileExtensionFromBase64(this.props.valores.ficheirosAmostraCapa[0].Ficheiro);
            this.setState({ croppedImageUrl, imgSrcCriada: extensao });
            this.props.guardarCorte(croppedImageUrl);
            //console.log(this.state);
            //console.log(extensao);
            //console.log(this.props.valores.imgCortadaMostrar);
        }
    }

    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );
        this.setState({tamanhoCorreto: false});

        return new Promise((resolve, reject) => {
            resolve(canvas.toDataURL('image/jpeg', 1.0));
        });

        /*return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    //reject(new Error('Canvas is empty'));
                    console.error('Canvas is empty');
                    return;
                }
                blob.name = fileName;
                window.URL.revokeObjectURL(this.fileUrl);
                this.fileUrl = window.URL.createObjectURL(blob);
                resolve(this.fileUrl);
            }, 'image/jpeg');
        });*/
    }

    render() {
        const {valores} = this.props;
        const {croppedImageUrl} = this.state;
        return (
            <div className="row col-12 justify-content-center m-0 pt-5">
                {valores.verificacaoFicheirosCapa !== true ?
                <div className="col-lg-3 mb-3">
                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "20px"}}>Visualização da capa</span>
                    <span className="btn-flat but_Adicionar_arquivo text-center mb-3 mt-2"
                          onClick={() => this.adicionarImagem()}>Enviar Imagem</span>
                    <input type="file" hidden id="AddImagem" onChange={this.escolhaImagem}
                           multiple={false}/>
                    <div className="explicacaoCriarProjeto">
                        <span  className="mb-2">Aqui vais adicionar a imagem de capa do teu projeto e <b>lembra-te cores
                            vibrantes mais destaque</b>.</span>
                        <span className="mb-2"><b style={{fontFamily: "'Barlow ExtraBold', sans-serif", color: "#FF8500", fontSize: "18px"}}>OBRIGATÓRIO:</b><br/>- Tamanho da imagem <b>1080 x 1080px</b>;
                            <br/>- Ao fazer a seleção da capa é necessário <b>selecionar até às extremidades da imagem</b>.</span>
                    </div>
                </div>
                    :
                    <div className="col-lg-3 mb-3">
                        <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "20px"}}>Visualização da capa</span>
                        <div className="area_PreVisualizar mb-3 mt-2 justify-content-center">
                            {valores.croppedImageUrl != undefined ?
                                <img style={{maxWidth: "100%", minWidth: "100%", borderRadius: "5px"}} src={croppedImageUrl}/>
                                :
                                //console.log(valores.imgCortadaMostrar)
                                <img style={{maxWidth: "100%", minWidth: "100%", borderRadius: "5px"}} src={valores.imgCortadaMostrar}/>
                            }
                        </div>
                        <div className="explicacaoCriarProjeto">
                           <span  className="mb-2">Aqui vais adicionar a imagem de capa do teu projeto e <b>lembra-te cores
                            vibrantes mais destaque</b>.</span>
                            <span className="mb-2"><b style={{fontFamily: "'Barlow ExtraBold', sans-serif", color: "#FF8500", fontSize: "18px"}}>OBRIGATÓRIO:</b><br/>- Tamanho da imagem <b>1080 x 1080px</b>;
                            <br/>- Ao fazer a seleção da capa é necessário <b>selecionar até às extremidades da imagem</b>.</span>
                        </div>
                    </div>
                }
                <div className="col-lg-9 mb-5 area_PreVisualizar text-center p-3 p-lg-5">
                    {valores.verificacaoFicheirosCapa !== false ?
                        valores.ficheirosAmostraCapa && valores.ficheirosAmostraCapa.map((ficheiro, index) => {
                            //console.log(ficheiro);
                            //console.log(index);
                            //console.log(ficheiro[0]);
                            //console.log(valores.ficheirosAmostra);
                            //console.log(this.state);
                            return (
                                <span className="text-center" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                    <ReactCrop
                                        src={ficheiro.Ficheiro}
                                        style={{maxwidth: "100%"}}
                                        crop={this.state.crop}
                                        onImageLoaded={this.handleImageLoaded}
                                        onChange={this.handleOnCropChange}
                                        onComplete={this.handleOnCropComplete}
                                    />
                                    <span>
                                        <button
                                            className="btn btnIn mt-2 mb-2 mr-1"
                                            type="button"
                                            id="BtnApagar"
                                            onClick={() => this.apagar(ficheiro.Tipo, index, ficheiro.RefChild)}>
                                            APAGAR
                                        </button>
                                        {croppedImageUrl && valores.imgCortadaMostrar != "" && this.state.tamanhoCorreto === false ?
                                        <button
                                            className="btn btnIn mt-2 mb-2 ml-1"
                                            type="button"
                                            id="BtnApagar"
                                            onClick={() => this.guardarCapa("imagem2", croppedImageUrl)}>
                                            GUARDAR IMAGEM
                                        </button>
                                            :
                                            this.state.tamanhoCorreto === false ?
                                            <button
                                                className="btn btnIn mt-2 mb-2 ml-1"
                                                type="button"
                                                id="BtnApagar"
                                                disabled>
                                                GUARDAR IMAGEM
                                            </button>
                                                :
                                                <button
                                                    className="btn btnIn mt-2 mb-2 ml-1"
                                                    type="button"
                                                    id="BtnApagar"
                                                    disabled>
                                                    IMAGEM GUARDADA
                                                </button>
                                        }
                                    </span>
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
                    {valores.ficheirosAmostraCapa && valores.ficheirosAmostraCapa.length > 0 ?
                        <div className="row mb-0 justify-content-end pr-3" style={{paddingRight: "10.5px"}}>
                            <button
                                className="btn btnIn mr-3"
                                type="button"
                                id="prevBtn"
                                onClick={this.props.prevStep}
                            >
                                Anterior
                            </button>
                            {croppedImageUrl && valores.ficheirosEnviarCapa != "" ?
                            <button
                                className="btn btnIn"
                                type="button"
                                id="nextBtn"
                                onClick={this.props.nextStep}>
                                Próximo
                            </button>
                                :
                                <button
                                    className="btn btnIn"
                                    type="button"
                                    id="nextBtn"
                                    onClick={this.props.nextStep}
                                    disabled>
                                    Próximo
                                </button>
                            }
                        </div>
                        :
                        <div className="row justify-content-end pr-3 d-none" style={{paddingRight: "10.5px"}}>
                            <button
                                className="btn btnIn mr-3"
                                type="button"
                                id="nextBtn"
                                onClick={this.prevStep}
                                disabled>
                                Anterior
                            </button>
                            <button
                                className="btn btnIn"
                                type="button"
                                id="nextBtn"
                                onClick={this.nextStep}>
                                Próximo
                            </button>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default FormCreateProjeto3;