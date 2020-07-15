import React from 'react'
import '../../App.css';

const Backdrop = props => (
    <div className="backdropSide" onClick={props.click}/>
);

export default Backdrop;