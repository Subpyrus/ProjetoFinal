import React from 'react';
import '../../App.css';
import FormCreateEmprego1 from '../forms/FormCreateEmprego1';
import FormCreateEmprego2 from '../forms/FormCreateEmprego2';
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

class CreateJob2 extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        TipoAnuncio: this.props.location.state.valor,
        Step: 1,
        NomeAnuncio: '',
        Salario: '',
        TipoTrabalho: '',
        NumeroCandidatos: '',
        AreaTrabalho:'',
        Descricao: '',
        Localizacao: '',
        Requisitos: '',
        Beneficios: ''
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

        const { Step } = this.state;
        const {TipoAnuncio, NomeAnuncio, Salario, TipoTrabalho, NumeroCandidatos, AreaTrabalho, Descricao, Localizacao, Requisitos, Beneficios} = this.state;
        const valores = {TipoAnuncio, NomeAnuncio, Salario, TipoTrabalho, NumeroCandidatos, AreaTrabalho, Descricao, Localizacao, Requisitos, Beneficios};

        switch (Step) {
            case 1:
                return (
                    <div>
                        <div className="container-fluid Criar_Freelance pl-0 pr-0">
                            <div className="row col-12 mb-0 mr-0 ml-0 pr-0 pl-0 justify-content-center">
                                {this.state.TipoAnuncio == "3D e Animação" ?
                                    <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{backgroundImage: `url(${Img3D})`, backgroundPosition: "center"}}>
                                        <div className="Criar_Freelance_Inicial_Centrar">
                                            <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio de Emprego</h1>
                                            <span
                                                className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                        </div>
                                    </div>
                                    :
                                    this.state.TipoAnuncio == "Artes Performativas" ?
                                        <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{backgroundImage: `url(${ArtesPerformativas})`}}>
                                            <div className="Criar_Freelance_Inicial_Centrar">
                                                <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio de Emprego</h1>
                                                <span
                                                    className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                            </div>
                                        </div>
                                        :
                                        this.state.TipoAnuncio == "Cinema e Vídeo" ?
                                            <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{backgroundImage: `url(${CinemaVideo})`, backgroundPosition: "center"}}>
                                                <div className="Criar_Freelance_Inicial_Centrar">
                                                    <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio de Emprego</h1>
                                                    <span
                                                        className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                </div>
                                            </div>
                                            :
                                            this.state.TipoAnuncio == "Desenho e Ilustrações" ?
                                                <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{backgroundImage: `url(${DesenhoIlustracao})`, backgroundPosition: "center"}}>
                                                    <div className="Criar_Freelance_Inicial_Centrar">
                                                        <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio de Emprego</h1>
                                                        <span
                                                            className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                    </div>
                                                </div>
                                                :
                                                this.state.TipoAnuncio == "Design de Produtos" ?
                                                    <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{backgroundImage: `url(${DesignProduto})`, backgroundPosition: "center"}}>
                                                        <div className="Criar_Freelance_Inicial_Centrar">
                                                            <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio de Emprego</h1>
                                                            <span
                                                                className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                        </div>
                                                    </div>
                                                    :
                                                    this.state.TipoAnuncio == "Fotografia" ?
                                                        <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{backgroundImage: `url(${Fotografia})`, backgroundPosition: "center"}}>
                                                            <div className="Criar_Freelance_Inicial_Centrar">
                                                                <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio de Emprego</h1>
                                                                <span
                                                                    className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                            </div>
                                                        </div>
                                                        :
                                                        this.state.TipoAnuncio == "Música" ?
                                                            <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{backgroundImage: `url(${Music})`, backgroundPosition: "center"}}>
                                                                <div className="Criar_Freelance_Inicial_Centrar">
                                                                    <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio de Emprego</h1>
                                                                    <span
                                                                        className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                </div>
                                                            </div>
                                                            :
                                                            this.state.TipoAnuncio == "Pintura" ?
                                                                <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{backgroundImage: `url(${Pintura})`, backgroundPosition: "center"}}>
                                                                    <div className="Criar_Freelance_Inicial_Centrar">
                                                                        <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio de Emprego</h1>
                                                                        <span
                                                                            className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                    </div>
                                                                </div>
                                                                :
                                                                this.state.TipoAnuncio == "Programação" ?
                                                                    <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{backgroundImage: `url(${Programacao})`, backgroundPosition: "center"}}>
                                                                        <div className="Criar_Freelance_Inicial_Centrar">
                                                                            <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio de Emprego</h1>
                                                                            <span
                                                                                className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    this.state.TipoAnuncio == "Artes Plásticas" ?
                                                                        <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{backgroundImage: `url(${ArtesPlasticas})`, backgroundPosition: "center"}}>
                                                                            <div className="Criar_Freelance_Inicial_Centrar">
                                                                                <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio de Emprego</h1>
                                                                                <span
                                                                                    className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        this.state.TipoAnuncio == "Design Gráfico" ?
                                                                            <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{backgroundImage: `url(${DesignGrafico})`, backgroundPosition: "center"}}>
                                                                                <div className="Criar_Freelance_Inicial_Centrar">
                                                                                    <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio de Emprego</h1>
                                                                                    <span
                                                                                        className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                                </div>
                                                                            </div>
                                                                            :
                                                                            <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0" style={{backgroundImage: `url(${Outros})`, backgroundPosition: "center"}}>
                                                                                <div className="Criar_Freelance_Inicial_Centrar">
                                                                                    <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio de Emprego</h1>
                                                                                    <span
                                                                                        className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                                                                </div>
                                                                            </div>

                                }

                                <div className="Criar_Freelance_Meio_2 col-8 justify-content-center p-4 mb-4">
                                    <div className="Criar_Freelance_Meio_2_Inicial row">
                                        <h2 className="Criar_Freelance_Meio_2_Inicial_Titulo">{valores.TipoAnuncio}</h2>
                                        <h3 className="Criar_Freelance_Meio_2_Inicial_Anuncio">Anúncio</h3>
                                    </div>
                                    <hr className="line mx-4"/>
                                    <FormCreateEmprego1
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
                                <div className="col-12 Criar_Freelance_Inicial_2 justify-content-center pr-0 pl-0">
                                    <div className="Criar_Freelance_Inicial_Centrar">
                                        <h1 className="Criar_Freelance_Titulo_2">Criar Anúncio Emprego</h1>
                                        <span
                                            className="Criar_Freelance_Texto_2">Vais encontrar os melhores profissionais aqui!</span>
                                    </div>
                                </div>

                                <div className="Criar_Freelance_Meio_2 col-8 justify-content-center p-4 mb-4">
                                    <div className="Criar_Freelance_Meio_2_Inicial row">
                                        <h2 className="Criar_Freelance_Meio_2_Inicial_Titulo">{valores.TipoAnuncio}</h2>
                                        <h3 className="Criar_Freelance_Meio_2_Inicial_Anuncio">Publicar</h3>
                                    </div>
                                    <hr className="line mx-4"/>
                                    <FormCreateEmprego2
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



export default CreateJob2