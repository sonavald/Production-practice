import { NavLink } from "react-router-dom";

export function Header() {
    let menuOpen = false;
    let subOpen = false;
    const mobileMenuOpen = (event) => {
        let menu =document.querySelector('.menu');
        
        if(menuOpen === false)
        {
            menu.style.display = "flex";
            menu.style.cssText += `
                right: 0;
            `;
            menuOpen = true;
        }
        else
        {
            menu.style.display = "none";
            menu.style.cssText += `
                right: -100%;
            `;
            menuOpen = false;
        }
    }

    const closeMenu = (e) => {
        let menu = document.querySelector('.menu');
        if(e.target.tagName === "A" || e.target.tagName === "LI")
            menu.style.display = "none";
            menu.style.cssText += `
                right: -100%;
            `;
            menuOpen = false;
    }

    return (
        <>
        <header>
            <NavLink to="/" className='logo'><div></div><span>Untitled UI</span></NavLink>
            <div className="mobile-menu" onClick={mobileMenuOpen}>
                <hr />
                <hr />
                <hr />
            </div>
            <div className="menu">
                <nav>
                    <ul className='navbar'>
                        <li>
                            <span>Products </span><div></div>
                            <ul className='sub-navbar' onClick={closeMenu}>
                                <li>Overview</li>
                                <li>Features</li>
                                <li>Solution</li>
                                <li>Tutorials</li>
                                <li>Releases</li>
                            </ul>
                        </li>
                        <li>
                            <span>Services </span><div></div>
                            <ul className='sub-navbar' onClick={closeMenu}>
                                <li>Service 1</li>
                                <li>Service 2</li>
                                <li>Service 3</li>
                                <li>Service 4</li>
                                <li>Service 5</li>
                            </ul>
                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
                            <span>Resources </span><div></div>
                            <ul className='sub-navbar' onClick={closeMenu}>
                                <li><NavLink to="/">Blog</NavLink></li>
                                <li><NavLink to="blog-categories">Blog by categories</NavLink></li>
                                <li>Newsletter</li>
                                <li>Events</li>
                                <li>Help centre</li>
                                <li>Tutorials</li>
                                <li>Support</li>
                            </ul>
                        </li>
                        <li>
                            About
                        </li>
                    </ul>
                </nav>

                <div className="buttons">
                    <button>Log in</button>
                    <button>Sign in</button>
                </div>
            </div>
        </header>
        {
            
        }
        </>
    )
}