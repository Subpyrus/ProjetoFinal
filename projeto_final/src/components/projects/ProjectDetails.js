import React from 'react';
import {Modal} from "react-bootstrap";
import Imagem from '../../Imgs/Perfil.jpg';
import Coracao from '../../Imgs/heart-regular.svg';
import Coracao2 from '../../Imgs/heart-solid.svg'
import {Link} from "react-router-dom";
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {firestoreConnect} from "react-redux-firebase";
import Info from './InfoList';
import {storage} from "../../config/fbConfig";
import FasesList from "./FasesList";
import  { addVis } from '../../store/actions/projectActions'
import { addComment } from '../../store/actions/projectActions'
import { add_remFav } from '../../store/actions/authActions';
import { addLike } from '../../store/actions/projectActions';
import ComentariosList from './ComentariosList'
import moment from 'moment'


class ProjectDetails extends React.Component {
    constructor(props) {
        super(props);
        //console.log(props.match);
        this.state = {
            setShowM: false,
            setShowC: false,
            src_Img: Coracao,
            imagem: "",
            imagem2: "",
            comentario:""
        }
    }

    componentDidMount() {
        const {auth, projects, users} = this.props;
        for (var a in projects) {
            if(projects[a].id == this.props.match.params.id){
                let valor = {
                    vis:projects[a].Vis + 1 ,
                    id:projects[a].id
                }
                this.props.addVis(valor);
            }
        }
    }


    handleComment = ()  => {
        const {auth,projects} = this.props;
        let obj = {
            id: this.props.match.params.id,
            comment: []
        }
        for (var a in projects) {
            if(projects[a].id == this.props.match.params.id){
                obj.comment.push(...projects[a].Comments)
            }
        }
        obj.comment.push({
            id: auth.uid,
            comment:this.state.comentario
        })
        this.props.addComment(obj);
        document.getElementById('comentario').value="";        
        this.setState({
            comentario:""
        })
    }

    handleFav = () => {
        const {auth,users, projects} = this.props;
        let obj = {
            idProj: [],
            idUser: auth.uid
        }
        for (var a in users) {
            if(users[a].id == auth.uid){
                obj.idProj.push(...users[a].Favoritos)
                for(var c in projects){
                    if(projects[c].id == this.props.match.params.id) {
                        if(users[a].id == projects[c].IdEmpregador) {
                            //teu projeto
                        }else{
                            if(users[a].Favoritos.length == 0) {
                                obj.idProj.push(this.props.match.params.id)
                            }else {
                                const isFavIn = (element) => element == this.props.match.params.id;
                                const indexArray = obj.idProj.findIndex(isFavIn)
                                if(indexArray == -1) {
                                    obj.idProj.push(this.props.match.params.id)
                                }else {
                                    obj.idProj.splice(indexArray,1)
                                }
                            }
                        }
                    }
                }
                
            } 
        }
        this.props.add_remFav(obj);
    }

    handleLike = ()  => {
        const {auth, projects} = this.props;
        let obj = {
            id: this.props.match.params.id,
            likes: 0,
            idLikes: []
        }

        for (var a in projects) {
            if(projects[a].id == this.props.match.params.id){
                obj.likes = projects[a].Likes
                obj.idLikes.push(...projects[a].idLikes)
            }
        }
        if(obj.idLikes.length == 0) {
            obj.idLikes.push(auth.uid)
            obj.likes = obj.likes +  1
        }else {
            const isFavIn = (element) => element == auth.uid;
            const indexArray = obj.idLikes.findIndex(isFavIn)
            if(indexArray == -1) {
                obj.idLikes.push(this.props.match.params.id)
                obj.likes = obj.likes +  1
            }else{
                console.log("ja deste")
            }
        }
        this.props.addLike(obj)
    }

    handleCloseM = () => {
        this.setState({setShowM: false})

    };
    handleShowM = () => {
        this.setState({setShowM: true})
    };

    getImage = (image) => {
        storage.ref('files').child(`${image}`).getDownloadURL().then((url) => {
            if (this.state.imagem == "") {
                this.setState({imagem: url})
            }
        })
    };
    getImage2 = (image) => {
        storage.ref('files').child(`${image}`).getDownloadURL().then((url) => {
            if (this.state.imagem2 == "") {
                this.setState({imagem2: url})
            }
        })
    };

    handleChange = input => e => {
        this.setState({comentario: e.target.value});
    };

