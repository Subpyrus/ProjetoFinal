import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'
import {storage} from "../../config/fbConfig";

class SignedInLinks extends React.Component {
    constructor(props){
        super(props);
        this.state={
            imagemPerfil: ""
        }
    }

    getImage(image) {
        storage.ref('files').child(`${image}`).getDownloadURL().then((url) => {
            if (this.state.imagemPerfil == "") {
                this.state.imagemPerfil = url;
                this.setState(this.state);
            }
        })
    }

    render(){
        if(this.props.nav_side == "0"){
            return (
                <ul>
                    <li><NavLink className="links" to='/projetos'>PROJETOS</NavLink></li>
                    <li><NavLink className="links" to='/criadores'>CRIADORES</NavLink></li>
                    <li><NavLink className="links" to='/freelance'>FREELANCE</NavLink></li>
                    <li><NavLink className="links" to='/empregos'>EMPREGOS</NavLink></li>
                    <li><NavLink className="links" to='/vendas'>VENDAS</NavLink></li>
                    <li><NavLink onClick={this.props.signOut} className="links" to='/'>SAIR</NavLink></li>
                    {this.props.users && this.props.users.map(info => {
                        if (info.id === this.props.id && info.TipoUtilizador === 1){
                            this.getImage(info.ImagemPerfil);
                            return(
                                <li><NavLink to={`/perfil/utilizador/${this.props.id}`} className="btn-small btn-floating" style={{backgroundImage: `url("${this.state.imagemPerfil}")`, backgroundSize: "cover"}}></NavLink></li>
                            )
                        } else if (info.id === this.props.id && info.TipoUtilizador === 2) {
                            return(
                                <li><NavLink to={`/perfil/empresa/${this.props.id}`} className="btn-small btn-floating yellow"></NavLink></li>
                            )
                        }
                    })}

                </ul>

            )
        }else {
            return (
                <ul>
                    {this.props.users && this.props.users.map(info => {
                        if (info.id === this.props.id && info.TipoUtilizador === 1){
                            this.getImage(info.ImagemPerfil);
                            return(
                                <li><NavLink to={`/perfil/utilizador/${this.props.id}`} className="btn-small btn-floating" style={{backgroundImage: `url("${this.state.imagemPerfil}")`, backgroundSize: "cover"}}></NavLink></li>
                            )
                        } else if (info.id === this.props.id && info.TipoUtilizador === 2) {
                            return(
                                <li><NavLink to={`/perfil/empresa/${this.props.id}`} className="btn-small btn-floating yellow"></NavLink></li>
                            )
                        }
                    })}
                    <li><NavLink className="links" to='/projetos'>PROJETOS</NavLink></li>
                    <li><NavLink className="links" to='/criadores'>CRIADORES</NavLink></li>
                    <li><NavLink className="links" to='/freelance'>FREELANCE</NavLink></li>
                    <li><NavLink className="links" to='/empregos'>EMPREGOS</NavLink></li>
                    <li><NavLink className="links" to='/vendas'>VENDAS</NavLink></li>
                    <li><NavLink onClick={this.props.signOut} className="links" to='/'>SAIR</NavLink></li>
                </ul>

            )
        }
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};

export default connect(null,mapDispatchToProps)(SignedInLinks);