import React from 'react';
import {NavLink} from 'react-router-dom';
import Icone from '../../Imgs/footer.svg';


const Footer = () => {
    return (
        <footer className="footer-distributed">
			<div className="footer-right">
				<a href="#"><i className="fa fa-facebook fa-lg"></i></a>
				<a href="#"><i className="fa fa-instagram fa-lg"></i></a>
				&emsp;
                <img src={Icone} height="60" width="60"/>
			</div>
			<div className="footer-left">
				<p className="footer-links">2020 Hinamic &emsp;&emsp;&emsp;&emsp; <NavLink to="/sobre">Sobre Nós</NavLink></p>
			</div>
		</footer>
    )
}

export default Footer;

