import React from 'react';
import Filtros from '../layout/Filtros';
import '../../App.css'
import {Link} from 'react-router-dom';
import ListaEmpregos from '../jobs/JobList';
import  { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux' 

class Empregos extends React.Component{
    render () {
        
        const { jobs } = this.props;

        return (
            <div>
                <Filtros pagina="emprego"/>
                <div className="container-fluid Body_Empregos">
                    <div className="row col-12 mb-0 justify-content-center">
                        <div className="col-sm-12 col-lg-7 mt-5 mb-sm-2 mb-lg-4 ml-5">
                            <ListaEmpregos jobs={jobs} />
                        </div>
                        <div className="col-sm-6 col-lg-3 mt-5 ml-4 mb-5">
                            <div className="Empregos_Criar_Conta px-3 py-4">
                                <h2 className="Empregos_Criar_Conta_Titulo">Ainda não fazes parte da nossa colmeia?</h2>
                                <span className="Empregos_Criar_Conta_Texto">
                                    Oferecemos-te um espaço <br/> para promoveres o <br/> teu trabalho criativo.
                                </span>
                                <Link to="/registo">
                                    <button className="Emprego_But_Criar_Conta mt-2">Criar Perfil</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        jobs: state.firestore.ordered.jobs
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'jobs' }
    ])
)(Empregos)