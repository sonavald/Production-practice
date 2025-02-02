import { NavLink } from "react-router-dom";

export function FooterV1() {
    return (
        <>
            <footer>
                <section>
                    <div className="navbar">
                        <NavLink to="/" className='logo'><div></div><span>Untitled UI</span></NavLink>
                        <ul>
                            <li>Overview</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Careers</li>
                            <li>Help</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className="subscribe">
                        <span>Stay up to date</span>
                        <form>
                            <input type="email" placeholder="Enter your email" />
                            <input type="button" value="Subscribe" />
                        </form>
                    </div>
                </section>
                <section className="bottom">
                    <p>© 2077 Untitled UI. All rights reserved.</p>
                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                    </ul>
                </section>
            </footer>
        </>
    )
};