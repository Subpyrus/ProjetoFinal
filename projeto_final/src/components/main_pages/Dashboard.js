import React from 'react';
import '../../App.css';
import C_Projetos from '../../Imgs/C_Projetos.png';
import C_Empregos from '../../Imgs/C_Empregos.png';
import C_Freelance from '../../Imgs/C_Freelance.png';
import C_Criadores from '../../Imgs/C_Criadores.png';
import Logo from '../../Imgs/logo.png';
import {Link} from 'react-router-dom'


class Pag_Principal extends React.Component {
    render() {
        return (
            <div className="pagP container-fluid ml-lg-0 pl-lg-0">
                <div className="inicial row justify-content-center">
                    <span className="col-lg-4 text-sm-center pr-0 mr-0">
                        <img src={Logo} width="auto" height="300px" className="P_Ini_Logo pl-4"/>
                    </span>
                    <div className="col-lg-6 pl-5 text-sm-center text-lg-left pl-lg-0 ml-lg-0 justify-content-sm-center justify-content-lg-start">
                        <span className="P_Ini_texto">Bem Vindos à Colmeia de Criadores Artísticos</span>
                        <Link to="/registo">
                            <button className="P_Ini_button">Criar Perfil</button>
                        </Link>
                    </div>
                </div>
                <div className="conteudo1 row">
                    <div className="texto col-lg-6">
                        <h1>Projetos</h1>
                        <p className="Texto_P_Princ">Projetos é a montra de trabalhos, de todo o teu portfólio. A Hinamic oferece-te a melhor
                            oportunidade para promoveres o teu trabalho. Não percas mais tempo e partilha as tuas
                            criações para ganhares notoriedade!</p>
                        <Link to="/projetos">
                            <button className="P_Ini_button_P">Projetos</button>
                        </Link>
                    </div>
                    <div className="col-lg-5">
                        <img className="Cartoon" src={C_Projetos} width="350px" height="350px"/>
                    </div>
                </div>
                <div className="conteudo2 row">
                    <div className="col-lg-5">
                        <img className="Cartoon2" src={C_Criadores} width="350px" height="350px"/>
                    </div>
                    <div className="texto2 col-lg-6">
                        <h1>Criadores</h1>
                        <p className="Texto_P_Princ">Aqui encontrarás Criadores de diferentes áreas: Design, Música, Programação, Cinema,
                            Fotografia, entre outras. Quem sabe se não encontras por aqui um parceiro de trabalho!</p>
                        <Link to="/criadores">
                            <button className="P_Ini_button_P">Criadores</button>
                        </Link>
                    </div>
                </div>
                <div className="conteudo3 row">
                    <div className="texto3 col-lg-6">
                        <h1>Freelance</h1>
                        <p className="Texto_P_Princ">As abelhas trabalham em conjunto na sua colmeia. Na Hinamic incentivamos o associativismo
                            entre Criadores. Quem sabe não terás a solução para outro Criador?</p>
                        <Link to="/freelance">
                            <button className="P_Ini_button_P">Freelance</button>
                        </Link>
                    </div>
                    <div className="col-lg-5">
                        <img className="Cartoon3" src={C_Freelance} width="350px" height="350px"/>
                    </div>
                </div>
                <div className="conteudo4 row">
                    <div className="col-lg-5">
                        <img className="Cartoon4" src={C_Empregos} width="350px" height="350px"/>
                    </div>
                    <div className="texto4 col-lg-6">
                        <h1>Empregos</h1>
                        <p className="Texto_P_Princ">Para vos ajudar a construir o futuro podem procurar aqui
                            ofertas de trabalho, em diferentes empresas. O vosso futuro pode estar aqui!</p>
                        <Link to="/empregos">
                            <button className="P_Ini_button_P">Empregos</button>
                        </Link>
                    </div>
                </div>
                <div className="final"/>
            </div>
        )
    }
}

export default Pag_Principal;