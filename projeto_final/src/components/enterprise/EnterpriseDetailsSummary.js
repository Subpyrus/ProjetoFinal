import React from 'react';
import '../../App.css';
import perfil from "../../Imgs/Logo_Ubi.jpg";
import localizacao from "../../Imgs/map-marker-alt-solid.svg";
import {Link} from "react-router-dom";
import ListaEmpregosEmpresa from "./JobListEnterprise";
import {storage} from "../../config/fbConfig";


class EnterpriseDetailsSummary extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            imagemPerfil: ""
        };
    }

    getImage(image) {
        storage.ref('files').child(`${image}`).getDownloadURL().then((url) => {
            if (this.state.imagemPerfil == "") {
                this.state.imagemPerfil = url;
                this.setState(this.state);
                //console.log(this.state);
            }
        })
    }

    render() {
        const {users, id_user, id_pass, job} = this.props;
        console.log(users);
        this.getImage(users.ImagemPerfil);
        return (
            <div className="row mb-0">
                <div className="Perfil_Empresa_Inicial mb-0 col-12 justify-content-center pb-5 pb-lg-0">
                    <div className="Perfil_Empresa_Info_Inicial col-11 col-sm-10 col-md-9 m-lg-auto row mt-5 mx-auto">
                        <div className="col-sm-12 col-lg-4">
                                <span className="m-auto Perfil_Info_Inicial_Esq">
                                    <img src={this.state.imagemPerfil} className="Foto_Perfil_Empresa"/>
                                    {id_user === id_pass ?
                                        <Link to="/perfil/editar">
                                            <button className="Perfil_But_Seguir mt-5 text-uppercase">Editar perfil</button>
                                        </Link>
                                        :
                                        <button className="Perfil_But_Seguir mt-5 text-uppercase">Seguir</button>
                                    }
                                    <span className="mt-3">
                                        <img src={localizacao} className="Icone_Localizacao" height="20px"
                                             width="20px"/><span className="Perfil_Localizacao">
                                        {users.Local === "Braganca" ?
                                            "Bragança"
                                            :
                                            users.Local === "CasteloBranco" ?
                                                "Castelo Branco"
                                                :
                                                users.Local === "Evora" ?
                                                    "Évora"
                                                    :
                                                    users.Local === "Santarem" ?
                                                        "Santarém"
                                                        :
                                                        users.Local === "Setubal" ?
                                                            "Setúbal"
                                                            :
                                                            users.Local === "VianaCastelo" ?
                                                                "Viana do Castelo"
                                                                :
                                                                users.Local === "VilaReal" ?
                                                                    "Vila Real"
                                                                    :
                                                                    users.Local
                                        }
                                    </span>
                                    </span>
                                    <span className="mt-3 row">
                                        <span className="col-6 Perfil_Seguidores">
                                            <span className="Seguidores">200</span>
                                            <span className="Texto_Seguir">SEGUIDORES</span>
                                        </span>
                                        <span className="col-6 Perfil_Seguidores">
                                            <span className="Seguidores">63</span>
                                            <span className="Texto_Seguir">A SEGUIR</span>
                                        </span>
                                    </span>
                                </span>
                        </div>
                        <div className="col-sm-12 col-lg-7">
                                <span className="Perfil_Info_Inicial_Dir">
                                    <h3 className="Perfil_Info_Intro">Olá Profissionais</h3>
                                    <h1 className="Perfil_Info_Nome">Somos a {users.NomeEmpresa}</h1>
                                    <h3 className="Perfil_Info_Trabalho">
                                        {users.AreaTrabalho === "3DAnimacao" ?
                                            "3D e Animação"
                                            :
                                            users.AreaTrabalho === "ArtesPerfomativas" ?
                                                "Artes Perfomativas"
                                                :
                                                users.AreaTrabalho === "ArtesPlasticas" ?
                                                    "Artes Plásticas"
                                                    :
                                                    users.AreaTrabalho === "CinemaVideo" ?
                                                        "Cinema e Vídeo"
                                                        :
                                                        users.AreaTrabalho === "DesenhoIlustracao" ?
                                                            "Desenho e Ilustração"
                                                            :
                                                            users.AreaTrabalho === "DesignGrafico" ?
                                                                "Design Gráfico"
                                                                :
                                                                users.AreaTrabalho === "DesignProdutos" ?
                                                                    "Design Produtos"
                                                                    :
                                                                    users.AreaTrabalho === "Fotografia" ?
                                                                        "Fotografia"
                                                                        :
                                                                        users.AreaTrabalho === "Pintura" ?
                                                                            "Pintura"
                                                                            :
                                                                            users.AreaTrabalho === "Programacao" ?
                                                                                "Programação"
                                                                                :
                                                                                users.AreaTrabalho === "Musica" ?
                                                                                    "Música"
                                                                                    :
                                                                                    "Outros Trabalhos"

                                        }
                                    </h3>
                                    <span className="Perfil_Info_Texto mb-4">
                                        Nas bases de uma grande paixão pela tecnologia, começou a nossa história em 2007. Esta paixão cresceu, e com o tempo evoluiu para uma forte vontade de criar um futuro melhor para gerações futuras.
                                        A nossa equipa diversificou-se e os nossos parceiros impulsionaram a nossa jornada de constante desenvolvimento de soluções de software centradas no utilizador.
                                    </span>
                                    <span>
                                        <i className="fa fa-facebook fa-lg mr-3 icones_perfil"/>
                                        <i className="fa fa-linkedin fa-lg mr-3 icones_perfil"/>
                                        <i className="fa fa-instagram fa-lg mr-3 icones_perfil"/>
                                        <span className="Perfil_Website">website</span>
                                    </span>
                                    <span>
                                        <button className="Perfil_But_Seguir mt-4 mr-4" disabled>Enviar CV</button>
                                    </span>
                                </span>
                        </div>
                    </div>
                </div>
                <div className="Perfil_Projetos mb-0 col-12 justify-content-center">
                    <div className="Perfil_Info_Projetos row col-10 m-auto justify-content-center">
                                <span className="col-12">
                                    <h1 className="Titulo_Formacao_Empresa mb-4 mt-5">ANÚNCIOS DE EMPREGO</h1>
                                </span>
                        <div className="col-sm-12 col-lg-10 mt-4 mb-sm-2 mb-lg-4 ml-lg-5 m-auto text-center text-md-left">
                            <Link to="/empregos/criar">
                                <button className="Empresa_But_Criar_Anuncio mt-2 mb-3">+ NOVO ANÚNCIO</button>
                            </Link>
                            {job && job.map(dados => {
                                if (dados.IdUser === id_pass){
                                    return(
                                        <ListaEmpregosEmpresa info={dados}/>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default EnterpriseDetailsSummary;