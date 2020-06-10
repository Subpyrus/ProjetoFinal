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
    handleChange = (tipo, imagem, enviar) => {
        if (tipo == "imagem"){
            this.state.ficheirosEnviar.push(enviar);
            this.state.ficheirosAmostra.push(imagem);
            this.setState({
                verificacaoFicheiros: true
            })
        }
        //console.log(this.state.ficheirosAmostra);
        //console.log(this.state.ficheirosEnviar);
    };

    handleApagar = valor => {
        this.state.ficheirosEnviar.splice(valor, 1);
        this.state.ficheirosAmostra.splice(valor, 1);
        if (this.state.ficheirosAmostra.length > 0 && this.state.ficheirosEnviar.length > 0) {
            this.setState({
                verificacaoFicheiros: true
            });
            //console.log("ohyeye");
        } else {
            this.setState({
                verificacaoFicheiros: false
            });
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