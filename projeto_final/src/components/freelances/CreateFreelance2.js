import React from 'react';
import '../../App.css';
import FormCreateFreelance1 from '../forms/FormCreateFreelance1';
import FormCreateFreelance2 from '../forms/FormCreateFreelance2';
import Img3D from "../../Imgs/3dAnimation.jpg";
import ArtesPerformativas from "../../Imgs/ArtesPerformativas.jpeg";
import CinemaVideo from "../../Imgs/CinemaVídeo.jpg";
import DesenhoIlustracao from "../../Imgs/DesenhoIlustracao.jpeg";
import DesignGrafico from "../../Imgs/DesignGrafico.jpg";
import ArtesPlasticas from "../../Imgs/ArtesPlasticas.jpg";
import DesignProduto from "../../Imgs/DesignProduto.jpeg";
import Fotografia from "../../Imgs/Fotografia.jpeg";
import Music from "../../Imgs/Music.jpeg";
import Pintura from "../../Imgs/Pintura.jpeg";
import Programacao from "../../Imgs/Programacao.jpeg";
import Outros from "../../Imgs/PagI.jpg"
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


class CreateFreelance2 extends React.Component {

    state = {
        TipoAnuncio: this.props.location.state.valor,
        Step: 1,
        NomeAnuncio: '',
        Orcamento: '',
        DataEntrega: '',
        NumeroCandidatos: '',
        AreaTrabalho:'',
        DescricaoTrabalho: '',
        Ficheiro: '',
        IdUser: ''
    };

