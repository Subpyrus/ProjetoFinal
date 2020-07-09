import React from 'react';
import '../../App.css';
import Imagem2 from '../../Imgs/Conteudo_Post1.jpg'
import {Link} from "react-router-dom";
import {storage} from "../../config/fbConfig";

class CreatorSummary extends React.Component {

    constructor(props) {
        super(props);
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
        const {creators} = this.props;
        return (
            <div className="col-12 col-sm-6 col-lg-3 mb-3">
                {this.getImage(creators.ImagemPerfil)}
                <div className="card card_Criadores">
                    <div className="card-body card_body2 card_PT1 text-center">
                        <div className="text-center">
                            <img src={this.state.imagem} className="card_Imagem mb-2"/>
                        </div>
                        <span style={{
                            fontFamily: "Barlow Semibold, sans-serif",
                            fontSize: "18px"
                        }}>{creators.FirstName} {creators.LastName}</span>
                        <div className="mt-1 card_body2_P2">
                            {creators.AreaTrabalho == "3DAnimacao" ?
                                <span>3D e Animação</span>
                                :
                                creators.AreaTrabalho == "ArtesPerfomativas" ?
                                    <span>Artes Perfomativas</span>
                                    :
                                    creators.AreaTrabalho == "ArtesPlasticas" ?
                                        <span>Artes Plásticas</span>
                                        :
                                        creators.AreaTrabalho == "CinemaVideo" ?
                                            <span>Cinema e Vídeo</span>
                                            :
                                            creators.AreaTrabalho == "DesenhoIlustracao" ?
                                                <span>Desenho e Ilustração</span>
                                                :
                                                creators.AreaTrabalho == "DesignGrafico" ?
                                                    <span>Design Gráfico</span>
                                                    :
                                                    creators.AreaTrabalho == "DesignProdutos" ?
                                                        <span>Design Produtos</span>
                                                        :
                                                        creators.AreaTrabalho == "Fotografia" ?
                                                            <span>Fotografia</span>
                                                            :
                                                            creators.AreaTrabalho == "Pintura" ?
                                                                <span>Pintura</span>
                                                                :
                                                                creators.AreaTrabalho == "Programacao" ?
                                                                    <span>Programação</span>
                                                                    :
                                                                    creators.AreaTrabalho == "Musica" ?
                                                                        <span>Música</span>
                                                                        :
                                                                        <span>Outros Trabalhos</span>

                            }

                            {creators.Local == "Braganca" ?
                                <span>Bragança</span>
                                :
                                creators.Local == "CasteloBranco" ?
                                    <span>Castelo Branco</span>
                                    :
                                    creators.Local == "Evora" ?
                                        <span>Évora</span>
                                        :
                                        creators.Local == "Santarem" ?
                                            <span>Santarém</span>
                                            :
                                            creators.Local == "Setubal" ?
                                                <span>Setúbal</span>
                                                :
                                                creators.Local == "VianaCastelo" ?
                                                    <span>Viana do Castelo</span>
                                                    :
                                                    creators.Local == "VilaReal" ?
                                                        <span>Vila Real</span>
                                                        :
                                                        <span>{creators.Local}</span>
                            }
                        </div>
                    </div>
                    <div className="card_body2 card_PT2">
                        <div className="text-center">
                            <img src={Imagem2} className="card_Imagem2 mb-2"/>
                        </div>
                        <Link to="/perfil">
                            <button className="Criador_But_Ver_Perfil mt-2">Ver Perfil</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
};

export default CreatorSummary