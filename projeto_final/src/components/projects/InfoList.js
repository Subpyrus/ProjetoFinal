import React from 'react';
import {storage} from "../../config/fbConfig";

class InfoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imagem: ""
        }
    }

    getImage = (image) => {
        storage.ref('files').child(`${image}`).getDownloadURL().then((url) => {
            if (this.state.imagem === "") {
                //console.log(url);
                this.setState({imagem: url})
            }
        })
    };

    render() {
        const {tipo, ficheiro} = this.props;
        if (tipo === "imagem"){
            this.getImage(ficheiro);
            return(
                <section className="mb-3">
                    <img src={this.state.imagem} width="100%" height="auto"/>
                </section>
            )
        } else if (tipo === "texto" || tipo === "link"){
            return(
                <section className="mb-3 ml-2 ml-sm-0">
                    <span className="Proj_Det_Texto">{ficheiro}</span>
                </section>
            )
        } else if (tipo === "video"){
            this.getImage(ficheiro);
            return(
                <section className="mb-3" style={{position: "relative", paddingBottom: "56.25%"}}>
                    <iframe width="100%" height="auto" src={this.state.imagem} frameBorder="0"
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}/>
                </section>
            )
        }
    }

}
export default InfoList;