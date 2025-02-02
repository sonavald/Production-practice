import '../../css/header.css';

import { NavLink } from 'react-router-dom';


export function Header() {

    return(
        <header className="pallete-header">
            <NavLink to="/" className="logo">FLAT UI COLORS</NavLink>
            <div className="header-menu">
                <a>Designer Inspitation</a>
                <NavLink>Subscribe</NavLink> 
            </div>
        </header>
    )
}