import React from 'react';
import '../../App.css';
import C_Projetos from '../../imgs/C_Projetos.png';
import C_Empregos from '../../imgs/C_Empregos.png';
import C_Freelance from '../../imgs/C_Freelance.png';
import C_Criadores from '../../imgs/C_Criadores.png';
import Logo from '../../imgs/logo.png';


class Pag_Principal extends React.Component {
    render() {
        return (
            <div className="pagP container-fluid ml-0 pl-0">
                <div className="inicial row">
                    <span className="col-md-2"/>
                    <img src={Logo} width="auto" height="300px" className="P_Ini_Logo pl-4"/>
                    <div className="col-md-6 pl-5">
                        <span className="P_Ini_texto">Bem Vindos à Colmeia de Criadores Artísticos</span>
                        <button className="P_Ini_button">Criar Perfil</button>
                    </div>
                </div>
                <div className="conteudo1">
                    <div className="texto">
                        <h1>Projetos</h1>
                        <p className="Texto_P_Princ">Projetos é a montra de trabalhos, de todo o teu portfólio. A Hinamic oferece-te a melhor
                            oportunidade para promoveres o teu trabalho. Não percas mais tempo e partilha as tuas
                            criações para ganhares notoriedade!</p>
                        <button className="P_Ini_button_P">Projetos</button>
                    </div>
                    <div>
                        <img className="Cartoon" src={C_Projetos} width="350px" height="350px"/>
                    </div>
                </div>
                <div className="conteudo2">
                    <img className="Cartoon2" src={C_Criadores} width="350px" height="350px"/>
                    <div className="texto2">
                        <h1>Criadores</h1>
                        <p className="Texto_P_Princ">Aqui encontrarás Criadores de diferentes áreas: Design, Música, Programação, Cinema,
                            Fotografia, entre outras. Quem sabe se não encontras por aqui um parceiro de trabalho!</p>
                        <button className="P_Ini_button_P">Criadores</button>
                    </div>
                </div>
                <div className="conteudo3">
                    <div className="texto3">
                        <h1>Freelance</h1>
                        <p className="Texto_P_Princ">As abelhas trabalham em conjunto na sua colmeia. Na Hinamic incentivamos o associativismo
                            entre Criadores. Quem sabe não terás a solução para outro Criador?</p>
                        <button className="P_Ini_button_P">Freelance</button>
                    </div>
                    <div>
                        <img className="Cartoon3" src={C_Freelance} width="350px" height="350px"/>
                    </div>
                </div>
                <div className="conteudo4">
                    <img className="Cartoon4" src={C_Empregos} width="350px" height="350px"/>
                    <div className="texto4">
                        <h1>Empregos</h1>
                        <p className="Texto_P_Princ">Para vos ajudar a construir o futuro podem procurar aqui
                            ofertas de trabalho, em diferentes empresas. O vosso futuro pode estar aqui!</p>
                        <button className="P_Ini_button_P">Empregos</button>
                    </div>
                </div>
                <div className="final"/>
            </div>
        )
    }
}

export default Pag_Principal;