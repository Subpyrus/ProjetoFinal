import React from 'react';
import '../../App.css';
import FormEditarPerfil_Geral from '../forms/FormEditarPerfil_Geral';
import FormEditarPerfil_Formacao from '../forms/FormEditarPerfil_Formacao';
import FormEditarPerfil_Password from '../forms/FormEditarPerfil_Password';
import FormEditarPerfil_Associar from '../forms/FormEditarPerfil_Associar';
import Seta2 from "../../Imgs/Seta2.svg";
import {Link} from "react-router-dom";
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {firestoreConnect} from "react-redux-firebase";
import { updateProfile } from '../../store/actions/authActions';
import { recoverPassword } from '../../store/actions/authActions';

class EditarPerfil extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selecionado: 1,
            imagemPerfil: "",
            primeiroNome: "",
            ultimoNome: "",
            dataNascimento: "",
            Distrito: "",
            areaTrabalho: "",
            ocupacao: "",
            sobre: "",
            website: "",
            instagram: "",
            linkedin: "",
            facebook: "",
            formacao: {},
            userId:"",
            emailEnviar:"",
            adicionaFormacao: false,
            formacaoAntes: false
        }
    }

    componentDidMount () {
        const {users,auth} = this.props;
        const id = auth.uid;
        var previous = false;
        for (var a in users){
            if(users[a].TipoUtilizador == 1) {
                if(users[a].Formacao.length != 0) {
                    previous = true; 
                }
                if(a == id) {
                    this.setState({
                        primeiroNome: users[a].FirstName ? users[a].FirstName : "",
                        ultimoNome: users[a].LastName ? users[a].LastName : "",
                        dataNascimento: users[a].BirthDate ? users[a].BirthDate : "",
                        Distrito: users[a].Local ? users[a].Local : "",
                        areaTrabalho: users[a].AreaTrabalho ? users[a].AreaTrabalho : "",
                        imagemPerfil: users[a].ImagemPerfil,
                        ocupacao: users[a].Ocupation ? users[a].Ocupation : "",
                        sobre: users[a].Descricao ? users[a].Descricao : "",
                        website: users[a].LinkWeb ? users[a].LinkWeb : "",
                        instagram: users[a].LinkInsta ? users[a].LinkInsta : "",
                        linkedin: users[a].LinkLinked ? users[a].LinkLinked : "",
                        facebook: users[a].LinkFace ? users[a].LinkFace : "",
                        formacao: users[a].Formacao ? users[a].Formacao : {},
                        formacaoAntes: previous,
                        userId: id
                    })
                }
            }  
        }
    }

    muda = (valor) => {
        this.setState({selecionado: valor});
    };

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    guardaCampo = () => {
        let newArray = [];
        for (var a in this.state.formacao){
            newArray.push(this.state.formacao[a])
        }
        let objetoGuardado = {
            faculdade: "", 
            curso: "", 
            ano: "", 
            estado: "", 
            anoConclusao: ""
        };
        newArray.push(objetoGuardado);
        this.setState({ 
            formacao: newArray,
            adicionaFormacao: true
        });
    };

    alteraFormacao = (index, input, escrito) => {
        let clone = this.state.formacao;
        clone[index][input] = escrito;
        this.setState({formacao: clone});
    };

    apagaFormacao = (index) => {
        this.state.formacao.splice(index, 1);
        if (this.state.formacao.length == 0) {
            this.setState({adicionaFormacao: false});
        } else {
            this.setState({adicionaFormacao: true});
        }
    };

    handleSubmit = (e) => {
        this.props.updateProfile(this.state);
    }

    mudarPassword = (e) => {
        e.preventDefault();
        console.log(this.state.emailEnviar)
        this.props.recoverPassword(this.state.emailEnviar);
    }
    

    render() {
        const {imagemPerfil, primeiroNome, ultimoNome, dataNascimento, Distrito, areaTrabalho, ocupacao, sobre, passwordAtual, passwordNova, website, instagram, linkedin, facebook, formacao, adicionaFormacao, formacaoAntes} = this.state;
        const valores = {imagemPerfil, primeiroNome, ultimoNome, dataNascimento, Distrito, areaTrabalho, ocupacao, sobre};
        const valores2 = {passwordAtual, passwordNova};
        const valores3 = {website, instagram, linkedin, facebook};
        const valores4 = {formacao, adicionaFormacao, formacaoAntes};
        const {editError,editSuccess,recoverError,recoverSuccess} = this.props;
        return (
            <div className="container-fluid Editar_Perfil_Body">
                <div className="row col-12 mb-0 justify-content-center">
                    <span className="col-12 col-xl-3">
                        <div className="Escolha_Editar_Perfil mt-5 px-0">
                            <span
                                className="btn-flat pl-4 Item_Escolha_Editar_Perfil"
                                onClick={() => this.muda(1)}
                                style={this.state.selecionado == 1 ? {textTransform: "none", color: "#ec9400"} : {textTransform: "none"}}
                            >Informações gerais</span>
                            <span
                                className="btn-flat pl-4 Item_Escolha_Editar_Perfil"
                                onClick={() => this.muda(2)}
                                style={this.state.selecionado == 2 ? {textTransform: "none", color: "#ec9400"} : {textTransform: "none"}}
                            >Formação</span>
                            <span
                                className="btn-flat pl-4 Item_Escolha_Editar_Perfil"
                                onClick={() => this.muda(3)}
                                style={this.state.selecionado == 3 ? {textTransform: "none", color: "#ec9400"} : {textTransform: "none"}}
                            >Alterar Password</span>
                            <span
                                className="btn-flat pl-4 Item_Escolha_Editar_Perfil"
                                onClick={() => this.muda(4)}
                                style={this.state.selecionado == 4 ? {textTransform: "none", color: "#ec9400"} : {textTransform: "none"}}
                            >Associar Website e Redes sociais</span>
                        </div>
                        <span className="col-12 row">
                            <Link to="/perfil">
                                <button className="Emprego_Det_But_Criar_Conta mt-3">
                                    <img className="mr-2" src={Seta2} style={{width: "20px", height: "auto", transform: "rotate(180deg)"}} />
                                    Voltar ao perfil</button>
                            </Link>
                        </span>
                    </span>
                    <div className="row col-sm-12 col-xl-8 Editar_Perfil_Main ml-4 mt-5 mb-5">
                        {this.state.selecionado == 1 ?
                            <div className="col-12 mx-auto">
                                <FormEditarPerfil_Geral
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                valores={valores}
                            />
                            <div className="row mb-0 col s12 pb-2 justify-content-end">
                                <button
                                    className="btn btnIn"
                                    type="button"
                                    id="nextBtn"
                                    onClick={this.handleSubmit}
                                >
                                    Guardar Alterações
                                </button>
                                </div>
                                <div className="red-text justify-content-end">
                                    {editError ? <p>{editError}</p> : null}
                                </div>
                                <div className="green-text justify-content-end">
                                    {editSuccess ? <p>{editSuccess}</p> : null}
                                </div>
                            </div>
                        :
                        this.state.selecionado == 2 ?
                        <div className="col-12 mx-auto">
                            <FormEditarPerfil_Formacao
                                valores={valores4}
                                guardaCampo={this.guardaCampo}
                                handleChange={this.alteraFormacao}
                                handleApagar={this.apagaFormacao}
                            />
                            <div className="row mb-0 col s12 pb-2 justify-content-end">
                                <button
                                    className="btn btnIn"
                                    type="button"
                                    id="nextBtn"
                                    onClick={this.handleSubmit}
                                >
                                    Guardar Alterações
                                </button>
                            </div>
                            <div className="red-text justify-content-end">
                                {editError ? <p>{editError}</p> : null}
                            </div>
                            <div className="green-text justify-content-end">
                                {editSuccess ? <p>{editSuccess}</p> : null}
                            </div>
                        </div>
                        :
                        this.state.selecionado == 3 ?
                        <div className="col-12 mx-auto">
                            <FormEditarPerfil_Password
                                handleChange={this.handleChange}
                                valores={valores2}
                            />
                            <div className="row mb-0 col s12 pb-2 justify-content-end">
                                <button
                                    className="btn btnIn"
                                    type="button"
                                    id="nextBtn"
                                    onClick={this.mudarPassword}
                                >
                                    Mudar Password
                                </button>
                            </div>
                            <div className="red-text justify-content-end">
                                {recoverError ? <p>{recoverError}</p> : null}   
                            </div>
                            <div className="green-text justify-content-end">
                                {recoverSuccess ? <p>{recoverSuccess}</p> : null}
                            </div>
                        </div>
                        :
                        <div className="col-12 mx-auto">
                            <FormEditarPerfil_Associar
                                    handleChange={this.handleChange}
                                    valores={valores3}
                            />
                            <div className="row mb-0 col s12 pb-2 justify-content-end">
                                <button
                                    className="btn btnIn"
                                    type="button"
                                    id="nextBtn"
                                    onClick={this.handleSubmit}
                                >
                                    Guardar Alterações
                                </button>
                            </div>
                            <div className="red-text justify-content-end">
                                {editError ? <p>{editError}</p> : null}
                            </div>
                            <div className="green-text justify-content-end">
                                {editSuccess ? <p>{editSuccess}</p> : null}
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        auth: state.firebase.auth,
        editError: state.auth.editError,
        editSuccess: state.auth.editSuccess,
        recoverError: state.auth.recoverError,
        recoverSuccess: state.auth.recoverSuccess,
        users: state.firestore.data.users
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        updateProfile: (newValores) => dispatch(updateProfile(newValores)),
        recoverPassword: (email) => dispatch(recoverPassword(email))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'users'}
    ]))(EditarPerfil);