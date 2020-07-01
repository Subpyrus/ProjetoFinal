import React from 'react';
import '../../App.css';
import pedro from '../../Imgs/pedro.png';
import rangel from '../../Imgs/rangel.png';
import xambre from '../../Imgs/xambre.png';

class Sobre extends React.Component {
    render() {
        return (
            <div className="container fluid ">
                <div className="bg row text-center pb-4">
                    <div className="col-12 mt-4 mb-4">
                    <h2 className="t1sobre">Como surgiu a <span className="s1sobre">hinamic</span></h2>
                    </div>
                    <div className="col-12 embed-responsive embed-responsive-16by9">
                        <iframe width="926" title="video" height="521" src="https://www.youtube.com/embed/Lz4TKDfGY18"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen/>
                    </div>
                    <div className="col-12 mt-4">
                    <i className="fsobre">"Dinâmicos, mas todos temos a mesma <span className="s2sobre">essência</span>."</i>
                    </div>
                    </div>
                <div className="row text-center justify-content-center pb-5">
                    <div className="col-12 mt-3 mb-4">
                    <h4 className="t2sobre">A Composição da Equipa</h4>
                    </div>
                    <div className="col-lg-3 col-sm-12 mr-2 ml-2">
                        <div><img src={pedro} alt="" width="auto" className=""/></div>
                        <h4 className="nickname mt-3">Abelha Mestre</h4>
                        <p className="nsobre">Pedro Santos</p>
                        <p>Este é o Pedro Santos, a Abelha Mestre. Está no 3º ano da Licenciatura em Novas Tecnologias da Comunicação,
                            na Universidade de Aveiro. Devido ao seu perfecionismo tem como função a organização do trabalho
                            de equipa. Com alguma experiência no Illustrator e no Photoshop está também responsável pelo desenvolvimento
                            do conteúdo visual.</p>
                    </div>
                    <div className="col-lg-3 col-sm-12 mr-2 ml-2">
                        <div><img src={rangel} alt="" width="auto" className=""/></div>
                        <h4 className="nickname mt-3">Abelha Suiça</h4>
                        <p className="nsobre">João Rangel</p>
                        <p>Este é o João Rangel, a Abelha Suiça. Está no 3º ano da Licenciatura em Novas Tecnologias da Comunicação,
                            na Universidade de Aveiro. É o camaleão da equipa, capaz de trabalhar em tudo um pouco. Mas as suas
                            aptidões estão sobretudo viradas para a programação (JS, PHP, React).</p>
                    </div>
                    <div className="col-lg-3 col-sm-12 mr-2 ml-2">
                        <div><img src={xambre} alt="" width="auto" className=""/></div>
                        <h4 className="nickname mt-3">Abelha Programadora</h4>
                        <p className="nsobre">Diogo Xambre</p>
                        <p>Este é o Diogo Xambre, a Abelha Programadora. Está no 3º ano da Licenciatura em Novas Tecnologias da Comunicação,
                            na Universidade de Aveiro. Tal como o seu nome indica ele é o programador. Tem uma capacidade enorme de entender
                            como é que os códigos funcionam e de se adaptar rapidamente a frameworks com que nunca trabalhou. Neste momento
                            gosta de trabalhar com JS, PHP, React.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sobre;