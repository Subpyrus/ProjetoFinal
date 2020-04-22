import React from 'react';
import '../../App.css';
import sg from '../../Imgs/sg.png';

//import {Link} from 'react-router-dom';
const currentTab = 0;

class CreateCreator extends React.Component {

    showTab = (n) => {
        // This function will display the specified tab of the form...
        const x = document.getElementsByClassName("tab");
        x[n].style.display = "block"
        //... and fix the Previous/Next buttons:
        if (n == 0) {
            document.getElementById("prevBtn").style.display = "none";
        } else {
            document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
            document.getElementById("nextBtn").innerHTML = "Submit";
        } else {
            document.getElementById("nextBtn").innerHTML = "Next";
        }
        //... and run a function that will display the correct step indicator:
        //fixStepIndicator(n);
    };



    render() {
        return (
            <div className="container-fluid noscroll fundo">
                <div className="container box">
                    <div className=" row justify-content-center">
                        <div className="boxIn p-5 col-6">
                            <div className="text-center">
                                <img src={sg} width="auto" className="mb-3"/>
                                <h4 className="titulo">Registo</h4>
                                <p className="bemvindo">Junta-te à nossa Colmeia</p>
                            </div>
                            <hr className="line mb-3"/>
                            <form className="col s12">
                                <div className="tab">
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input id="first_name" type="text" className="validate"/>
                                            <label for="first_name">Primeiro Nome</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="last_name" type="text" className="validate"/>
                                            <label for="last_name">Último Nome</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="data" type="date" className="validate"/>
                                            <label for="data">Data de Nascimento</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className="col s6">
                                            <label>País</label>
                                            <select className="aparece">
                                                <option value="" disabled selected>Escolhe o teu País</option>
                                                <option value="1">Mango</option>
                                                <option value="2">Orange</option>
                                                <option value="3">Apple</option>
                                            </select>
                                        </div>
                                        <div className=" col s6">
                                            <label>Localidade</label>
                                            <select className="aparece">
                                                <option value="" disabled selected>Escolhe a tua Localidade</option>
                                                <option value="1">Mango</option>
                                                <option value="2">Orange</option>
                                                <option value="3">Apple</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab">
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input id="first_name" type="text" className="validate"/>
                                            <label for="first_name">Primeiro Nome</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-end of">
                                    <div className="f">
                                        <div className="col s6">
                                            <button className="btn btnIn" type="button" id="prevBtn"
                                                    onclick="nextPrev(-1)">
                                                Anterior
                                            </button>
                                        </div>
                                        <div className="col s6">
                                            <button className="btn btnIn" type="button" id="nextBtn"
                                                    onclick="nextPrev(1)">
                                                Próximo
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="circulos">
                                    <span className="step"></span>
                                    <span className="step"></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    //showTab(currentTab);
}

export default CreateCreator;