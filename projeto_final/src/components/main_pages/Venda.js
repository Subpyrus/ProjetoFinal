import React from 'react';
import Img_Vendas from '../../Imgs/C_Vendas.png';
import '../../App.css';

class Vendas extends React.Component {
    render() {
        return (
            <div className="container-fluid Body_Vendas">
                <div className="row m-0 cenas p-0 justify-content-center">
                    <div className="text-center col-md-6 d-none d-md-block">
                        <img src={Img_Vendas} alt="" className="Img_Vendas m-0"  width="350px" height="350px"/>
                    </div>
                    <div className="col-md-6 col-sm-12 Texto_Vendas">
                        <h1 className="Titulo_Vendas">Bzzz!</h1>
                        <h2 className="Subtitulo_Vendas ml-1">Esta funcionalidade não está disponível!</h2>
                        <p className="Texto_Vendas_2 ml-1">É uma ideia muito fixe não é? Estamos a trabalhar para que
                            num futuro próximo, possas colocar
                            trabalhos que possam ser vendidos (ex: <i>templates, mockups,</i> produtos originais, etc).
                            <br/>
                            Vamos oferecer-te um espaço para rentabilizares o teu trabalho!</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Vendas;