import React from 'react';
import '../../App.css';
import Filtros from '../layout/Filtros';
import ListaProjetos from '../projects/ProjectList';
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {firestoreConnect} from "react-redux-firebase";
import CreatorList from "../creators/CreatorList";

class Projetos extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pesquisa: "",
            areaTrabalho: "",
            Distrito: ""
        }
    }

    render() {
        const {projects} = this.props;
        return (
            <div className="container-fluid m-0 p-0 Proj_Body">
                <Filtros pagina="projeto" search={this.atualiza} areaTrabalho={this.atualizaArea} distrito={this.atualizaDistrito}/>
                <div className="container-fluid justify-content-center mt-5">
                    <ListaProjetos projetos={projects} pesquisa={this.state.pesquisa} areaTrabalho={this.state.areaTrabalho} distrito={this.state.Distrito}/>
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
    };
    atualizaDistrito = (txt) => {
        console.log(txt);
        this.setState({Distrito: txt});
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Projetos)