import React from 'react';
import '../../App.css';
import {connect} from 'react-redux'
import {compose} from "redux";
import {Link} from 'react-router-dom'
import  { createFreelance } from '../../store/actions/freelanceActions'
import {firestoreConnect} from "react-redux-firebase";

class FormCreateFreelance2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            distrito: ""
        }
    }

    estilo = {
        textAlign: "center",
        marginTop: "40px"
    };
    escolhido = {
        opacity: 1
    };

    getUserDistrito = () => {
        {this.props.user && this.props.user.map(dados => {
            console.log("ola");
            if (this.state.distrito === "") {
                console.log("ola2");
                if (dados.id === this.props.auth.uid) {
                    this.props.valores.distritoCriador = dados.Local
                } else {
                    this.setState({distrito: ""})
                }
            }
        }) }
    };

    continuar = e => {
        e.preventDefault();
        this.getUserDistrito();
        this.props.createFreelance(this.props.valores);
        //console.log(this.props.valores);
        document.getElementById('red').click();
    };

    voltar = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {auth, valores} = this.props;
        valores.IdUser = auth.uid;
        return (
            <div>
                <Link id="red" to="/freelance"/>
                <div className="px-5 row Criar_Freelance_Meio_2_Info">
                    <span className="mb-2 Titulo_Emprego_List_2">{valores.NomeAnuncio}</span>
                    <span className="Info_Emprego_List">Orçamento: {valores.Orcamento}€</span>
                    <span className="mb-3 Info_Emprego_List">Data de entrega: {valores.DataEntrega}</span>
                    <span className="row mb-3 pl-3">
                        <span className="Area_Freelance mr-3">{valores.AreaTrabalho}</span>
                    </span>
                    <span className="mb-3 Info_Emprego_List">{valores.NumeroCandidatos} Candidatos</span>
                </div>

                <hr className="line mx-4"/>

                <div className="px-5 row Criar_Freelance_Meio_2_Info">
                    <span className="mb-1 Titulo_Emprego_List_3">Descrição do Projeto</span>
                    <span className="mb-1 Info_Emprego_List_2">{valores.DescricaoTrabalho}</span>
                </div>

                <div className="px-5 row justify-content-end of">
                    <div className="f">
                        <div className="col s6">
                            <button
                                className="btn btnIn"
                                type="button"
                                id="prevBtn"
                                onClick={this.voltar}>
                                Anterior
                            </button>
                        </div>
                        <div className="col s6">
                            {valores.NomeAnuncio == "" || valores.Orcamento == "" || valores.DataEntrega == "" || valores.NumeroCandidatos == "" || valores.AreaTrabalho == "" || valores.DescricaoTrabalho == "" ?
                                <button
                                    className="btn btnIn"
                                    type="button"
                                    id="nextBtn"
                                    onClick={this.continuar}
                                    disabled
                                >
                                    Publicar
                                </button>
                                :
                                <button
                                    className="btn btnIn"
                                    type="button"
                                    id="nextBtn"
                                    onClick={this.continuar}>
                                    Publicar
                                </button>
                            }
                        </div>
                    </div>
                </div>

                <div style={this.estilo}>
                    <span className="step"/>
                    <span className="step" style={this.escolhido}/>
                </div>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        user: state.firestore.ordered.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createFreelance: (freelance) => dispatch(createFreelance(freelance))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'users'}
    ]))(FormCreateFreelance2)