import React from 'react';
import '../../App.css';
import Filtros from '../layout/Filtros';
import CreatorList from '../creators/CreatorList';
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {firestoreConnect} from "react-redux-firebase";

class Criador extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            pesquisa: "",
            areaTrabalho: "",
            Distrito: ""
        }
    }

    render() {
        const {users, projects} = this.props;
        //console.log(users);
        //console.log(this.state);
        return (
            <div>
                <div className="container-fluid justify-content-center m-0 p-0">
                    <Filtros pagina="criador" search={this.atualiza} areaTrabalho={this.atualizaArea} distrito={this.atualizaDistrito}/>
                    <div className="container-fluid Body_Criadores pt-5">
                        <CreatorList utilizadores={users} pesquisa={this.state.pesquisa} areaTrabalho={this.state.areaTrabalho} distrito={this.state.Distrito} projects={projects}/>
                    </div>
                </div>
            </div>
        );
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
        console.log(txt);
        this.setState({Distrito: txt});
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.firestore.ordered.users,
        projects: state.firestore.ordered.projects
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' },
        { collection: 'projects' }
    ])
)(Criador)