import React from 'react';
import '../../App.css';
import C_Projetos from '../../Imgs/C_Projetos.png';
import C_Empregos from '../../Imgs/C_Empregos.png';
import C_Freelance from '../../Imgs/C_Freelance.png';
import C_Criadores from '../../Imgs/C_Criadores.png';
import Logo from '../../Imgs/logo.png';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class Pag_Principal extends React.Component {
    render() {

        const {auth} = this.props;
        
        return (
            <div className="pagP container-fluid m-0 p-0">
                <div className="inicial row m-0 p-0 justify-content-center">
                    <span className="col-4 text-center pt-3 pt-lg-0 d-none d-lg-block" style={{width: "100%"}}>
                        <img src={Logo} alt="" className="P_Ini_Logo m-auto"/>
                    </span>
                    <div className="col-lg-6 text-center text-lg-left justify-content-lg-start P_Ini_seg">
                        {auth.uid ?
                        <span className="P_Ini_texto2">Bem Vindos à Colmeia de Criadores Artísticos</span>
                            :
                            <span className="P_Ini_texto">Bem Vindos à Colmeia de Criadores Artísticos</span>
                        }
                        {auth.uid ?
                        <Link to="/registo">
                            <button className="P_Ini_button d-none" data-hover="Junta-te a Nós!">
                                <div>Criar Perfil</div>
                            </button>
                        </Link>
                            :
                            <Link to="/registo">
                                <button className="P_Ini_button" data-hover="Junta-te a Nós!">
                                    <div>Criar Perfil</div>
                                </button>
                            </Link>
                        }
                    </div>
                </div>
                <div className="row conteudo1 m-0">
                    <div className="texto col-md-5 col-sm-12">
                        <h1 className="font-weight-bold">Projetos</h1>
                        <p className="Texto_P_Princ">Projetos é a montra de trabalhos, de todo o teu portfólio. A
                            Hinamic oferece-te a melhor
                            oportunidade para promoveres o teu trabalho. Não percas mais tempo e partilha as tuas
                            criações para ganhares notoriedade!</p>
                        <Link to="/projetos">
                            <button className="P_Ini_button_P">Ver Projetos</button>
                        </Link>
                    </div>
                    <div className="text-center mr-4 col-md-5 d-none d-md-block">
                        <img className="Cartoon" alt="" src={C_Projetos} width="290px" height="290px"/>
                    </div>
                </div>
                <div className="conteudo2 row m-0">
                    <div className="text-center col-md-5 d-none d-md-block">
                        <img className="Cartoon2" alt="" src={C_Criadores} width="290px" height="290px"/>
                    </div>
                    <div className="texto2 col-md-5 col-sm-12">
                        <h1 className="font-weight-bold">Criadores</h1>
                        <p className="Texto_P_Princ">Aqui encontrarás Criadores de diferentes áreas: Design, Música,
                            Programação, Cinema,
                            Fotografia, entre outras. Quem sabe se não encontras por aqui um parceiro de trabalho!</p>
                        <Link to="/criadores">
                            <button className="P_Ini_button_P">Ver Criadores</button>
                        </Link>
                    </div>
                </div>
                <div className="conteudo1 row m-0">
                    <div className="texto col-md-5 col-sm-12">
                        <h1 className="font-weight-bold">Freelance</h1>
                        <p className="Texto_P_Princ">As abelhas trabalham em conjunto na sua colmeia. Na Hinamic
                            incentivamos o associativismo
                            entre Criadores. Quem sabe não terás a solução para outro Criador?</p>
                        <Link to="/freelance">
                            <button className="P_Ini_button_P">Ver Freelancers</button>
                        </Link>
                    </div>
                    <div className="text-center mr-4 col-md-5 d-none d-md-block">
                        <img className="Cartoon" alt="" src={C_Freelance} width="290px" height="290px"/>
                    </div>
                </div>
                <div className="conteudo2 row m-0">
                    <div className="text-center col-md-5 d-none d-md-block">
                        <img className="Cartoon2" alt="" src={C_Empregos} width="290px" height="290px"/>
                    </div>
                    <div className="texto2 col-md-5 col-sm-12">
                        <h1 className="font-weight-bold">Emprego</h1>
                        <p className="Texto_P_Princ">Para vos ajudar a construir o futuro podem procurar aqui
                            ofertas de trabalho, em diferentes empresas. O vosso futuro pode estar aqui!</p>
                        <Link to="/empregos">
                            <button className="P_Ini_button_P">Ver Empregos</button>
                        </Link>
                    </div>
                </div>
                <div className="final">
                    <div className="conteudo_final" style={{width: "100%"}}>
                        <h3 style={{color: "white", marginBottom: "40px"}} className="pr-3 pl-3"><i>"Somos uma colmeia vocacionada para a
                            promoção do vosso trabalho"</i></h3>
                        {auth.uid ?
                        <Link to="/registo">
                            <button className="P_Ini_button d-none" data-hover="Junta-te a Nós!">
                                <div>Criar Perfil</div>
                            </button>
                        </Link>
                            :
                            <Link to="/registo">
                                <button className="P_Ini_button" data-hover="Junta-te a Nós!">
                                    <div>Criar Perfil</div>
                                </button>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.firebase.authError,
    }
}

export default connect(mapStateToProps)(Pag_Principal);