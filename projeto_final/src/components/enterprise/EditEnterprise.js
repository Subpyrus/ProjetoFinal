import React from 'react';
import '../../App.css';
import FormEntEditarPerfil_Geral from '../forms/FormEntEditarPerfil_Geral';
import FormEntEditarPerfil_Password from '../forms/FormEntEditarPerfil_Password';
import FormEntEditarPerfil_Associar from '../forms/FormEntEditarPerfil_Associar';
import Seta2 from "../../Imgs/Seta2.svg";
import {Link} from "react-router-dom";
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {firestoreConnect} from "react-redux-firebase";
import {updateProfile} from '../../store/actions/authActions';
import {recoverPassword} from '../../store/actions/authActions';
import {storage} from '../../config/fbConfig';
import Back from "../../Imgs/back.svg";
import Text from "../../Imgs/text.svg";

class EditarEnterprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selecionado: 0,
            imagemPerfil: "",
            imagemMostra: "",
            NomeEmpresa: "",
            Distrito: "",
            areaTrabalho: "",
            ocupacao: "",
            sobre: "",
            website: "",
            instagram: "",
            linkedin: "",
            facebook: "",
            tamanho: "",
            userId: "",
            emailEnviar: ""
        }
    }

    componentDidMount() {
        const {users, auth} = this.props;
        const id = auth.uid;
        for (var a in users) {
            if (users[a].TipoUtilizador == 2) {
                if (a == id) {
                    this.setState({
                        NomeEmpresa: users[a].NomeEmpresa ? users[a].NomeEmpresa : "",
                        Distrito: users[a].Local ? users[a].Local : "",
                        areaTrabalho: users[a].AreaTrabalho ? users[a].AreaTrabalho : "",
                        imagemPerfil: users[a].ImagemPerfil,
                        ocupacao: users[a].Ocupation ? users[a].Ocupation : "",
                        sobre: users[a].Descricao ? users[a].Descricao : "",
                        website: users[a].LinkWeb ? users[a].LinkWeb : "",
                        instagram: users[a].LinkInsta ? users[a].LinkInsta : "",
                        linkedin: users[a].LinkLinked ? users[a].LinkLinked : "",
                        facebook: users[a].LinkFace ? users[a].LinkFace : "",
                        tamanho: users[a].TamanhoEmpresa ? users[a].TamanhoEmpresa : "",
                        userId: id
                    })
                }
            }
        }
    }

    handleImagem = (ficheiro, enviar) => {

        let d = new Date();
        let timestamp = d.getTime();
        let newName = enviar.name + "_perfil_" + timestamp;

        let uploadTask = storage.ref(`files/${newName}`).put(enviar);
        uploadTask.on(
            "state_changed",
            snapshot => {
            },
            error => {
                console.log(error);
            },
            () => {
                storage.ref("files").child(newName).getDownloadURL().then(url => {
                });
            }
        )

        this.setState({
            imagemPerfil: newName,
            imagemMostra: ficheiro
        });
    };

    muda = (valor) => {
        this.setState({selecionado: valor});
    };

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
        console.log(this.state);
    };

    handleSubmit = (e) => {
        console.log(this.state)
        this.props.updateProfile(this.state);
    }

    mudarPassword = (e) => {
        e.preventDefault();
        console.log(this.state.emailEnviar)
        this.props.recoverPassword(this.state.emailEnviar);
    }


    render() {
        const {imagemPerfil, imagemMostra, NomeEmpresa, Distrito, areaTrabalho, ocupacao, sobre, tamanho, passwordAtual, passwordNova, website, instagram, linkedin, facebook} = this.state;
        const valores = {imagemPerfil, imagemMostra, NomeEmpresa, Distrito, areaTrabalho, ocupacao, sobre, tamanho};
        const valores2 = {passwordAtual, passwordNova};
        const valores3 = {website, instagram, linkedin, facebook};
        const {editError, editSuccess, recoverError, recoverSuccess} = this.props;
        return (
            <div className="container-fluid Editar_Perfil_Body">
                <div className="row col-12 mb-0 justify-content-center">
                    <span className="col-12 col-xl-3">
                        <div className="Escolha_Editar_Perfil mt-5 px-0">
                            <span
                                className="btn-flat pl-4 Item_Escolha_Editar_Perfil"
                                onClick={() => this.muda(1)}
                                style={this.state.selecionado == 1 ? {
                                    textTransform: "none",
                                    color: "#ec9400"
                                } : {textTransform: "none"}}
                            >Informações gerais</span>
                            <span
                                className="btn-flat pl-4 Item_Escolha_Editar_Perfil"
                                onClick={() => this.muda(2)}
                                style={this.state.selecionado == 2 ? {
                                    textTransform: "none",
                                    color: "#ec9400"
                                } : {textTransform: "none"}}
                            >Alterar Password</span>
                            <span
                                className="btn-flat pl-4 Item_Escolha_Editar_Perfil"
                                onClick={() => this.muda(3)}
                                style={this.state.selecionado == 3 ? {
                                    textTransform: "none",
                                    color: "#ec9400"
                                } : {textTransform: "none"}}
                            >Associar Website e Redes sociais</span>
                        </div>
                        <span className="col-12 row">
                            <Link to={`/perfil/empresa/${this.props.auth.uid}`}>
                                <button className="Emprego_Det_But_Criar_Conta mt-3">
                                    <img className="mr-2" src={Seta2}
                                         style={{width: "20px", height: "auto", transform: "rotate(180deg)"}}/>
                                    Voltar ao perfil</button>
                            </Link>
                        </span>
                    </span>
                    <div className="row col-sm-12 col-xl-8 Editar_Perfil_Main ml-4 mt-5 mb-5">
                        {this.state.selecionado == 1 ?
                            <div className="col-12 mx-auto">
                                <FormEntEditarPerfil_Geral
                                    handleChange={this.handleChange}
                                    handleSubmit={this.handleSubmit}
                                    handleImagem={this.handleImagem}
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
                                    <FormEntEditarPerfil_Password
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
                                this.state.selecionado == 3 ?
                                    <div className="col-12 mx-auto">
                                        <FormEntEditarPerfil_Associar
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
                                    :
                                    <div className="col-12 mx-auto my-auto area_PreVisualizar text-center">
                            <span>
                                <h1 className="titulo_EditarPerfil">EDITAR PERFIL</h1>
                                <span className="titulo_SubtituloProjeto">Seleciona a àrea que queres editar e altera o campo que desejas!</span>
                            </span>
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (newValores) => dispatch(updateProfile(newValores)),
        recoverPassword: (email) => dispatch(recoverPassword(email))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'users'}
    ]))(EditarEnterprise);