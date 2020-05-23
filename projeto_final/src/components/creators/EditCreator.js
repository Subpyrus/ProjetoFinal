import React from 'react';
import '../../App.css';
import FormEditarPerfil_Geral from '../forms/FormEditarPerfil_Geral';
import FormEditarPerfil_Formacao from '../forms/FormEditarPerfil_Formacao';
import FormEditarPerfil_Password from '../forms/FormEditarPerfil_Password';
import FormEditarPerfil_Associar from '../forms/FormEditarPerfil_Associar';
import Seta2 from "../../Imgs/Seta2.svg";
import {Link} from "react-router-dom";

class EditarPerfil extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selecionado: 1,
            imagemPerfil: "",
            primeiroNome: "",
            ultimoNome: "",
            dataNascimento: "",
            conselho: "",
            localidade: "",
            areaTrabalho: "",
            ocupacao: "",
            sobre: ""
        }
    }

    muda = (valor) => {
        this.setState({selecionado: valor});
        console.log(this.state.selecionado);
    };

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
        console.log(this.state);
    };

    render() {
        const {imagemPerfil, primeiroNome, ultimoNome, dataNascimento, conselho, localidade, areaTrabalho, ocupacao, sobre} = this.state;
        const valores = {imagemPerfil, primeiroNome, ultimoNome, dataNascimento, conselho, localidade, areaTrabalho, ocupacao, sobre};

        return (
            <div className="container-fluid Editar_Perfil_Body">
                <div className="row col-12 mb-0 justify-content-center">
                    <span className="col-sm-12 col-xl-3">
                        <div className="Escolha_Editar_Perfil mt-5  px-0">
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
                            <FormEditarPerfil_Geral
                                handleChange={this.handleChange}
                                valores={valores}
                            />
                            :
                            this.state.selecionado == 2 ?
                                <FormEditarPerfil_Formacao/>
                                :
                                this.state.selecionado == 3 ?
                                    <FormEditarPerfil_Password/>
                                    :
                                    <FormEditarPerfil_Associar/>
                        }
                    </div>
                </div>
            </div>
        );
    }

}

export default EditarPerfil