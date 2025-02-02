import { FAQ } from './components/faq.jsx';

import '../css/home.css';
import { NavLink } from 'react-router-dom';


export function HomePage() {
    return (
        <main>

            <article className="home-hero">
                <section className="hero-text">
                    <h1>Building stellar websites for early startups</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>

                    <div className="hero-buttons">
                        <button className="yellow-button poppins-medium">
                            View our work
                        </button>
                        <p><NavLink to="/pricing">View pricing <img src="img/arrows/arrow_1.svg" style={{ marginleft: 15 + "px" }} /></NavLink></p>
                    </div>
                </section>

                <section className="hero-img">
                    <img src="img/home/home_hero.svg" />
                </section>
            </article>

            <article className="how-we-work">
                <section className="hww-text">
                    <h2>How we work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <NavLink to="/contact-us">Get in touch with us    &#8594</NavLink>
                </section>

                <section className="hww-list">
                    <div>
                        <div className="hww-img"><img src="img/home/how_list.png" width="50" /><p>01</p></div>
                        <h3>Strategy</h3>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>

                    <div>
                        <div className="hww-img"><img src="img/home/how_list.png" width="50" /><p>02</p></div>
                        <h3>Wireframing</h3>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>

                    <div>
                        <div className="hww-img"><img src="img/home/how_list.png" width="50" /><p>03</p></div>
                        <h3>Design</h3>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>

                    <div>
                        <div className="hww-img"><img src="img/home/how_list.png" width="50" /><p>04</p></div>
                        <h3>Development</h3>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                </section>
            </article>

            <article className="projects">
                <section className="projects-label">
                    <h2>View our projects</h2>
                    <p>View More    &#8594</p>
                </section>

                <section className="projects-collage">
                    <div className="coll-img-1">
                        <div className="coll-div-hover">
                            <h3>Workhub office Webflow Webflow Design</h3>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                            <a>View project <img src="img/arrows/yellow_arrow_1.svg" /></a>
                        </div>
                        <img src="img/home/coll-img-1.png" />
                    </div>
                    <div>
                        <div className="coll-img-2">
                            <div className="coll-div-hover">
                                <h3>Unisaas Website Design</h3>
                                <a>View project <img src="img/arrows/yellow_arrow_1.svg" /></a>
                            </div>
                            <img src="img/home/coll-img-2.png" />
                        </div>

                        <div className="coll-img-3">
                            <div className="coll-div-hover">
                                <h3>Unisaas Website Design</h3>
                                <a>View project <img src="img/arrows/yellow_arrow_1.svg" /></a>
                            </div>
                            <img src="img/home/coll-img-3.png" />
                        </div>
                    </div>
                </section>
            </article>

            <article className="features">
                <p>Features</p>
                <h2>Design that solves problems, one product at a time</h2>
                <section className="section-features">
                    <div>
                        <img src="img/home/client.svg" />
                        <h4>Uses Client First</h4>
                        <p>
                            Euismod faucibus turpis eu gravida mi. Pellentesque et
                            velit aliquam sed faucib turpis eu gravida mi. Pellentesque
                            et velit aliquam sed mi.
                        </p>
                    </div>
                    <div>
                        <img src="img/home/rev.svg" />
                        <h4>Two Free Revision Round</h4>
                        <p>
                            Euismod faucibus turpis eu gravida mi. Pellentesque et
                            velit aliquam sed faucib turpis eu gravida mi. Pellentesque
                            et velit aliquam sed mi.
                        </p>
                    </div>
                    <div>
                        <img src="img/home/templ.svg" />
                        <h4>Template Customization</h4>
                        <p>
                            Euismod faucibus turpis eu gravida mi. Pellentesque et
                            velit aliquam sed faucib turpis eu gravida mi. Pellentesque
                            et velit aliquam sed mi.
                        </p>
                    </div>
                    <div>
                        <img src="img/home/sup.svg" />
                        <h4>24/7 Support</h4>
                        <p>
                            Euismod faucibus turpis eu gravida mi. Pellentesque et
                            velit aliquam sed faucib turpis eu gravida mi. Pellentesque
                            et velit aliquam sed mi.
                        </p>
                    </div>
                    <div>
                        <img src="img/home/timer.svg" />
                        <h4>Quick Delivery</h4>
                        <p>
                            Euismod faucibus turpis eu gravida mi. Pellentesque et
                            velit aliquam sed faucib turpis eu gravida mi. Pellentesque
                            et velit aliquam sed mi.
                        </p>
                    </div>
                    <div>
                        <img src="img/home/doc.svg" />
                        <h4>Hands-on approach</h4>
                        <p>
                            Euismod faucibus turpis eu gravida mi. Pellentesque et
                            velit aliquam sed faucib turpis eu gravida mi. Pellentesque
                            et velit aliquam sed mi.
                        </p>
                    </div>
                </section>
            </article>

            <article className='questions'>
                <FAQ isPricing={false} />
            </article>

            <article className="inquiry">
                <section>
                    <div className="img-inquiry">
                        <div className="img-inquiry-cover">
                            <h1>Building stellar websites for early startups</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua ut enim.
                            </p>
                        </div>
                        <img src="img/home/inquiry.jpg" height="691" />
                    </div>
                    <div className="send-inquiry">
                        <h3>Send inquiry</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <form>
                            <input type="text" name="your_name" placeholder="Your Name" /><br />
                            <input type="text" name="email" placeholder="Email" /><br />
                            <input type="text" name="firgma_design" placeholder="Paste your Figma design URL" /><br />
                            <input className="yellow-button" type="button" name="submit" value="Send an Inquiry" />
                        </form>

                        <NavLink to="/contact-us">Get in touch with us <img src="img/arrows/arrow_1.svg" /></NavLink>
                    </div>
                </section>
            </article>

        </main>
    )
};