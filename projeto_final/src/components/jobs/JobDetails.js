import React from 'react';
import {Link} from "react-router-dom";
import Seta from "../../Imgs/Seta1.svg";
import Seta2 from "../../Imgs/Seta2.svg";
import Perfil from '../../Imgs/defaults/p1.png';
import { connect } from 'react-redux'
import  { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import {storage} from "../../config/fbConfig";
import emailjs from "emailjs-com";
import {addCandidatura} from '../../store/actions/jobActions'

class EmpregosDetalhes extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            imagemPerfil: "",
            primeiroNome: "",
            nomeAnuncio: "",
            emailCandidato: "",
            areaTrabalho: ""
        };
    }

    getImage(image) {
        storage.ref('files').child(`${image}`).getDownloadURL().then((url) => {
            if (this.state.imagemPerfil == "") {
                this.state.imagemPerfil = url;
                this.setState(this.state);
                //console.log(this.state);
            }
        })
    }

    guardaInfo(primeiroNome, nomeAnuncio, emailCandidato, areaTrabalho){
        if (this.state.primeiroNome === "" && this.state.ultimoNome === "" && this.state.nomeAnuncio === "") {
            this.setState({
                primeiroNome: primeiroNome,
                nomeAnuncio: nomeAnuncio,
                emailCandidato: emailCandidato,
                areaTrabalho: areaTrabalho
            })
        }
    }


    enviaMail(e, parametro){
        let id = this.props.match.params.id;
        const {job,auth} = this.props;
        e.preventDefault();
        emailjs.send('gmail', 'template_Q9NRs6D7', parametro, 'user_UAnswsOL1vNOW5D8EghtO')
            .then((result) => {
                let candidato={
                    idJob: id,
                    candidatos: []
                }
                candidato.candidatos.push(...job.candidatos)
                candidato.candidatos.push(auth.uid)
                console.log(candidato)
                this.props.addCandidatura(candidato)
                //window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
            }, (error) => {
                console.log(error.text);
            });
    }

    render(){
        const { job, auth, users } = this.props;
        if (job) {
            {users && users.map(dados => {
                if (dados.id === auth.uid) {
                    //console.log(dados);
                    this.guardaInfo(dados.FirstName, job.NomeAnuncio, auth.email, dados.AreaTrabalho)
                }
            })}
            return (
                <div>
                    <div className="container-fluid Body_Detalhes_Empregos">
                        <div className="row col-12 m-0 justify-content-center">
                            <span className="col-lg-10 col-sm-12 mt-4 ml-4 p-0">
                                <Link to="/empregos" style={{color:"inherit",textDecoration:"inherit"}}>
                                    <img src={Seta} style={{width:"25px", height:"auto"}} className="mr-1"/><span className="voltar">VOLTAR</span>
                                </Link>
                            </span>
                            <div className="col-sm-12 col-lg-7 mt-4 mb-sm-2 mb-lg-4 p-0">
                                <div className="Main_Detalhes_Emprego">
                                    <div className="col-12 row justify-content-center">
                                         <span className="col-10 pl-5 Emprego_List_Info_Princ">
                                            <span className="mb-1 Titulo_Emprego_List"> {job.NomeAnuncio}</span>
                                            <span className="mb-1 Info_Emprego_List">Localização: {job.Localizacao === "Braganca" ?
                                                "Bragança"
                                                :
                                                job.Localizacao === "CasteloBranco" ?
                                                    "Castelo Branco"
                                                    :
                                                    job.Localizacao === "Evora" ?
                                                        "Évora"
                                                        :
                                                        job.Localizacao === "Santarem" ?
                                                            "Santarém"
                                                            :
                                                            job.Localizacao === "Setubal" ?
                                                                "Setúbal"
                                                                :
                                                                job.Localizacao === "VianaCastelo" ?
                                                                    "Viana do Castelo"
                                                                    :
                                                                    job.Localizacao === "VilaReal" ?
                                                                        "Vila Real"
                                                                        :
                                                                        job.Localizacao
                                            }</span>
                                            <span className="mb-1 Info_Emprego_List">
                                                {job.TipoTrabalho === "FullTime" ?
                                                    "Full-Time"
                                                    :
                                                    "Part-Time"
                                                }
                                            </span>
                                            <span className="mb-3 Info_Emprego_List">Salário: {job.Salario} €</span>
                                            <span className="Area_Emprego">
                                                {job.AreaTrabalho === "3DAnimacao" ?
                                                    "3D e Animação"
                                                    :
                                                    job.AreaTrabalho === "ArtesPerfomativas" ?
                                                        "Artes Perfomativas"
                                                        :
                                                        job.AreaTrabalho === "ArtesPlasticas" ?
                                                            "Artes Plásticas"
                                                            :
                                                            job.AreaTrabalho === "CinemaVideo" ?
                                                                "Cinema e Vídeo"
                                                                :
                                                                job.AreaTrabalho === "DesenhoIlustracao" ?
                                                                    "Desenho e Ilustração"
                                                                    :
                                                                    job.AreaTrabalho === "DesignGrafico" ?
                                                                        "Design Gráfico"
                                                                        :
                                                                        job.AreaTrabalho === "DesignProdutos" ?
                                                                            "Design Produtos"
                                                                            :
                                                                            job.AreaTrabalho === "Fotografia" ?
                                                                                "Fotografia"
                                                                                :
                                                                                job.AreaTrabalho === "Pintura" ?
                                                                                    "Pintura"
                                                                                    :
                                                                                    job.AreaTrabalho === "Programacao" ?
                                                                                        "Programação"
                                                                                        :
                                                                                        job.AreaTrabalho === "Musica" ?
                                                                                            "Música"
                                                                                            :
                                                                                            "Outros Trabalhos"

                                                }
                                            </span>
                                        </span>
                                            <span className="col-2 Emprego_List_Info_Princ_Final">
                                            <span className="Info_Emprego_List">{moment(job.ListingTime.toDate()).calendar()}</span>
                                        </span>
                                    </div>
                                    <hr className="hr col-11"/>
                                    <div className="col-12 row justify-content-center">
                                         <span className="col-12 pl-5 Emprego_List_Info_Princ mb-3">
                                            <span className="mb-1 Titulo_Emprego_List">Descrição do trabalho:</span>
                                            <span className="mb-1 Info_Emprego_Detalhes">{job.Descricao}</span>
                                        </span>
                                        <span className="col-12 pl-5 Emprego_List_Info_Princ mb-3">
                                            <span className="mb-1 Titulo_Emprego_List">Requisitos:</span>
                                            <span className="mb-1 Info_Emprego_Detalhes">{job.Requisitos}</span>
                                        </span>
                                        <span className="col-12 pl-5 Emprego_List_Info_Princ">
                                            <span className="mb-1 Titulo_Emprego_List">Benefícios:</span>
                                            <span className="mb-1 Info_Emprego_Detalhes">{job.Beneficios}</span>
                                        </span>
                                    </div>
                                    <hr className="hr col-11"/>
                                    {auth.uid ?
                                        users && users.map(dados => {
                                            if (dados.id === auth.uid && dados.TipoUtilizador === 1) {
                                                return (
                                                    <div className="col-12 row justify-content-center m-0">
                                                        <button className="Emprego_Det_But_Criar_Conta mt-2 mb-2"
                                                                onClick={(coisas) => this.enviaMail(coisas, this.state)}>
                                                            Envia a tua
                                                            Candidatura!
                                                            <img src={Seta2} className="ml-2" style={{
                                                                width: "15px",
                                                                height: "auto",
                                                                verticalAlign: "text-bottom"
                                                            }}/>
                                                        </button>
                                                    </div>
                                                )
                                            } else if (dados.id === auth.uid && dados.TipoUtilizador !== 1) {
                                                return (
                                                    <div className="col-12 row justify-content-center m-0">
                                                        <button className="Emprego_Det_But_Criar_Conta mt-2 mb-2" disabled>
                                                            Envia a tua
                                                            Candidatura!
                                                            <img src={Seta2} className="ml-2" style={{
                                                                width: "15px",
                                                                height: "auto",
                                                                verticalAlign: "text-bottom"
                                                            }}/>
                                                        </button>
                                                    </div>
                                                )
                                            }
                                        })
                                        :
                                        <div className="col-12 row justify-content-center m-0">
                                            <Link to="/registo">
                                                <button className="Emprego_Det_But_Criar_Conta mt-2 mb-2">QUERES-TE CANDIDATAR? REGISTA-TE<img src={Seta2} className="ml-2" style={{width:"15px", height:"auto", verticalAlign: "text-bottom"}}/></button>
                                            </Link>
                                        </div>
                                    }

                                </div>
                            </div>
                            {/*style={login == "Off" ? {display : "none"} : {display: "block"}}*/
                                users && users.map(dados => {
                                    if (dados.id === job.IdUser) {
                                        console.log(dados);
                                        this.getImage(dados.ImagemPerfil);
                                        return(
                                            <div className="col-sm-6 col-lg-3 mt-4 ml-4 mb-5 d-lg-block d-none">
                                                <div className="Empregos_box_Utilizador px-3 py-4">
                                                    <div className="text-center">
                                                        <img className="mb-2" alt="" src={this.state.imagemPerfil} width="100px" height="100px"/>
                                                        <h2 className="Empregos_Nome_Utilizador">{dados.NomeEmpresa}</h2>
                                                    </div>
                                                    <span className="Empregos_Criar_Conta_Texto">
                                                        {dados.AreaTrabalho === "3DAnimacao" ?
                                                            "3D e Animação"
                                                            :
                                                            dados.AreaTrabalho === "ArtesPerfomativas" ?
                                                                "Artes Perfomativas"
                                                                :
                                                                dados.AreaTrabalho === "ArtesPlasticas" ?
                                                                    "Artes Plásticas"
                                                                    :
                                                                    dados.AreaTrabalho === "CinemaVideo" ?
                                                                        "Cinema e Vídeo"
                                                                        :
                                                                        dados.AreaTrabalho === "DesenhoIlustracao" ?
                                                                            "Desenho e Ilustração"
                                                                            :
                                                                            dados.AreaTrabalho === "DesignGrafico" ?
                                                                                "Design Gráfico"
                                                                                :
                                                                                dados.AreaTrabalho === "DesignProdutos" ?
                                                                                    "Design Produtos"
                                                                                    :
                                                                                    dados.AreaTrabalho === "Fotografia" ?
                                                                                        "Fotografia"
                                                                                        :
                                                                                        dados.AreaTrabalho === "Pintura" ?
                                                                                            "Pintura"
                                                                                            :
                                                                                            dados.AreaTrabalho === "Programacao" ?
                                                                                                "Programação"
                                                                                                :
                                                                                                dados.AreaTrabalho === "Musica" ?
                                                                                                    "Música"
                                                                                                    :
                                                                                                    "Outros Trabalhos"
                                                        }
                                                        <br/>
                                                        E-mail: pedroaudiovisual00@gmail.com
                                                    </span>
                                                    <Link to={`/perfil/empresa/${job.IdUser}`}>
                                                        <button className="Emprego_But_Visitar_Perfil mt-2">Ver Perfil</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                                }

                        </div>
                    </div>
                </div>
            )

        }else {
            return (
                <div className="container center">
                    <p>Loading job...</p>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const jobs = state.firestore.data.jobs;
    const job = jobs ? jobs[id] : null;
    return  {
        job : job,
        auth: state.firebase.auth,
        users: state.firestore.ordered.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCandidatura: (candidato) => dispatch(addCandidatura(candidato))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'jobs' },
        { collection: 'users' }
    ])
)(EmpregosDetalhes)