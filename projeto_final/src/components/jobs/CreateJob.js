import React from 'react';
import '../../App.css';
import Notas from '../../Imgs/Apontar_Notas.png';
import Cumprimento from '../../Imgs/Cumprimento.png';
import Pesquisa from '../../Imgs/Pesquisa_User.png';
import Projetos from '../../Imgs/projetos.jpg';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class CreateJob1 extends React.Component{
    render() {

        const {auth} = this.props;

        if(!auth.uid) return <Redirect to='/entrar'/>

        return (
            <div>
                <div className="container-fluid Criar_Freelance pr-0 pl-0">
                    <div className="row col-12 mb-0 mr-0 ml-0 pr-0 pl-0 justify-content-center">
                        <div className="col-12 Criar_Freelance_Inicial mt-4 mb-4">
                            <h1 className="Criar_Freelance_Titulo">Criar Anúncio de Emprego</h1>
                            <span className="Criar_Freelance_Texto">Como funciona o processo de contratação?</span>
                        </div>

                        <div className="Criar_Freelance_Meio col-12 justify-content-center row mr-0 ml-0 pr-0 pl-0">
                            <div className="col-md-12 col-lg-2 pt-md-0 pt-lg-5 Criar_Freelance_Meio_Itens">
                                <span><img src={Notas}/></span>
                                <span className="Criar_Freelance_Meio_Texto">Escolhe a área de trabalho</span>
                                <span className="Criar_Freelance_Meio_Texto2">Depois de escolheres a área de trabalho, preenche os campos do nosso formulário de acordo com o que necessitas.</span>
                            </div>
                            <div className="col-md-12 col-lg-2 pt-md-0 pt-lg-5 Criar_Freelance_Meio_Itens ml-lg-5 mr-lg-5">
                                <span><img src={Pesquisa}/></span>
                                <span className="Criar_Freelance_Meio_Texto">Recebe várias candidaturas</span>
                                <span className="Criar_Freelance_Meio_Texto2">Recebe diferentes candidaturas, compara-as e estuda bem cada perfil.</span>
                            </div>
                            <div className="col-md-12 col-lg-2 pt-md-0 pt-lg-5 Criar_Freelance_Meio_Itens">
                                <span><img src={Cumprimento}/></span>
                                <span className="Criar_Freelance_Meio_Texto">Contrata o teu profissional</span>
                                <span className="Criar_Freelance_Meio_Texto2">No fim de tudo, contrata o melhor Profissional para ajudar a tua empresa a crescer!</span>
                            </div>
                        </div>

                        <div className="Criar_Freelance_Final col-12 row justify-content-center mr-0 ml-0 pr-0 pl-0 mt-2">
                            <div className="col-lg-3 d-none d-xl-block">
                                <img src={Projetos} className="Criar_Freelance_Final_Imagem"/>
                            </div>
                            <div className="col-sm-12 col-lg-7 row Criar_Freelance_Final_Escolha">
                                <span className="col-12 text-center Criar_Freelance_Final_Escolha_Titulo">Escolha a área de atuação necessária</span>
                                <span className="row m-0 p-0 col-12 fila_botoes mt-3">
                                    <div className="col-6 col-md-4">
                                        <Link to={{
                                            pathname: "/empregos/criar/3DAnimacao",
                                            state: {
                                                valor: "3D e Animação"
                                            }
                                        }}>
                                            <button className="Escolha_Area col-12">3D e Animação</button>
                                        </Link>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <Link to={{
                                            pathname: "/empregos/criar/ArtesPerformativas",
                                            state: {
                                                valor: "Artes Performativas"
                                            }
                                        }}>
                                            <button className="Escolha_Area col-12">Artes Performativas</button>
                                        </Link>
                                    </div>
                                    <span className="col-6 col-md-4">
                                        <Link to={{
                                            pathname: "/empregos/criar/ArtesPlasticas",
                                            state: {
                                                valor: "Artes Plásticas"
                                            }
                                        }}>
                                            <button className="Escolha_Area col-12">Artes Plásticas</button>
                                        </Link>
                                    </span>
                                    <div className="col-6 col-md-4">
                                        <Link to={{
                                            pathname: "/empregos/criar/CinemaVideo",
                                            state: {
                                                valor: "Cinema e Vídeo"
                                            }
                                        }}>
                                            <button className="Escolha_Area mt-3 col-12">Cinema e vídeo</button>
                                        </Link>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <Link to={{
                                            pathname: "/empregos/criar/DesenhoIlustracoes",
                                            state: {
                                                valor: "Desenho e Ilustrações"
                                            }
                                        }}>
                                            <button className="Escolha_Area mt-3 col-12">Desenho e Ilustrações</button>
                                        </Link>
                                    </div>
                                    <span className="col-6 col-md-4">
                                        <Link to={{
                                            pathname: "/empregos/criar/DesignGrafico",
                                            state: {
                                                valor: "Design Gráfico"
                                            }
                                        }}>
                                            <button className="Escolha_Area mt-3 col-12">Design Gráfico</button>
                                        </Link>
                                    </span>
                                    <div className="col-6 col-md-4">
                                        <Link to={{
                                            pathname: "/empregos/criar/DesignProdutos",
                                            state: {
                                                valor: "Design de Produtos"
                                            }
                                        }}>
                                            <button className="Escolha_Area mt-3 col-12">Design de Produtos</button>
                                        </Link>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <Link to={{
                                            pathname: "/empregos/criar/Fotografia",
                                            state: {
                                                valor: "Fotografia"
                                            }
                                        }}>
                                            <button className="Escolha_Area mt-3 col-12">Fotografia</button>
                                        </Link>
                                    </div>
                                    <span className="col-6 col-md-4">
                                        <Link to={{
                                            pathname: "/empregos/criar/Musica",
                                            state: {
                                                valor: "Música"
                                            }
                                        }}>
                                            <button className="Escolha_Area mt-3 col-12">Música</button>
                                        </Link>
                                    </span>
                                    <div className="col-6 col-md-4">
                                        <Link to={{
                                            pathname: "/empregos/criar/Pintura",
                                            state: {
                                                valor: "Pintura"
                                            }
                                        }}>
                                            <button className="Escolha_Area mt-3 col-12">Pintura</button>
                                        </Link>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <Link to={{
                                            pathname: "/empregos/criar/Programacao",
                                            state: {
                                                valor: "Programação"
                                            }
                                        }}>
                                            <button className="Escolha_Area mt-3 col-12">Programação</button>
                                        </Link>
                                    </div>
                                    <span className="col-6 col-md-4">
                                        <Link to={{
                                            pathname: "/empregos/criar/OutrosTrabalhos",
                                            state: {
                                                valor: "Outros Trabalhos"
                                            }
                                        }}>
                                            <button className="Escolha_Area mt-3 col-12">Outros Trabalhos</button>
                                        </Link>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );    
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(CreateJob1)