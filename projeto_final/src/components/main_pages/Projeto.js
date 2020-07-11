import React from 'react';
import '../../App.css';
import Filtros from '../layout/Filtros';
import ListaProjetos from '../projects/ProjectList';
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {firestoreConnect} from "react-redux-firebase";
import CreatorList from "../creators/CreatorList";
import $ from "jquery";

const $x = "show";

class Projetos extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pesquisa: "",
            areaTrabalho: "",
            Distrito: ""
        }
    }

    componentDidMount() {
        $('.show').click(function () { //same as on('click', function(){}); I just prefer this syntax
            console.log($(this).attr('data-target'));
            let target = $(this).attr('data-target'); //this will be card1 if the first is clicked.
            $('.' + target).slideToggle(`slow`); //add . for class selector and use target to find the right element
        });

        $('.close').click(function () { //close button
            $(this).parent().slideToggle('slow'); //find the nearest parent and close it
        });

    };

    render() {
        const {auth, projects, users} = this.props;
        return (
            <div className="container-fluid m-0 p-0 Proj_Body">
                <Filtros pagina="projeto" search={this.atualiza} areaTrabalho={this.atualizaArea} distrito={this.atualizaDistrito}/>
                <div className="container-fluid justify-content-center mt-5">
                    <ListaProjetos projetos={projects} pesquisa={this.state.pesquisa} areaTrabalho={this.state.areaTrabalho} verificar={auth.uid} distrito={this.state.Distrito} users={users} abrir={$x}/>
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
        auth: state.firebase.auth,
        projects: state.firestore.ordered.projects,
        users: state.firestore.ordered.users
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' },
        { collection: 'users' }
    ])
)(Projetos)