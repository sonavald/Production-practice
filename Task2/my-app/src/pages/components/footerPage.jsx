import { NavLink } from 'react-router-dom';
import '../../css/footer.css';


export function PageFooter() {
    return (
        <footer className="poppins-regular">

            <section className="footer-content">
                <img className="logo" src="logo.svg" alt="{Finsweet"/>
                
                <p>We are always open to discuss your project and improve your online presence.</p>
                
                <div className="footer-contact">
                    <div className="info">
                        <p>Email me at</p>
                        <p>Call us</p>
                        <p>contact@website.com</p>  
                        <p>0927 6277 28525</p>
                    </div>
                    
                </div>

            </section>

            <section className="footer-content">

                <h1>Lets Talk!</h1>

                <p>
                    We are always open to discuss your project, improve your online presence 
                    and help with your UX/UI design challenges.
                </p>

                <div className="social-media">
                    <img src="img/social_media/fb.svg" alt="FaceBook"/>
                    <img src="img/social_media/twt.svg" alt="Twitter"/>
                    <img src="img/social_media/inst.svg" alt="Instagram" />
                    <img src="img/social_media/linkedin.svg" alt="LinkedIn"/>
                </div>
            </section>

            <nav className="footer-links">
                <p><a>Copyright 2021, Finsweet.com</a></p>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><a>About us</a></li>
                    <li><a>Features</a></li>
                    <li><NavLink to="/pricing">Pricing</NavLink></li>
                    <li><a>FAQ</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </nav>

        </footer>
    )
}