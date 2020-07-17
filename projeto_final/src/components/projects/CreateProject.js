import React from 'react';
import '../../App.css';
import FormCreateProjeto1 from '../forms/FormCreateProjeto1';
import FormCreateProjeto2 from '../forms/FormCreateProjeto2';
import FormCreateProjeto3 from '../forms/FormCreateProjeto3';
import FormCreateProjeto4 from '../forms/FormCreateProjeto4';
import {storage} from '../../config/fbConfig';

class CreateProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Step: 1,
            verificacaoFicheiros: false,
            ficheirosAmostra: [],
            ficheirosEnviar: [],
            verificacaoFicheirosFases: false,
            ficheirosAmostraFases: [],
            ficheirosEnviarFases: [],
            verificacaoFicheirosCapa: false,
            ficheirosAmostraCapa: [],
            ficheirosEnviarCapa: [],
            imgCortadaMostrar: "",
            nomeProjeto: "",
            areaTrabalhoProjeto: "",
            ferramentasUsadas: "",
            descricaoProjeto: "",
            EmpresasProjeto: ""
        };

    }

    //Mudança de campos
    handleChange = (tipo, ficheiro, enviar) => {
        if (tipo == "imagem" || tipo == "video" || tipo == "audio") {

            let d = new Date();
            let timestamp = d.getTime();
            let newName = enviar.name + "_project_" + timestamp;

            let uploadTask = storage.ref(`files/${newName}`).put(enviar);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log(error);
                },
                () => {
                    storage.ref("files").child(newName).getDownloadURL().then(url => {});
                }
            )
            let arrayEnvio = {
                Tipo: tipo,
                Ficheiro: ficheiro,
                RefChild: newName
            };
            let arrayUpload = {
                Tipo: tipo,
                Ficheiro: newName
            };
            this.state.ficheirosEnviar.push(arrayUpload);
            this.state.ficheirosAmostra.push(arrayEnvio);
            this.setState({
                verificacaoFicheiros: true
            });
        } else if (tipo == "texto1" || tipo == "texto2") {
            if (tipo == "texto1") {
                let arrayEnvio = {
                    Tipo: "texto",
                    Ficheiro: ficheiro
                };
                let arrayUpload = {
                    Tipo: "texto",
                    Ficheiro: ""
                };
                this.state.ficheirosEnviar.push(arrayUpload);
                this.state.ficheirosAmostra.push(arrayEnvio);
                this.setState({
                    verificacaoFicheiros: true
                });
            } else {
                let arrayUpload = {
                    Tipo: "texto",
                    Ficheiro: ficheiro
                };
                this.state.ficheirosEnviar.splice(enviar, 1, arrayUpload);
                this.setState({
                    verificacaoFicheiros: true
                });
            }
        } else if (tipo == "link1" || tipo == "link2") {
            if (tipo == "link1") {
                let arrayEnvio = {
                    Tipo: "link",
                    Ficheiro: ficheiro
                };
                let arrayUpload = {
                    Tipo: "link",
                    Ficheiro: ""
                };
                //alterar o envio acima para só enviar a info
                this.state.ficheirosAmostra.push(arrayEnvio);
                this.state.ficheirosEnviar.push(arrayUpload);
                this.setState({
                    verificacaoFicheiros: true
                });
            } else {
                let arrayUpload = {
                    Tipo: "link",
                    Ficheiro: ficheiro
                };
                this.state.ficheirosEnviar.splice(enviar, 1, arrayUpload);
                this.setState({
                    verificacaoFicheiros: true
                });
            }
        }
    };

    handleApagar = (tipo, valor, refChild) => {

        if (tipo == "imagem" || tipo == "video" || tipo == "audio") {
            
            var desertRef = storage.ref('files').child(refChild);

            // Delete the file
            desertRef.delete().then(function() {

            }).catch((err) => {
                console.log(err)
            });
            this.state.ficheirosEnviar.splice(valor, 1);
            this.state.ficheirosAmostra.splice(valor, 1);

            if (this.state.ficheirosAmostra.length > 0) {
                this.setState({
                    verificacaoFicheiros: true
                });
            } else {
                this.setState({
                    verificacaoFicheiros: false
                });
            }
        }
        else if (tipo == "texto" || tipo == "link") {
            this.state.ficheirosAmostra.splice(valor, 1);
            this.state.ficheirosEnviar.splice(valor, 1);
            if (this.state.ficheirosAmostra.length > 0) {
                this.setState({
                    verificacaoFicheiros: true
                });
            } else {
                this.setState({
                    verificacaoFicheiros: false
                });
            }
        }
    };

    //Mudança de campos Fases
    handleChangeFases = (tipo, ficheiro, enviar) => {
        if (tipo == "imagem") {

            let d = new Date();
            let timestamp = d.getTime();
            let newName = enviar.name + "_fases_" + timestamp;

            let uploadTask = storage.ref(`files/${newName}`).put(enviar);
            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log(error);
                },
                () => {
                    storage.ref("files").child(newName).getDownloadURL().then(url => {});
                }
            )

            let arrayEnvio = {
                Tipo: tipo,
                Ficheiro: ficheiro,
                RefChild: newName
            };
            let arrayUpload = {
                Tipo: tipo,
                Ficheiro: newName
            };
            this.state.ficheirosEnviarFases.push(arrayUpload);
            this.state.ficheirosAmostraFases.push(arrayEnvio);
            this.setState({
                verificacaoFicheirosFases: true
            });
        } else if (tipo == "texto1" || tipo == "texto2") {
            if (tipo == "texto1") {
                let arrayEnvio = {
                    Tipo: "texto",
                    Ficheiro: ficheiro
                };
                let arrayUpload = {
                    Tipo: "texto",
                    Ficheiro: ""
                };
                this.state.ficheirosEnviarFases.push(arrayUpload);
                this.state.ficheirosAmostraFases.push(arrayEnvio);
                this.setState({
                    verificacaoFicheirosFases: true
                });
            } else {
                let arrayUpload = {
                    Tipo: "texto",
                    Ficheiro: ficheiro
                };
                this.state.ficheirosEnviarFases.splice(enviar, 1, arrayUpload);
                this.setState({
                    verificacaoFicheirosFases: true
                });
            }
        }
    };

    handleApagarFases = (tipo, valor, refChild) => {
        if (tipo == "imagem") {

            var desertRef = storage.ref('files').child(refChild);

            // Delete the file
            desertRef.delete().then(function() {

            }).catch((err) => {
                console.log(err)
            });
            this.state.ficheirosEnviar.splice(valor, 1);
            this.state.ficheirosAmostra.splice(valor, 1);

            if (this.state.ficheirosAmostra.length > 0) {
                this.setState({
                    verificacaoFicheiros: true
                });
            } else {
                this.setState({
                    verificacaoFicheiros: false
                });
            }

            this.state.ficheirosEnviarFases.splice(valor, 1);
            this.state.ficheirosAmostraFases.splice(valor, 1);
            if (this.state.ficheirosAmostraFases.length > 0) {
                this.setState({
                    verificacaoFicheirosFases: true
                });
            } else {
                this.setState({
                    verificacaoFicheirosFases: false
                });

            }
        }
        else if (tipo == "texto") {
            this.state.ficheirosAmostraFases.splice(valor, 1);
            this.state.ficheirosEnviarFases.splice(valor, 1);
            if (this.state.ficheirosAmostraFases.length > 0) {
                this.setState({
                    verificacaoFicheirosFases: true
                });
            } else {
                this.setState({
                    verificacaoFicheirosFases: false
                });
            }
        }
    };

    //Mudança de Capa
    handleChangeCapa = (tipo, ficheiro, enviar) => {

        if (tipo == "imagem") {
            let arrayEnvio = {
                Tipo: tipo,
                Ficheiro: ficheiro
            };

            this.state.ficheirosAmostraCapa.push(arrayEnvio);
            this.setState({
                verificacaoFicheirosCapa: true
            });
        } else {
            if (this.state.ficheirosEnviarCapa.length == 0) {

                let d = new Date();
                let timestamp = d.getTime();
                let newName = ficheiro.name + "_capa_" + timestamp;

                let uploadTask = storage.ref(`files/${newName}`).put(ficheiro);
                uploadTask.on(
                    "state_changed",
                    snapshot => {},
                    error => {
                        console.log(error);
                    },
                    () => {
                        storage.ref("files").child(newName).getDownloadURL().then(url => {});
                    }
                )
                let arrayUpload = {
                    Tipo: "imagem",
                    Ficheiro: newName,

                };
                this.state.ficheirosEnviarCapa.push(arrayUpload);
                this.setState({
                    verificacaoFicheirosCapa: true
                });
            } else if (this.state.ficheirosEnviarCapa.length > 0) {
  
                let refChild = this.state.ficheirosEnviarCapa[0].Ficheiro 

                var desertRef = storage.ref('files').child(refChild);

                // Delete the file
                desertRef.delete().then(function() {
                    console.log("Deleted")
                }).catch((err) => {
                    console.log(err)
                });


                let d = new Date();
                let timestamp = d.getTime();
                let newName = ficheiro.name + "_capa_" + timestamp;

                let uploadTask = storage.ref(`files/${newName}`).put(ficheiro);
                uploadTask.on(
                    "state_changed",
                    snapshot => {},
                    error => {
                        console.log(error);
                    },
                    () => {
                        storage.ref("files").child(newName).getDownloadURL().then(url => {});
                    }
                )
                let arrayUpload = {
                    Tipo: "imagem",
                    Ficheiro: newName,
                };

                this.state.ficheirosEnviarCapa.splice(enviar, 1, arrayUpload);
                this.setState({
                    verificacaoFicheirosCapa: true
                });
            }
        }
    };

    guardaCorte = (imagem) => {
        this.setState({imgCortadaMostrar: imagem});
    };

    handleApagarCapa = (tipo, valor, refChild) => {

    
        this.state.ficheirosEnviarCapa.splice(valor, 1);
        this.state.ficheirosAmostraCapa.splice(valor, 1);
        this.setState({
            verificacaoFicheirosCapa: false,
            imgCortadaMostrar: ""
        });;
    };

    //Campos Finais
    handleChangeFinal = input => e => {
        this.setState({[input]: e.target.value});

    };

    // Próximo Step
    nextStep = () => {
        const {Step} = this.state;
        this.setState({Step: Step + 1});
    };
    //Step Anterior
    prevStep = () => {
        const {Step} = this.state;
        this.setState({Step: Step - 1});
    };
    StepMore = (valor) => {
        this.setState({Step: valor});
    };

    render() {
        const {verificacaoFicheiros, ficheirosAmostra, verificacaoFicheirosFases, ficheirosAmostraFases, verificacaoFicheirosCapa, ficheirosAmostraCapa, nomeProjeto, areaTrabalhoProjeto, ferramentasUsadas, equipa, descricaoProjeto, EmpresasProjeto, imgCortadaMostrar, ficheirosEnviar, ficheirosEnviarFases, ficheirosEnviarCapa} = this.state;
        const valores = {verificacaoFicheiros, ficheirosAmostra, verificacaoFicheirosFases, ficheirosAmostraFases, verificacaoFicheirosCapa, ficheirosAmostraCapa, nomeProjeto, areaTrabalhoProjeto, ferramentasUsadas, equipa, descricaoProjeto, EmpresasProjeto, imgCortadaMostrar, ficheirosEnviar, ficheirosEnviarFases, ficheirosEnviarCapa};
        switch (this.state.Step) {
            case 1:
                return (
                    <div>
                        <div className="barra_criar row col-12 justify-content-center justify-content-lg-start m-0 p-0">
                            <div className="ml-lg-4 my-auto">
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", color: "#ec9400", fontSize: "x-large", textTransform: "capitalize", lineHeight: "80%"}}>1. Conteúdo</span>
                                </span>
                                <span className="mr-3" style={{fontFamily: "'Barlow Semibold', sans-serif"}}>
                                    >
                                </span>
                                {this.state.ficheirosAmostra.length > 0 && this.state.ficheirosEnviar.length > 0 ?
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}} onClick={this.nextStep}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "x-large", textTransform: "capitalize", lineHeight: "80%"}}>2. Desenvolvimento</span>
                                </span>
                                    :
                                    <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}} onClick={() => alert("Tens que preencher a estrutura do teu projeto com algo!")}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "x-large", textTransform: "capitalize", lineHeight: "80%"}}>2. Desenvolvimento</span>
                                </span>
                                }
                                <span className="mr-3" style={{fontFamily: "'Barlow Semibold', sans-serif"}}>
                                    >
                                </span>
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "x-large", textTransform: "capitalize" , lineHeight: "80%"}}>3. Capa</span>
                                </span>
                                <span className="mr-3" style={{fontFamily: "'Barlow Semibold', sans-serif"}}>
                                    >
                                </span>
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "x-large", textTransform: "capitalize" , lineHeight: "80%"}}>4. Publicar</span>
                                </span>
                            </div>
                        </div>
                        <div className="body_CriarProjeto">
                            <FormCreateProjeto1
                                valores={valores}
                                handleChange={this.handleChange}
                                handleApagar={this.handleApagar}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                            />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div className="barra_criar row col-12 justify-content-center justify-content-lg-start m-0 p-0">
                            <div className="ml-lg-4 my-auto">
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}} onClick={this.prevStep}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "x-large", textTransform: "capitalize", lineHeight: "80%"}}>1. Conteúdo</span>
                                </span>
                                <span className="mr-3" style={{fontFamily: "'Barlow Semibold', sans-serif"}}>
                                    >
                                </span>
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", color: "#ec9400", fontSize: "x-large", textTransform: "capitalize", lineHeight: "80%"}}>2. Desenvolvimento</span>
                                </span>
                                <span className="mr-3" style={{fontFamily: "'Barlow Semibold', sans-serif"}}>
                                    >
                                </span>
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}} onClick={this.nextStep}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "x-large", textTransform: "capitalize" , lineHeight: "80%"}}>3. Capa</span>
                                </span>
                                <span className="mr-3" style={{fontFamily: "'Barlow Semibold', sans-serif"}}>
                                    >
                                </span>
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "x-large", textTransform: "capitalize" , lineHeight: "80%"}}>4. Publicar</span>
                                </span>
                            </div>
                        </div>
                        <div className="body_CriarProjeto">
                            <FormCreateProjeto2
                                valores={valores}
                                handleChange={this.handleChangeFases}
                                handleApagar={this.handleApagarFases}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                            />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <div className="barra_criar row col-12 justify-content-center justify-content-lg-start m-0 p-0">
                            <div className="ml-lg-4 my-auto">
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}} onClick={() => this.StepMore(1)}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "x-large", textTransform: "capitalize", lineHeight: "80%"}}>1. Conteúdo</span>
                                </span>
                                <span className="mr-3" style={{fontFamily: "'Barlow Semibold', sans-serif"}}>
                                    >
                                </span>
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}} onClick={this.prevStep}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "x-large", textTransform: "capitalize", lineHeight: "80%"}}>2. Desenvolvimento</span>
                                </span>
                                <span className="mr-3" style={{fontFamily: "'Barlow Semibold', sans-serif"}}>
                                    >
                                </span>
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", color: "#ec9400", fontSize: "x-large", textTransform: "capitalize" , lineHeight: "80%"}}>3. Capa</span>
                                </span>
                                <span className="mr-3" style={{fontFamily: "'Barlow Semibold', sans-serif"}}>
                                    >
                                </span>
                                {this.state.ficheirosEnviarCapa.length > 0 ?
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}} onClick={this.nextStep}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "x-large", textTransform: "capitalize" , lineHeight: "80%"}}>4. Publicar</span>
                                </span>
                                    :
                                    <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}}>
                                        <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "x-large", textTransform: "capitalize" , lineHeight: "80%"}}>4. Publicar</span>
                                    </span>
                                }
                            </div>
                        </div>
                        <div className="body_CriarProjeto">
                            <FormCreateProjeto3
                                valores={valores}
                                handleChange={this.handleChangeCapa}
                                handleApagar={this.handleApagarCapa}
                                guardarCorte={this.guardaCorte}
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                            />
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <div className="barra_criar row col-12 justify-content-center justify-content-lg-start m-0 p-0">
                            <div className="ml-lg-4 my-auto">
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}} onClick={() => this.StepMore(1)}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "x-large", textTransform: "capitalize", lineHeight: "80%"}}>1. Conteúdo</span>
                                </span>
                                <span className="mr-3" style={{fontFamily: "'Barlow Semibold', sans-serif"}}>
                                    >
                                </span>
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}} onClick={() => this.StepMore(2)}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "x-large", textTransform: "capitalize", lineHeight: "80%"}}>2. Desenvolvimento</span>
                                </span>
                                <span className="mr-3" style={{fontFamily: "'Barlow Semibold', sans-serif"}}>
                                    >
                                </span>
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}} onClick={this.prevStep}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", fontSize: "x-large", textTransform: "capitalize" , lineHeight: "80%"}}>3. Capa</span>
                                </span>
                                <span className="mr-3" style={{fontFamily: "'Barlow Semibold', sans-serif"}}>
                                    >
                                </span>
                                <span className="btn btn-flat botoes_barra_criar mr-3" style={{textAlign: "center", verticalAlign: "middle"}}>
                                    <span style={{fontFamily: "'Barlow Semibold', sans-serif", color: "#ec9400", fontSize: "x-large", textTransform: "capitalize" , lineHeight: "80%"}}>4. Publicar</span>
                                </span>
                            </div>
                        </div>
                        <div className="body_CriarProjeto">
                            <FormCreateProjeto4
                                valores={valores}
                                handleChange={this.handleChangeFinal}
                                publicar={this.Publicar}
                                objeto={this.state}
                                prevStep={this.prevStep}
                            />
                        </div>
                    </div>
                );
        }
    }

}


export default CreateProject