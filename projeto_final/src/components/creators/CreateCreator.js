import React from 'react';
import '../../App.css';
import sg from '../../Imgs/sg.png';
import FormUserPart1 from '../forms/FormUserPart1';
import FormUserPart2 from '../forms/FormUserPart2';
import FormUserPart3 from '../forms/FormUserPart3';
import {signUpUser} from "../../store/actions/authActions"
import {signOut} from '../../store/actions/authActions'
import {connect} from "react-redux"
import {Link} from 'react-router-dom'

class CreateCreator extends React.Component {
    state = {
        Step: 1,
        PrimeiroNome: '',
        UltimoNome: '',
        DataNascimento: '',
        Distrito: '',
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
        this.props.signUpUser(this.state);
        setTimeout(this.signOutRegisto,1000);
    }

    signOutRegisto = (e) =>{
        this.props.signOut()
    }

    render() {
        const { Step } = this.state;
        const {PrimeiroNome, UltimoNome, DataNascimento, Distrito, AreaTrabalho, Ocupacao, Email, Password} = this.state;
        const valores = {PrimeiroNome, UltimoNome, DataNascimento, Distrito, AreaTrabalho, Ocupacao, Email, Password};

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
                                    <FormUserPart1
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
                                    <FormUserPart2
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
                        <Link id="red" to='/entrar'/>
                        <div className="container box">
                            <div className="row justify-content-center mb-0">
                                <div className="boxIn p-5 col-12 col-md-8 col-lg-6">
                                    <div className="text-center">
                                        <img src={sg} width="auto" className="mb-3"/>
                                        <h4 className="titulo">Registo</h4>
                                        <p className="bemvindo">Junta-te à nossa Colmeia</p>
                                    </div>
                                    <hr className="line mb-3"/>
                                    <FormUserPart3
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
                );
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
        signUpUser: (newUser) => dispatch(signUpUser(newUser)),
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateCreator);
