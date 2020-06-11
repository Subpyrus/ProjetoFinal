import React from 'react';
import '../../App.css';
import FormCreateProjeto1 from '../forms/FormCreateProjeto1';

class CreateProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verificacaoFicheiros: false,
            ficheirosAmostra: [],
            ficheirosEnviar: [],
            Step: 1
        };

    }

    //Mudança de campos
    handleChange = (tipo, ficheiro, enviar) => {
        if (tipo == "imagem"){
            let arrayEnvio = [];
            let arrayUpload = [];
            arrayEnvio.push(tipo, ficheiro);
            arrayUpload.push(tipo, enviar);
            this.state.ficheirosEnviar.push(arrayUpload);
            this.state.ficheirosAmostra.push(arrayEnvio);
            this.setState({
                verificacaoFicheiros: true
            });
        } else if (tipo == "texto") {
            let arrayEnvio = [];
            let arrayUpload = [];
            arrayEnvio.push(tipo, ficheiro);
            //alterar o envio acima para só enviar a info
            arrayUpload.push(tipo, ficheiro);
            this.state.ficheirosEnviar.push(arrayUpload);
            this.state.ficheirosAmostra.push(arrayEnvio);
            this.setState({
                verificacaoFicheiros: true
            });
        } else if (tipo == "link") {
            let arrayEnvio = [];
            let arrayUpload = [];
            arrayEnvio.push(tipo, ficheiro);
            //alterar o envio acima para só enviar a info
            arrayUpload.push(tipo, ficheiro);
            this.state.ficheirosEnviar.push(arrayUpload);
            this.state.ficheirosAmostra.push(arrayEnvio);
            this.setState({
                verificacaoFicheiros: true
            });
        }
        //console.log(this.state.ficheirosAmostra);
        //console.log(this.state.ficheirosEnviar);
    };

    handleApagar = valor => {
        //console.log(valor);
        this.state.ficheirosEnviar.splice(valor, 1);
        this.state.ficheirosAmostra.splice(valor, 1);
        if (this.state.ficheirosAmostra.length > 0 && this.state.ficheirosEnviar.length > 0) {
            this.setState({
                verificacaoFicheiros: true
            });
            //console.log(this.state.ficheirosAmostra);
            //console.log("ohyeye");
        } else {
            this.setState({
                verificacaoFicheiros: false
            });
            //console.log(this.state.ficheirosAmostra);
            //console.log("ohnono");
        }
    };

    // Próximo Step
    nextStep = () => {
        const { Step } = this.state;
        this.setState({Step: Step + 1});
    };
    //Step Anterior
    prevStep = () => {
        const { Step } = this.state;
        this.setState({Step: Step - 1});
    };

    render() {
        const {verificacaoFicheiros, ficheirosAmostra} = this.state;
        const valores = {verificacaoFicheiros, ficheirosAmostra};
        switch (this.state.Step) {
            case 1:
                return (
                    <div>
                        <div className="filtros row col-12 justify-content-center m-0 p-0">

                        </div>
                        <div className="body_CriarProjeto">
                            <FormCreateProjeto1
                                nextStep={this.nextStep}
                                valores={valores}
                                handleChange={this.handleChange}
                                handleApagar={this.handleApagar}
                            />
                        </div>
                    </div>
                );
        }
    }

}

export default CreateProject