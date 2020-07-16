import React from 'react';
import '../../App.css';
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {firestoreConnect} from "react-redux-firebase";
import {storage} from "../../config/fbConfig";
import {Link} from "react-router-dom";

class ListaCandidatos extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            imagemPerfil: ""
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

    render() {
        const {candidatos} = this.props;
        return (
            <div className="row justify-content-center">
                {this.props.users.map(asas => {
                    if (candidatos === asas.id) {
                        let imagem = this.getImage(asas.ImagemPerfil);
                        return(
                            <span className="col-12 col-lg-3 text-center">
                                <Link to={`/perfil/utilizador/${asas.id}`}>
                                    <img src={this.state.imagemPerfil} width="65%"/>
                                </Link>
                            </span>
                        )
                    }
                })}
                {this.props.users.map(asas => {
                    if (candidatos === asas.id) {
                        return(
                            <span className="col-12 col-lg-4 my-auto texto_Candidatos text-center text-lg-left">
                                <Link to={`/perfil/utilizador/${asas.id}`} style={{textDecoration: "none"}} className="texto_Candidatos">
                                    {asas.FirstName} {asas.LastName}
                                </Link>
                            </span>
                        )
                    }
                })}
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        freelances: state.firestore.ordered.freelances,
        users: state.firestore.ordered.users
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'freelances' },
        { collection: 'users' }
    ])
)(ListaCandidatos)