    render() {
        const {auth, projects, users} = this.props;
        return (
            <div className="Proj_Det_Body container-fluid row col-12 justify-content-center m-0 p-0">
                {projects && projects.map(dados => {
                    if (dados.id === this.props.match.params.id) {
                        return (
                            <span className="col-lg-10 col-md-12">
                            <div className="Proj_Det_Conteudo pl-0 pl-sm-5 pr-sm-5 pr-0">
                                <div className="row col-12">
                                    <div className="d-flex flex-column col-md-12 col-lg-9">
                                        <h2 className="Proj_Det_Titulo">{dados.nomeProjeto}
                                            {users && users.map(info => {
                                                if(info.id === dados.IdEmpregador){
                                                    return(
                                                        <span className="Proj_nome_uti"> @{info.FirstName} {info.LastName}</span>
                                                    )
                                                }
                                            })}
                                        </h2>
                                        <div className="Proj_Det_Subtitulo d-none d-md-block mt-md-1 mt-lg-4 mb-4">
                                            <section className="Proj_Det_Subtitulo_Parte1 mt-3">
                                                <span className="Areas_Trabalho_Proj_Det mr-4">
                                                    {dados.areaTrabalho === "3DAnimacao" ?
                                                        "3D e Animação"
                                                        :
                                                        dados.areaTrabalho === "ArtesPerfomativas" ?
                                                            "Artes Perfomativas"
                                                            :
                                                            dados.areaTrabalho === "ArtesPlasticas" ?
                                                                "Artes Plásticas"
                                                                :
                                                                dados.areaTrabalho === "CinemaVideo" ?
                                                                    "Cinema e Vídeo"
                                                                    :
                                                                    dados.areaTrabalho === "DesenhoIlustracao" ?
                                                                        "Desenho e Ilustração"
                                                                        :
                                                                        dados.areaTrabalho === "DesignGrafico" ?
                                                                            "Design Gráfico"
                                                                            :
                                                                            dados.areaTrabalho === "DesignProdutos" ?
                                                                                "Design Produtos"
                                                                                :
                                                                                dados.areaTrabalho === "Fotografia" ?
                                                                                    "Fotografia"
                                                                                    :
                                                                                    dados.areaTrabalho === "Pintura" ?
                                                                                        "Pintura"
                                                                                        :
                                                                                        dados.areaTrabalho === "Programacao" ?
                                                                                            "Programação"
                                                                                            :
                                                                                            dados.areaTrabalho === "Musica" ?
                                                                                                "Música"
                                                                                                :
                                                                                                "Outros Trabalhos"

                                                    }
                                                </span>
                                            </section>
                                        </div>
                                    </div>
                                    <div className="align-items-lg-end d-flex flex-column col-md-12 col-lg-3">
                                        {dados.fases.length > 0 ?
                                            <button className="Criador_But_Ver_Perfil mt-sm-3 mt-md-2"
                                                    onClick={this.handleShowM}>Fases do Projeto
                                            </button>
                                            :
                                            <button className="Criador_But_Ver_Perfil_2 mt-sm-3 mt-md-2"
                                                    disabled>Fases do Projeto
                                            </button>
                                        }
                                        <div className="Proj_Det_Subtitulo_Parte2 align-items-lg-end
                                        d-flex flex-lg-column flex-md-row mt-4">
                                            <span className="mt-md-1 mt-lg-0 d-none d-lg-block">{moment(dados.ListingTime.toDate()).format('L')}</span>
                                            <span className="mt-1">
                                        <i className="fa fa-eye fa-lg mr-1"/><span className="mr-3">{dados.Vis}</span>
                                                {auth.uid ?
                                                    <span><i className="fa fa-heart-o fa-lg mr-1" onClick={this.handleLike}/><span className="mr-3">{dados.Likes}</span></span>
                                                    :
                                                    <span><i className="fa fa-heart-o fa-lg mr-1" disabled/><span className="mr-3">{dados.Likes}</span></span>
                                                }
                                        <i className="fa fa-comment-o fa-lg mr-1"/><span className="mr-3">{dados.Comments.length}</span>
                                                {auth.uid ?
                                                    <span  onClick={this.handleFav}>
                                                        <i className="fa fa-star-o fa-lg"/>
                                                    </span>
                                                    :
                                                    <span className="d-none">
                                                        nada
                                                    </span>
                                                }
                                        </span>
                                        </div>
                                    </div>
                                </div>

                                <hr className="hr"/>

                                <div className="Proj_Det_Main mt-4 mb-4">
                                    {dados.conteudo && dados.conteudo.map(conteudo => {
                                        return (
                                            <Info tipo={conteudo.Tipo} ficheiro={conteudo.Ficheiro}/>
                                        )
                                    })}
                                </div>
                                {auth.uid ?
                                    <hr className="hr"/>
                                    :
                                    <hr className="hr d-none"/>
                                }
                                {auth.uid ?
                                    <div className="Proj_Det_Likes justify-content-center mt-5 mb-4">
                                        <img className="like" onClick={this.handleLike} src={this.state.src_Img} width="75px" height="75px"/>
                                        <h1 className="ml-3 Proj_Det_Nr_Likes">{dados.Likes}</h1>
                                    </div>
                                    :
                                    <div></div>
                                }

                                {dados.ferramentas !== "" || dados.empresasProjeto !== "" ?
                                    <hr className="hr"/>
                                    :
                                    <hr className="hr d-none"/>
                                }
                                {dados.ferramentas !== "" || dados.empresasProjeto !== "" ?
                                    <div className="Proj_Det_Infos_final mt-4 mb-4">
                                        {dados.ferramentas !== "" ?
                                            <span className="Proj_Det_Infos_final">
                                                <span className="Proj_Det_Infos_final_Texto">Ferramentas:</span>
                                                <span>{dados.ferramentas}</span>
                                            </span>
                                            :
                                            <span className="d-none">
                                                <span className="Proj_Det_Infos_final_Texto">Ferramentas:</span>
                                                <span>{dados.ferramentas}</span>
                                            </span>
                                        }
                                        {dados.empresasProjeto !== "" ?
                                            <span className="Proj_Det_Infos_final">
                                                <span className="Proj_Det_Infos_final_Texto">Empresas:</span>
                                                <span>{dados.empresasProjeto}</span>
                                            </span>
                                            :
                                            <span className="d-none">
                                                <span className="Proj_Det_Infos_final_Texto">Empresas:</span>
                                                <span>{dados.empresasProjeto}</span>
                                            </span>
                                        }
                                    </div>
                                    :
                                    <div className="Proj_Det_Infos_final mt-4 mb-4 d-none">
                                        <span>nada</span>
                                    </div>
                                }

                                <hr className="hr"/>

                                <div className="Proj_Det_Info d-flex flex-md-row col-12 mt-4 mb-4 pr-sm-0">
                                    <div className="col-md-3 d-none d-md-block">
                                        {users && users.map(info => {
                                            if (info.id === dados.IdEmpregador) {
                                                this.getImage(info.ImagemPerfil);
                                                return (
                                                    <img src={this.state.imagem} className="w-100 h-auto imgperfilproj"/>
                                                )
                                            }
                                        })}
                                    </div>
                                    {users && users.map(info => {
                                        if (info.id === dados.IdEmpregador) {
                                            return (
                                                <div className="col-md-2 Proj_Det_Info1 pl-sm-2">
                                                    <h3 className="nome_uti">{info.FirstName} {info.LastName}</h3>
                                                    <span className="mb-1" style={{color: "#D56D00"}}>
                                                    {info.AreaTrabalho === "3DAnimacao" ?
                                                        "3D e Animação"
                                                        :
                                                        info.AreaTrabalho === "ArtesPerfomativas" ?
                                                            "Artes Perfomativas"
                                                            :
                                                            info.AreaTrabalho === "ArtesPlasticas" ?
                                                                "Artes Plásticas"
                                                                :
                                                                info.AreaTrabalho === "CinemaVideo" ?
                                                                    "Cinema e Vídeo"
                                                                    :
                                                                    info.AreaTrabalho === "DesenhoIlustracao" ?
                                                                        "Desenho e Ilustração"
                                                                        :
                                                                        info.AreaTrabalho === "DesignGrafico" ?
                                                                            "Design Gráfico"
                                                                            :
                                                                            info.AreaTrabalho === "DesignProdutos" ?
                                                                                "Design Produtos"
                                                                                :
                                                                                info.AreaTrabalho === "Fotografia" ?
                                                                                    "Fotografia"
                                                                                    :
                                                                                    info.AreaTrabalho === "Pintura" ?
                                                                                        "Pintura"
                                                                                        :
                                                                                        info.AreaTrabalho === "Programacao" ?
                                                                                            "Programação"
                                                                                            :
                                                                                            info.AreaTrabalho === "Musica" ?
                                                                                                "Música"
                                                                                                :
                                                                                                "Outros Trabalhos"

                                                    }
                                                </span>
                                                    <span className="mb-1">
                                                    {info.Local === "Braganca" ?
                                                        "Bragança"
                                                        :
                                                        info.Local === "CasteloBranco" ?
                                                            "Castelo Branco"
                                                            :
                                                            info.Local === "Evora" ?
                                                                "Évora"
                                                                :
                                                                info.Local === "Santarem" ?
                                                                    "Santarém"
                                                                    :
                                                                    info.Local === "Setubal" ?
                                                                        "Setúbal"
                                                                        :
                                                                        info.Local === "VianaCastelo" ?
                                                                            "Viana do Castelo"
                                                                            :
                                                                            info.Local === "VilaReal" ?
                                                                                "Vila Real"
                                                                                :
                                                                                info.Local
                                                    }
                                                </span>
                                                </div>
                                            )
                                        }
                                    })}
                                    {users && users.map(info => {
                                        if (info.id === dados.IdEmpregador) {
                                            return(
                                                <div className="col-md-7 Proj_Det_Info1 d-none d-sm-block">
                                                    <h4 className="mb-3 Proj_Det_Info_Texto">
                                                        {info.Descricao}
                                                    </h4>
                                                    <span className="Proj_Det_Info_Texto2">{info.Ocupation}.</span>
                                                    <br/>
                                                    <span className="Proj_Det_Info_Texto2">Visita o
                                                    <b><Link to={`/perfil/utilizador/${info.id}`} className="navegar"> meu perfil </Link></b>
                                                    para veres os meus outros projetos.</span>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>

                                <hr className="hr"/>

                                {auth.uid ?
                                    <div className="Proj_Det_Comentarios mt-4 mb-2">
                                        <h3 className="nome_uti pl-2 pl-md-0">Comentários</h3>
                                        {users && users.map(dados => {
                                            if (dados.id === auth.uid){
                                                this.getImage2(dados.ImagemPerfil);
                                                return(
                                                    <div className="row justify-content-center">
                                                        <div className="col-2 text-center d-none d-lg-block pr-0">
                                                            <img src={this.state.imagem2} style={{width: "75%"}}/>
                                                        </div>
                                                        <div className="col-11 col-md-10 col-lg-7 my-auto pl-0 text-right">
                                                            <div className="input-field col-12">
                                                                <textarea
                                                                    id="comentario"
                                                                    className="materialize-textarea"
                                                                    maxLength="400"
                                                                    onChange={this.handleChange('comentario')}
                                                                />
                                                                <label htmlFor="comentario" className="col-12">Deixar Comentário</label>
                                                                <button
                                                                    className="btn btnIn"
                                                                    type="button"
                                                                    id="nextBtn"
                                                                    onClick={this.handleComment}>
                                                                    Publicar
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        }
                                        )}
                                    </div>
                                    :
                                    <div className="Proj_Det_Comentarios justify-content-center mt-4 mb-2 ml-2 ml-md-0">
                                        <span className="Proj_Det_Texto_Registar">Para deixares aqui o teu comentário
                                            <b><Link to="/entrar" className="navegar"> entra</Link></b> na tua conta ou
                                            <b><Link to="/registar" className="navegar"> cria uma conta</Link></b>.
                                        </span>
                                    </div>
                                }
                                    <div className="seccao_comentarios">
                                        {dados.Comments.map(info => {
                                            return(
                                                <ComentariosList info={info} users={users}/>
                                            )
                                        })}
                                    </div>
                            </div>
                                <div id="myModal" className="modal fade">
                                    <Modal
                                        className="bg-transparent mh-100"
                                        size="xl"
                                        show={this.state.setShowM}
                                        onHide={this.handleCloseM}
                                        backdrop="static"
                                        keyboard={false}
                                        aria-labelledby="example-custom-modal-styling-title">
                                        <Modal.Header closeButton>
                                            <Modal.Title id="example-custom-modal-styling-title"
                                                         className="titulomodal">
                                                Fases do Projeto</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body id="modalbody">
                                            <div className="container p-0 mt-3 cont-fases">
                                                <ul className="timeline">
                                                    {dados.fases && dados.fases.map((info, index) =>{
                                                        console.log(info);
                                                        if (((index+1) % 2 !== 0)){
                                                            return(
                                                                <li>
                                                                    <div className="timeline-badge primary">
                                                                    </div>
                                                                    <FasesList tipo={info.Tipo} index={(index)} info={info}/>
                                                                </li>
                                                            )
                                                        } else {
                                                            return (
                                                                <li className="timeline-inverted">
                                                                    <div className="timeline-badge primary">
                                                                    </div>
                                                                    <div className="timeline-panel ml-5">
                                                                        <FasesList tipo={info.Tipo} index={(index)} info={info}/>
                                                                    </div>
                                                                </li>
                                                            )
                                                        }
                                                    })}
                                                    <li className="clearfix" style={{float: 'none'}}></li>
                                                </ul>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>

                            </span>
                        )
                    }
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        auth: state.firebase.auth,
        projects: state.firestore.ordered.projects,
        users: state.firestore.ordered.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addVis: (valor) => dispatch(addVis(valor)),
        addComment: (obj) => dispatch(addComment(obj)),
        add_remFav: (obj) => dispatch(add_remFav(obj)),
        addLike: (obj) => dispatch(addLike(obj))
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'projects'},
        {collection: 'users'}
    ])
)(ProjectDetails);