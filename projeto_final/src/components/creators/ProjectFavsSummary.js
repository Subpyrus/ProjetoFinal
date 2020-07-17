import React from 'react';
import '../../App.css';
import {Link} from "react-router-dom";
import {storage} from "../../config/fbConfig";
import $ from "jquery";

class ProjectFavsSummary extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            imagem: ""
        }
    }

    getImage = (image) => {
        storage.ref('files').child(`${image}`).getDownloadURL().then((url) => {
            if (this.state.imagem == "") {
                //console.log(url);
                this.setState({imagem: url})
            }
        })
    };

    render() {
        const {info, abrir} = this.props;
        //console.log(info);
        return (
            <div className="col-12 m-0 p-0">
                {this.getImage(info.capa[0].Ficheiro)}
                <div className="card">
                    <div className="card-image">
                        <Link to={`/projetos/detalhes/${info.id}`}>
                            <div className="wrap">
                                <img className="img-fluid" src={this.state.imagem}/>
                            </div>
                        </Link>
                    </div>
                    <div className="card-content">
                        <div>
                            <span className="card-title">{info.nomeProjeto}</span>
                            <button type="button" id="show" data-target={`${abrir}${info.id}`}
                                    className="float-right show btn btn-custom"
                                    aria-label="Left Align"><i className="fa fa-ellipsis-v"></i>
                            </button>
                        </div>
                        <span className="card-text Proj_Info3">
                                    <i className="fa fa-eye mr-2"/><span className="mr-2 nums">{info.Vis}</span>
                                    <i className="fa fa-heart-o mr-2"/><span className="mr-2 nums">{info.idLikes.length}</span>
                                </span>
                    </div>
                    <div className={`card-reveal ${abrir}${info.id}`}>
                        <button type="button" className="close btn-custom" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">×</span></button>
                        <p>{info.descricaoProjeto}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProjectFavsSummary;