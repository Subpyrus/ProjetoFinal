import React from 'react';
import '../../App.css';
import Filtros from '../layout/Filtros';
import ListaFreelance from '../freelances/FreelanceList';
import {Link} from "react-router-dom";
import  { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import ListaEmpregos from "../jobs/JobList";
import {Modal} from "react-bootstrap";
import {storage} from "../../config/fbConfig";
import ListaCandidatos from '../freelances/ListaCandidatos'
import {eliminaFree} from '../../store/actions/freelanceActions'

class Freelance extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pesquisa: "",
            areaTrabalho: "",
            Distrito: "",
            orcamento: "",
            setShowM: false
        }
    }

    handleCloseM = () => {
        this.setState({setShowM: false})

    };
    handleShowM = () => {
        //console.log("oi");
        this.setState({setShowM: true})
    };

    handleEliminar = (valor) => {
        console.log(valor)
        this.props.eliminaFree(valor)
    }

    render() {
        let contador = 0;
        const { auth, freelances, users } = this.props;
        //console.log(auth);
        return (
            <div>
                <Filtros pagina="freelance" search={this.atualiza} areaTrabalho={this.atualizaArea} distrito={this.atualizaDistrito} orcamento={this.atualizaOrcamento}/>
                <div className="container-fluid Body_Empregos">
                    <div className="row col-12 mb-0 justify-content-center mx-auto">
                        <div className="col-sm-12 col-lg-7 mt-5 mb-sm-2 mb-lg-4 batatas_fritas">
                            {freelances && freelances.length > 0 ?
                                <ListaFreelance freelances={freelances} pesquisa={this.state.pesquisa} areaTrabalho={this.state.areaTrabalho} distrito={this.state.Distrito} orcamento={this.state.orcamento} users={auth.uid}/>
                                :
                                <p className="no_jobs">Não foi ainda publicado qualquer tipo de anúncio freelance.<br/>
                                    <span className="no_jobs_sub">Podes sempre procurar por <b>empregos</b>!</span></p>
                            }
                        </div>
                        {auth.uid && users ?
                            users.map(dados => {
                                //console.log(dados);
                                if (auth.uid === dados.id && dados.TipoUtilizador === 1){
                                    return(
                                        <div className="col-12 col-md-8 col-lg-3 mt-4 mt-lg-5 ml-lg-4 mb-0 mb-lg-5">
                                            <Link to="/freelance/criar">
                                                <button className="Emprego_But_Criar_Anuncio_Freelance col-12" style={{width: "100%"}}>Criar anúncio</button>
                                            </Link>
                                            <div className="col-12 area_meus_anuncios p-0 mt-3">
                                                <section className="area_meus_anuncios_inicial">
                                                    <p className="area_meus_anuncios_inicial_texto_1 pt-2 pb-2 pl-3 mb-0">OS MEUS ANÚNCIOS</p>
                                                </section>
                                                {freelances && freelances.map(info => {
                                                    if (auth.uid === info.IdUser){
                                                        contador++;
                                                        return(
                                                            <section className="pl-0 pl-sm-3 text-center text-sm-left" style={{width: "100%"}}>
                                                                <span>
                                                                    <p className="area_meus_anuncios_inicial_texto pt-2 mb-0">{info.NomeAnuncio}<span className="pr-3 icon_creators" onClick={() => this.handleEliminar(info.id)}><i className="fa fa-trash"/></span></p>
                                                                </span>
                                                                <span className="btn btn-flat pt-0 pl-0 area_meus_anuncios_candidatos justify-content-center justify-content-sm-start" onClick={() => this.handleShowM()}>
                                                                    {info.candidatos.length > 0 ?
                                                                        <i className="fa fa-users fa-2x pb-2" style={{color: "orange"}}></i>
                                                                        :
                                                                        <i className="fa fa-users fa-2x pb-2"></i>
                                                                    }
                                                                    <span className="mb-0 pl-2" style={{position: "relative", top: "-4px"}}>{info.candidatos.length}/{info.NumeroCandidatos} candidatos</span>
                                                                </span>
                                                            </section>
                                                        )
                                                    }
                                                })}
                                                {contador === 0 ?
                                                    <section className="text-center">
                                                        <p className="area_meus_anuncios_inicial_texto pt-2 pb-2 mb-0">Ainda não tens anúncios</p>
                                                    </section>
                                                    :
                                                    <section className="text-center d-none">
                                                        <p className="area_meus_anuncios_inicial_texto pt-2 pb-2 mb-0">Ainda não tens anúncios</p>
                                                    </section>
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            })
                            :
                            <div className="col-sm-6 col-lg-3 mt-5 ml-4 mb-5 d-lg-block d-none">
                                <div className="Empregos_Criar_Conta px-3 py-4">
                                    <h2 className="Empregos_Criar_Conta_Titulo">Ainda não fazes parte da nossa
                                        colmeia?</h2>
                                    <span className="Empregos_Criar_Conta_Texto">
                                    Oferecemos-te um espaço <br/> para promoveres o <br/> teu trabalho criativo.
                                </span>
                                    <Link to="/registo">
                                        <button className="Emprego_But_Criar_Conta mt-2">Criar Perfil</button>
                                    </Link>
                                </div>
                            </div>
                        }
                        <div className="col-sm-12 col-lg-7 mt-5 mb-sm-2 mb-lg-4 batatas_fritas_2">
                            {freelances && freelances.length > 0 ?
                                <ListaFreelance freelances={freelances} pesquisa={this.state.pesquisa} areaTrabalho={this.state.areaTrabalho} distrito={this.state.Distrito} orcamento={this.state.orcamento} users={auth.uid}/>
                                :
                                <p className="no_jobs">Não foi ainda publicado qualquer tipo de anúncio freelance.<br/>
                                    <span className="no_jobs_sub">Podes sempre procurar por <b>empregos</b>!</span></p>
                            }
                        </div>
                    </div>
                </div>
                {users && users.map(dados => {
                    if (auth.uid === dados.id && dados.TipoUtilizador === 1) {
                        return (
                            <div id="myModal" className="modal fade">
                                <Modal
                                    className="bg-transparent mh-100"
                                    size="lg"
                                    show={this.state.setShowM}
                                    onHide={this.handleCloseM}
                                    backdrop="static"
                                    keyboard={false}
                                    aria-labelledby="example-custom-modal-styling-title">
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-custom-modal-styling-title"
                                                     className="titulomodal">
                                            Utilizadores inscritos</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body id="modalbody">
                                        <div className="container p-0 mt-3 cont-fases">
                                            {freelances && freelances.map(info => {
                                                if (auth.uid === info.IdUser){
                                                    return(
                                                        <div className="col-12">
                                                            {info.candidatos.map(coisas => {
                                                                return(
                                                                    <span>
                                                                        <ListaCandidatos candidatos={coisas}/>
                                                                        <hr/>
                                                                    </span>
                                                                )
                                                            })}
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
    atualiza = (txt) => {
        //console.log(txt);
        this.setState({pesquisa: txt});
    };
    atualizaArea = (txt) => {
        //console.log(txt);
        this.setState({areaTrabalho: txt});
    };
    atualizaDistrito = (txt) => {
        //console.log(txt);
        this.setState({Distrito: txt});
    };
    atualizaOrcamento = (txt) => {
        //console.log(txt);
        this.setState({orcamento: txt});
    };

}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        freelances: state.firestore.ordered.freelances,
        users: state.firestore.ordered.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        eliminaFree: (valor) => dispatch(eliminaFree(valor))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'freelances' },
        { collection: 'users' }
    ])
)(Freelance)