import React from 'react';

class FormUserPart3 extends React.Component {
    //POSSIVELMENTE AQUI PASSA A SER FINALIZAR E DEPOIS ENVIA AS COISAS E VAI PRA HOMEPAGE
    continuar = e => {
        e.preventDefault();
        //ENVIAR A INFO PARA A FIREBASE
        this.props.nextStep();
    };
    voltar = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {valores, handleChange} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="data"
                            type="text"
                            className="validate"
                            onChange={handleChange('Email')}
                            defaultValue={valores.Email}
                        />
                        <label htmlFor="data">Endereço de E-mail</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="data"
                            type="Password"
                            className="validate"
                            onChange={handleChange('Password')}
                            defaultValue={valores.Password}
                        />
                        <label htmlFor="data">Password</label>
                    </div>
                </div>
                <div className="row justify-content-end of">
                    <div className="f">
                        <div className="col s6">
                            <button
                                className="btn btnIn"
                                type="button"
                                id="prevBtn"
                                onClick={this.voltar}>
                                Anterior
                            </button>
                        </div>
                        <div className="col s6">
                            <button
                                className="btn btnIn"
                                type="button"
                                id="nextBtn"
                                onClick={this.continuar}>
                                Finalizar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormUserPart3;