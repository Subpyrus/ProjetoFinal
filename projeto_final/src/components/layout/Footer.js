import React from 'react';
import {NavLink} from 'react-router-dom';
import Icone from '../../Imgs/footer.svg';


const Footer = () => {
    return (
        <footer className="footer-distributed">
			<div className="footer-right">
				<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hinamic_/">
					<i className="fa fa-instagram fa-lg"></i></a>
				&emsp;
                <img src={Icone} alt="" height="30" width="30" style={{position: "relative", top: "2px"}}/>
			</div>
			<div className="footer-left">
				<p className="footer-links">2020 Hinamic &emsp;&emsp;&emsp;&emsp; <NavLink to="/sobre">Sobre Nós</NavLink></p>
			</div>
		</footer>
    )
}

export default Footer;

