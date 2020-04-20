import React from 'react';
import Img_Vendas from '../../imgs/C_Vendas.png';
import '../../App.css';

class Vendas extends React.Component {
    render() {
        return (
            <div className="row col-12 Body_Vendas">
                <div className="col-md-5 offset-1">
                    <img src={Img_Vendas} className="Img_Vendas"/>
                </div>
                <div className="col-md-5 Texto_Vendas">
                    <h1 className="Titulo_Vendas">Bzzz!</h1>
                    <h2 className="Subtitulo_Vendas ml-1">Esta funcionalidade não está disponível!</h2>
                    <p className="Texto_Vendas_2 ml-1">É uma ideia muito fixe não é? Estamos a trabalhar para que num futuro próximo, possas colocar
                        trabalhos que possam ser vendidos (ex: <i>templates, mockups,</i> produtos originais, etc).
                        <br/>
                        Vamos oferecer-te um espaço para rentabilizares o teu trabalho!</p>
                </div>
            </div>
        )
    }

}

export default Vendas;