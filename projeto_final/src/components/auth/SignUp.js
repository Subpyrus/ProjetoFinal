import React from 'react';
import '../../App.css';
import sg from '../../Imgs/sg.png';
import {Link} from 'react-router-dom';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            escolha: ""
        }
    }

    escolhaP = (tipo) => {
        console.log(tipo);
        this.setState({escolha: tipo});
    };

    render() {
        return (
            <div className="container-fluid noscroll fundo">
                <div className="container box">
                    <div className="row justify-content-center">
                        <div className="boxIn p-5 col-6">
                            <div className="text-center">
                                <img src={sg} width="auto" className="mb-3"/>
                                <h4 className="titulo">Registo</h4>
                                <p className="bemvindo">Junta-te à nossa Colmeia</p>
                            </div>
                            <hr className="line mb-3"/>
                            <h5 className="font-weight-bolder text-center mb-3">Escolhe o teu tipo de Perfil</h5>
                            <form action="#" className="row text-center">
                                <div className="col-6">
                                    <p>
                                        <label className="escolha" for="option1">
                                            <input class="with-gap" value="profissional" name="group1" type="radio"
                                                   id="option1" onClick={() => this.escolhaP("profissional")}/>
                                            <span className="escolha">Profissional</span>
                                        </label>
                                    </p>
                                    <p>Promove a tua criatividade, talento e candidata-te a empregos e
                                        a oportunidades de freelance. </p>
                                </div>
                                <div className="col-6">
                                    <p className="pb-1">
                                        <label for="option2">
                                            <input class="with-gap" value="empresa" name="group1" type="radio"
                                                   id="option2" onClick={() => this.escolhaP("empresa")}/>
                                            <span className="escolha">Empresa</span>
                                        </label>
                                    </p>
                                    <p>Publiquem os vossos anúncios de emprego para recrutrar
                                        Criadores Artísticos.</p>
                                </div>
                            </form>
                            <div className="text-center pt-2">
                                {this.state.escolha == "" &&
                                <button className="btn btnIn w-100"
                                        type="submit" disabled>AVANÇAR
                                </button>
                                }
                                {this.state.escolha !== "" &&
                                <Link to={`registo/${this.state.escolha}`}>
                                    <button className="btn btnIn w-100"
                                            type="submit">AVANÇAR
                                    </button>
                                </Link>
                                }
                            </div>
                            <div className="text-center mt-3">
                            <span>Já tens conta?
                                <Link to="/entrar"
                                      className="text-decoration-none text-dark font-weight-bold">
                                <ins> Entra aqui!</ins>
                            </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;