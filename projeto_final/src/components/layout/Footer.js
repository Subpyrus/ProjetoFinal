import React from 'react';
import {NavLink} from 'react-router-dom';
import Icone from '../../Imgs/footer.svg';


const Footer = () => {
    return (
        <footer class="footer-distributed">
			<div class="footer-right">
				<a href="#"><i class="fa fa-facebook fa-lg"></i></a>
				<a href="#"><i class="fa fa-instagram fa-lg"></i></a>
				&emsp;
                <img src={Icone} height="60" width="60"/>
			</div>
			<div class="footer-left">
				<p class="footer-links">2020 Hinamic &emsp;&emsp;&emsp;&emsp; <NavLink to="/">Sobre Nós</NavLink></p>
			</div>
		</footer>
    )
}

export default Footer;

