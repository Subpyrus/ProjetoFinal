import React from 'react';
import '../../App.css';

class FormCreateFases extends React.Component{

    render() {
        return (
            <div>
                <span>
                    <div className="row justify-content-center mt-5">
                        <span className="col-4 icones_botoes_NovoProjeto">
                            <button
                                className="btn btnIn mb-2"
                                type="button"
                                id="BtnApagar"
                                onClick={this.props.imagem}>
                                Carregar imagem
                            </button>
                        </span>
                    </div>
                </span>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id={`Texto${this.props.index}`}
                            type="text"
                            className="validate"
                            name={`document-${this.props.index }-document`}
                        />
                        <label htmlFor={`Texto${this.props.index}`}>Texto</label>
                    </div>
                </div>
            </div>
        );
    }

}

export default FormCreateFases;