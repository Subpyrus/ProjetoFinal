import React from 'react';
import '../../App.css';

class FormCreateProjetoTextos extends React.Component {

    render() {
        //console.log(this.props.escreve);
        if (this.props.tipo == "texto") {
            return (
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            key={this.props.escreve[1]}
                            id={`Texto${this.props.index}`}
                            type="text"
                            className="validate"
                            name={`document-${this.props.index }-document`}
                            value={this.props.escreve[2][1]}
                            onChange={this.props.escreve[0](`Texto${this.props.index}`, this.props.escreve[1])}
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
                            value={this.props.escreve[2][1]}
                            onChange={this.props.escreve[0](`Texto${this.props.index}`, this.props.escreve[1])}
                        />
                        <label htmlFor={`Link${this.props.index}`}>Link</label>
                    </div>
                </div>
            );
        }
    }

}

export default FormCreateProjetoTextos