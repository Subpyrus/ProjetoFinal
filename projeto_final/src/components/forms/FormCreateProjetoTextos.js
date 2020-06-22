import React from 'react';
import '../../App.css';

class FormCreateProjetoTextos extends React.Component {

    render() {
        if (this.props.tipo == "texto") {
            return (
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id={`Texto${this.props.index}`}
                            type="text"
                            className="validate"
                            name={`document-${ this.props.index }-document`}
                        />
                        <label htmlFor={`Texto${this.props.index}`}>Texto</label>
                    </div>
                </div>
            );
        } else if (this.props.tipo == "link") {
            return (
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id={`Link${this.props.index}`}
                            type="text"
                            className="validate"
                            name={`document-${ this.props.index }-document`}
                        />
                        <label htmlFor={`Link${this.props.index}`}>Link</label>
                    </div>
                </div>
            );
        }
    }

}

export default FormCreateProjetoTextos