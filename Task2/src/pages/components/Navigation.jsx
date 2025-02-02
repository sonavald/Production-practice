import '../../css/navbar.css';

import { NavLink } from 'react-router-dom';


export function NavBar() {
    return(
        <nav className="poppins-medium">
            <NavLink to="/" className="logo"><img  src="logo.svg" alt="{Finsweet"/></NavLink>

            <ul>
                <li><NavLink to="/" className="a-nav">Home</NavLink></li>
                <li><a className="a-nav">About us</a></li>
                <li><a className="a-nav">Features</a></li>
                <li><NavLink to="/pricing" className="a-nav">Pricing</NavLink></li>
                <li><a className="a-nav">FAQ</a></li>
                <li><a className="a-nav">Blog</a></li>
                <li><NavLink to="/contact-us"><button>Contact us</button></NavLink></li>
            </ul>
        </nav>
    )
}