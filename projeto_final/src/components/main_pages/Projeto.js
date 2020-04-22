import React, {useState} from 'react';
import '../../App.css';
import Filtros from '../layout/Filtros';
/* alterar isto para abrir outra página */
import {Modal, Button} from 'react-bootstrap'

class Projetos extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            setShow: false,
        }
    }

    handleClose = () => {
        this.setState({setShow: false})
    };
    handleShow = () => {
        console.log("oi");
        this.setState({setShow: true})
    };

    render() {
        return (
            <div className="container-fluid m-0 p-0 Proj_Body">
                <Filtros/>
                <div className="row col-12 justify-content-center mt-5">
                    <div className="col-2 mr-2" onClick={this.handleShow}>
                        <div className="card m-0 p-0">
                            <div className="card-body">
                                <h3 className="card-title Proj_Info">Maria betrolina</h3>
                                <p className="card-text Proj_Info">O meu cão não se cala</p>
                            </div>
                            <div className="card_blur"/>
                        </div>
                    </div>
                    <div className="col-2 mr-2">
                        <div className="card m-0 p-0">
                            <div className="card-body">
                                <h3 className="card-title Proj_Info">Maria betrolina</h3>
                                <p className="card-text Proj_Info">O meu cão não se cala</p>
                            </div>
                            <div className="card_blur"/>
                        </div>
                    </div>
                    <div className="col-2 mr-2">
                        <div className="card m-0 p-0">
                            <div className="card-body">
                                <h3 className="card-title Proj_Info">Maria betrolina</h3>
                                <p className="card-text Proj_Info">O meu cão não se cala</p>
                            </div>
                            <div className="card_blur"/>
                        </div>
                    </div>
                    <div className="col-2 mr-2">
                        <div className="card m-0 p-0">
                            <div className="card-body">
                                <h3 className="card-title Proj_Info">Maria betrolina</h3>
                                <p className="card-text Proj_Info">O meu cão não se cala</p>
                            </div>
                            <div className="card_blur"/>
                        </div>
                    </div>
                </div>

                /* esta parte é só para as fases*/
                <Modal show={this.state.setShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

export default Projetos