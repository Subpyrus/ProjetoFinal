import React from 'react';
import '../../App.css';
import {storage} from "../../config/fbConfig";
import Coracao from "../../Imgs/heart-regular.svg";

class ComentariosList extends React.Component{

    constructor(props) {
        super(props);
        //console.log(props.match);
        this.state = {
            imagem: ""
        }
    }

    getImage = (image) => {
        storage.ref('files').child(`${image}`).getDownloadURL().then((url) => {
            if (this.state.imagem == "") {
                this.setState({imagem: url})
            }
        })
    };

    render() {
        const {info, users} = this.props;
        return (
            <div className="col-12 m-0 p-0">
                <hr/>
                {users && users.map(dados => {
                    if (dados.id === info.id) {
                        this.getImage(dados.ImagemPerfil);
                        return(
                            <div className="row justify-content-center">
                                <div className="col-2 text-center d-none d-sm-block pr-0">
                                    <img src={this.state.imagem} style={{width: "75%"}}/>
                                </div>
                                <div className="col-11 col-sm-9 my-auto coiso_e_tal">
                                    <span><b>{dados.FirstName} {dados.LastName}</b></span>
                                    <span>{info.comment}</span>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        );
    }

}

export default ComentariosList;