import React from 'react';
import Filtros from '../layout/Filtros';
import '../../App.css'
import {Link} from 'react-router-dom';
import ListaEmpregos from '../jobs/JobList';
import  { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux' 

class Empregos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pesquisa: "",
            areaTrabalho: ""
        }
    }

    render () {

        const { auth, jobs, users } = this.props;
        return (
            <div>
                <Filtros pagina="emprego" search={this.atualiza} areaTrabalho={this.atualizaArea}/>
                <div className="container-fluid Body_Empregos">
                    <div className="row col-12 mb-0 justify-content-center">
                        <div className="col-sm-12 col-lg-7 mt-5 mb-sm-2 mb-lg-4 ml-5">
                            {jobs && jobs.length > 0 ?
                                <ListaEmpregos jobs={jobs} pesquisa={this.state.pesquisa} areaTrabalho={this.state.areaTrabalho}/>
                                :
                                <p>Parece que não existem empregos!</p>
                            }
                        </div>
                        {auth.uid && users ?
                            users.map(dados => {
                                if (auth.uid === dados.id && dados.TipoUtilizador === 2){
                                    return(
                                        <div className="col-12 col-md-8 col-lg-3 mt-lg-5 ml-lg-4 mb-5">
                                            <Link to="/freelance/criar">
                                                <button className="Emprego_But_Criar_Anuncio_Freelance col-12" style={{width: "100%"}}>Criar anúncio</button>
                                            </Link>
                                            <div className="col-12 area_meus_anuncios p-0 mt-3">
                                                <section className="area_meus_anuncios_inicial">
                                                    <p className="area_meus_anuncios_inicial_texto_1 pt-2 pb-2 pl-3 mb-0">OS MEUS ANÚNCIOS</p>
                                                </section>
                                                <section className="text-center">
                                                    <p className="area_meus_anuncios_inicial_texto pt-2 pb-2 mb-0">Ainda não tens anúncios</p>
                                                </section>
                                                <section className="pl-0 pl-sm-3 text-center text-sm-left" style={{width: "100%"}}>
                                                    <p className="area_meus_anuncios_inicial_texto pt-2 mb-0">Video Promocional</p>
                                                    <span className="pt-2 area_meus_anuncios_candidatos justify-content-center justify-content-sm-start">
                                                        <i className="fa fa-users fa-2x pb-2"></i>
                                                        <span className="mb-0 pl-2" style={{position: "relative", top: "-4px"}}>3/10 candidatos</span>
                                                    </span>
                                                </section>
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
                    </div>
                </div>
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
    }

}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        auth: state.firebase.auth,
        jobs: state.firestore.ordered.jobs,
        users: state.firestore.ordered.users
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'jobs' },
        { collection: 'users' }
    ])
)(Empregos)