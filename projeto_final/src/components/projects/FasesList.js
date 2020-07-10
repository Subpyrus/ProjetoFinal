import React from 'react';
import {storage} from "../../config/fbConfig";
import Conteudo1 from "../../Imgs/Conteudo_Post1.jpg";

class FasesList extends React.Component {
    constructor(props) {
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
        const {tipo, index, info} = this.props;
        return (
            <div className="timeline-panel mr-xl-5 mr-md-0">
                <div className="timeline-heading">
                    <img className="img-responsive"
                         src="http://lorempixel.com/1600/500/sports/2"/>
                </div>
                {tipo === "imagem" ?
                <div className="timeline-body">
                    {this.getImage(info.Ficheiro)}
                    <h4 className="titulofase">{index+1}ª Fase</h4>
                    <img src={this.state.imagem} width="100%" height="auto"/>
                    <p className="textofase">Mussum ipsum cacilds, vidis litro abertis.
                        Consetis adipiscings elitis.
                        Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis
                        santis.
                        Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra
                        quem é
                        amistosis quis leo.</p>
                </div>
                    :
                    <div className="timeline-body">
                        <h4 className="titulofase">{index+1}ª Fase</h4>
                        <p className="textofase">{info.Ficheiro}</p>
                    </div>
                }
            </div>
        );
    }

}

export default FasesList;