    // Próximo Step
    nextStep = () => {
        const { Step } = this.state;
        this.setState({Step: Step + 1});
    };
    //Step Anterior
    prevStep = () => {
        const { Step } = this.state;
        this.setState({Step: Step - 1});
    };
    //Mudança de campos
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    render() {

        const {auth} = this.props;
        const { Step } = this.state;
        const {TipoAnuncio, NomeAnuncio, Orcamento, DataEntrega, NumeroCandidatos, AreaTrabalho, DescricaoTrabalho, IdUser} = this.state;
        const valores = {TipoAnuncio, NomeAnuncio, Orcamento, DataEntrega, NumeroCandidatos, AreaTrabalho, DescricaoTrabalho, IdUser};
        switch (Step) {
            case 1:
                return (
                    <div>
                        <div className="container-fluid Criar_Freelance pl-0 pr-0">
                            <div className="row col-12 mb-0 mr-0 ml-0 pr-0 pl-0 justify-content-center">
                                {this.state.TipoAnuncio == "3D e Animação" ?
                                    <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Img3D})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                        <div className="Criar_Freelance_Inicial_Centrar">
                                            <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                            <span
                                                className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                        </div>
                                    </div>
                                    :
                                    this.state.TipoAnuncio == "Artes Performativas" ?
                                        <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ArtesPerformativas})`, backgroundSize: "cover"}}>
                                            <div className="Criar_Freelance_Inicial_Centrar">
                                                <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                <span
                                                    className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                            </div>
                                        </div>
                                        :
                                        this.state.TipoAnuncio == "Cinema e Vídeo" ?
                                            <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${CinemaVideo})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                <div className="Criar_Freelance_Inicial_Centrar">
                                                    <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                    <span
                                                        className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                </div>
                                            </div>
                                            :
                                            this.state.TipoAnuncio == "Desenho e Ilustrações" ?
                                                <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${DesenhoIlustracao})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                    <div className="Criar_Freelance_Inicial_Centrar">
                                                        <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                        <span
                                                            className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                    </div>
                                                </div>
                                                :
                                                this.state.TipoAnuncio == "Design de Produtos" ?
                                                    <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${DesignProduto})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                        <div className="Criar_Freelance_Inicial_Centrar">
                                                            <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                            <span
                                                                className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                        </div>
                                                    </div>
                                                    :
                                                    this.state.TipoAnuncio == "Fotografia" ?
                                                        <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Fotografia})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                            <div className="Criar_Freelance_Inicial_Centrar">
                                                                <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                                <span
                                                                    className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                            </div>
                                                        </div>
                                                        :
                                                        this.state.TipoAnuncio == "Música" ?
                                                            <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Music})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                                <div className="Criar_Freelance_Inicial_Centrar">
                                                                    <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                                    <span
                                                                        className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                </div>
                                                            </div>
                                                            :
                                                            this.state.TipoAnuncio == "Pintura" ?
                                                                <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Pintura})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                                    <div className="Criar_Freelance_Inicial_Centrar">
                                                                        <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                                        <span
                                                                            className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                    </div>
                                                                </div>
                                                                :
                                                                this.state.TipoAnuncio == "Programação" ?
                                                                    <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Programacao})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                                        <div className="Criar_Freelance_Inicial_Centrar">
                                                                            <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                                            <span
                                                                                className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    this.state.TipoAnuncio == "Artes Plásticas" ?
                                                                        <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ArtesPlasticas})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                                            <div className="Criar_Freelance_Inicial_Centrar">
                                                                                <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                                                <span
                                                                                    className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        this.state.TipoAnuncio == "Design Gráfico" ?
                                                                            <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${DesignGrafico})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                                                <div className="Criar_Freelance_Inicial_Centrar">
                                                                                    <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                                                    <span
                                                                                        className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                                </div>
                                                                            </div>
                                                                            :
                                                                            <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Outros})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                                                <div className="Criar_Freelance_Inicial_Centrar">
                                                                                    <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                                                    <span
                                                                                        className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                                </div>
                                                                            </div>
                                }

                                <div className="Criar_Freelance_Meio_2 col-11 col-md-10 col-lg-8 justify-content-center p-4 mb-4">
                                    <div className="Criar_Freelance_Meio_2_Inicial row">
                                        <h2 className="Criar_Freelance_Meio_2_Inicial_Titulo">{valores.TipoAnuncio}</h2>
                                        <h3 className="Criar_Freelance_Meio_2_Inicial_Anuncio">Anúncio</h3>
                                    </div>
                                    <hr className="line mx-4"/>
                                    <FormCreateFreelance1
                                        nextStep={this.nextStep}
                                        handleChange={this.handleChange}
                                        valores={valores}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div>
                        <div className="container-fluid Criar_Freelance pl-0 pr-0">
                            <div className="row col-12 mb-0 mr-0 ml-0 pr-0 pl-0 justify-content-center">
                                {this.state.TipoAnuncio == "3D e Animação" ?
                                    <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Img3D})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                        <div className="Criar_Freelance_Inicial_Centrar">
                                            <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                            <span
                                                className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                        </div>
                                    </div>
                                    :
                                    this.state.TipoAnuncio == "Artes Performativas" ?
                                        <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ArtesPerformativas})`, backgroundSize: "cover"}}>
                                            <div className="Criar_Freelance_Inicial_Centrar">
                                                <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                <span
                                                    className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                            </div>
                                        </div>
                                        :
                                        this.state.TipoAnuncio == "Cinema e Vídeo" ?
                                            <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${CinemaVideo})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                <div className="Criar_Freelance_Inicial_Centrar">
                                                    <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                    <span
                                                        className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                </div>
                                            </div>
                                            :
                                            this.state.TipoAnuncio == "Desenho e Ilustrações" ?
                                                <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${DesenhoIlustracao})`, backgroundPosition: "center"}}>
                                                    <div className="Criar_Freelance_Inicial_Centrar">
                                                        <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                        <span
                                                            className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                    </div>
                                                </div>
                                                :
                                                this.state.TipoAnuncio == "Design de Produtos" ?
                                                    <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${DesignProduto})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                        <div className="Criar_Freelance_Inicial_Centrar">
                                                            <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                            <span
                                                                className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                        </div>
                                                    </div>
                                                    :
                                                    this.state.TipoAnuncio == "Fotografia" ?
                                                        <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Fotografia})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                            <div className="Criar_Freelance_Inicial_Centrar">
                                                                <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                                <span
                                                                    className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                            </div>
                                                        </div>
                                                        :
                                                        this.state.TipoAnuncio == "Música" ?
                                                            <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Music})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                                <div className="Criar_Freelance_Inicial_Centrar">
                                                                    <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                                    <span
                                                                        className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                </div>
                                                            </div>
                                                            :
                                                            this.state.TipoAnuncio == "Pintura" ?
                                                                <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Pintura})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                                    <div className="Criar_Freelance_Inicial_Centrar">
                                                                        <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                                        <span
                                                                            className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                    </div>
                                                                </div>
                                                                :
                                                                this.state.TipoAnuncio == "Programação" ?
                                                                    <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Programacao})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                                        <div className="Criar_Freelance_Inicial_Centrar">
                                                                            <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                                            <span
                                                                                className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    this.state.TipoAnuncio == "Artes Plásticas" ?
                                                                        <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ArtesPlasticas})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                                            <div className="Criar_Freelance_Inicial_Centrar">
                                                                                <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                                                <span
                                                                                    className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        this.state.TipoAnuncio == "Design Gráfico" ?
                                                                            <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${DesignGrafico})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                                                <div className="Criar_Freelance_Inicial_Centrar">
                                                                                    <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                                                    <span
                                                                                        className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                                </div>
                                                                            </div>
                                                                            :
                                                                            <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{background:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Outros})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                                                                <div className="Criar_Freelance_Inicial_Centrar">
                                                                                    <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Freelance</h1>
                                                                                    <span
                                                                                        className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                                </div>
                                                                            </div>
                                }

                                <div className="Criar_Freelance_Meio_2 col-11 col-md-10 col-lg-8 justify-content-center p-4 mb-4">
                                    <div className="Criar_Freelance_Meio_2_Inicial row">
                                        <h2 className="Criar_Freelance_Meio_2_Inicial_Titulo">{valores.TipoAnuncio}</h2>
                                        <h3 className="Criar_Freelance_Meio_2_Inicial_Anuncio">Publicar</h3>
                                    </div>
                                    <hr className="line mx-4"/>
                                    <FormCreateFreelance2
                                        prevStep={this.prevStep}
                                        nextStep={this.nextStep}
                                        handleChange={this.handleChange}
                                        valores={valores}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    }

}

export default CreateFreelance2