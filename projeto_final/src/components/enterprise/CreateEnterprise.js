import React from 'react';
import '../../App.css';
import sg from '../../Imgs/sg.png';
import FormEnterprisePart1 from '../forms/FormEnterprisePart1';
import FormEnterprisePart2 from '../forms/FormEnterprisePart2';
import FormEnterprisePart3 from '../forms/FormEnterprisePart3';

class CreateCreator extends React.Component {
    state = {
        Step: 1,
        NomeEmpresa: '',
        TamanhoEmpresa: '',
        DataCriacao: '',
        Pais: '',
        Localidade:'',
        AreaTrabalho: '',
        Ocupacao: '',
        Email:'',
        Password:''
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
    //Mudança de campos
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
        console.log(this.state);
    };

    render() {
        const { Step } = this.state;
        const {NomeEmpresa, TamanhoEmpresa, DataCriacao, Pais, Localidade, AreaTrabalho, Ocupacao, Email, Password} = this.state;
        const valores = {NomeEmpresa, TamanhoEmpresa, DataCriacao, Pais, Localidade, AreaTrabalho, Ocupacao, Email, Password};

        switch (Step) {
            case 1:
                return(
                    <div className="container-fluid fundo">
                        <div className="row box justify-content-center">
                            <div className="boxIn p-5 col-6">
                                <div className="text-center">
                                    <img src={sg} width="auto" className="mb-3"/>
                                    <h4 className="titulo">Registo</h4>
                                    <p className="bemvindo">Junta-te à nossa Colmeia</p>
                                </div>
                                <hr className="line mb-3"/>
                                <FormEnterprisePart1
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    valores={valores}
                                />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return(
                    <div className="container-fluid fundo">
                        <div className="row box justify-content-center">
                            <div className="boxIn p-5 col-6">
                                <div className="text-center">
                                    <img src={sg} width="auto" className="mb-3"/>
                                    <h4 className="titulo">Registo</h4>
                                    <p className="bemvindo">Junta-te à nossa Colmeia</p>
                                </div>
                                <hr className="line mb-3"/>
                                <FormEnterprisePart2
                                    prevStep={this.prevStep}
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    valores={valores}
                                />
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return(
                    <div className="container-fluid fundo">
                        <div className="row box justify-content-center">
                            <div className="boxIn p-5 col-6">
                                <div className="text-center">
                                    <img src={sg} width="auto" className="mb-3"/>
                                    <h4 className="titulo">Registo</h4>
                                    <p className="bemvindo">Junta-te à nossa Colmeia</p>
                                </div>
                                <hr className="line mb-3"/>
                                <FormEnterprisePart3
                                    prevStep={this.prevStep}
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    valores={valores}
                                />
                            </div>
                        </div>
                    </div>
                )
        }
    }
}

export default CreateCreator;