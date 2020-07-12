import React from 'react';
import '../../App.css';
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {firestoreConnect} from "react-redux-firebase";
import EnterpriseDetailsSummary from './EnterpriseDetailsSummary';

class PerfilEmpresa extends React.Component {
    estilo = {
        color: "inherit",
        textDecoration: "inherit"
    };

    render() {
        const {auth, otherUsers, jobs} = this.props;
        return (
            <div>
                <div className="container-fluid Perfil_Body">
                    {otherUsers && otherUsers.map(dados => {
                        if (dados.id === this.props.match.params.id && dados.TipoUtilizador === 2) {
                            return (
                                <EnterpriseDetailsSummary users={dados} job={jobs} id_user={auth.uid} id_pass={this.props.match.params.id}/>
                            )
                        }
                    })}
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        auth: state.firebase.auth,
        otherUsers: state.firestore.ordered.users,
        jobs: state.firestore.ordered.jobs
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'users'},
        {collection: 'jobs'}
    ]))(PerfilEmpresa)