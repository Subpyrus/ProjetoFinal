import React from 'react';
import '../../App.css';
import sg from '../../Imgs/sg.png';
import FormEnterprisePart1 from '../forms/FormEnterprisePart1';
import FormEnterprisePart2 from '../forms/FormEnterprisePart2';
import FormEnterprisePart3 from '../forms/FormEnterprisePart3';
import {signUpEnterprise} from "../../store/actions/authActions"
import {signOut} from '../../store/actions/authActions'
import {connect} from "react-redux"

class CreateEnterprise extends React.Component {
    state = {
        Step: 1,
        NomeEmpresa: '',
        TamanhoEmpresa: '',
        DataCriacao: '',
        Distrito:'',
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
    };

    handleSubmit = (e) => {
        this.props.signUpEnterprise(this.state);
        setTimeout(this.signOutRegisto,1000);
    }

    signOutRegisto = (e) =>{
        this.props.signOut()
    }

    render() {
        const { Step } = this.state;
        const {NomeEmpresa, TamanhoEmpresa, DataCriacao, Distrito, AreaTrabalho, Ocupacao, Email, Password} = this.state;
        const valores = {NomeEmpresa, TamanhoEmpresa, DataCriacao, Distrito, AreaTrabalho, Ocupacao, Email, Password};

        switch (Step) {
            case 1:
                return(
                    <div className="container-fluid fundo">
                        <div className="container box">
                            <div className="row justify-content-center mb-0">
                                <div className="boxIn p-5 col-12 col-md-8 col-lg-6">
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
                    </div>
                );
            case 2:
                return(
                    <div className="container-fluid fundo">
                        <div className="container box">
                            <div className="row justify-content-center mb-0">
                                <div className="boxIn p-5 col-12 col-md-8 col-lg-6">
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
                    </div>
                );
            case 3:
                return(
                    <div className="container-fluid fundo">
                        <div className="container box">
                            <div className="row justify-content-center mb-0">
                                <div className="boxIn p-5 col-12 col-md-8 col-lg-6">
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
                                        handleSubmit={this.handleSubmit}
                                        valores={valores}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.firebase.authError
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signUpEnterprise: (newEnterprise) => dispatch(signUpEnterprise(newEnterprise)),
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateEnterprise);