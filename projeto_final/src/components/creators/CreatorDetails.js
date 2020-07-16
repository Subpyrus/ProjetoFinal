import React from 'react';
import '../../App.css';
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {firestoreConnect} from "react-redux-firebase";
import CreatorDetailsSummary from './CreatorDetailsSummary'

class Perfil extends React.Component {

    render() {
        const {auth, otherUsers, projects} = this.props;
        return (
            <div className="Perfil_Body">
                {otherUsers && otherUsers.map(dados => {
                        if (dados.id === this.props.match.params.id && dados.TipoUtilizador === 1) {
                            return (
                                <div className="Perfil_Body">
                                    <CreatorDetailsSummary users={dados} projetos={projects} id_user={auth.uid} id_pass={this.props.match.params.id}/>
                                </div>
                            )
                        }
                    }
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        otherUsers: state.firestore.ordered.users,
        projects: state.firestore.ordered.projects
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'users'},
        {collection: 'projects'}
    ]))(Perfil)