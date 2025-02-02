import './../css/pricing.css';

import {FAQ} from './components/faq.jsx';

export function PricingPage() {
  return(
        <main>
            <article className="pricing">
                <section className="pricing-label">
                    <h2>Our Pricing Plans</h2>
                    <p>
                        When you're ready to go beyond prototyping in Figma, Webflow is ready to 
                        help you bring your designs to life - without coding them.
                    </p>
                </section>

                <section className="pricing-cards">

                    <div className="card">
                        <p className="card-price">$299 <span>Per Design</span></p>
                        <h3>Landing page</h3>
                        <p>When you're ready to go beyond prototyping in Figma</p>
                        <ul>
                            <li><span>All limited links</span></li>
                            <li><span>Own analytics platform</span></li>
                            <li><span>Chat support</span></li>
                        </ul>
                        <ul>
                            <li><span>Optimize hashtags</span></li>
                            <li><span>Unlimited users</span></li>
                        </ul>

                        <button className="darkblue-button">Get started</button>
                    </div>

                    <div className="card">
                        <p className="card-price">$399 <span>Multi Design</span></p>
                        <h3>Website page</h3>
                        <p>When you're ready to go beyond prototyping in Figma, Webflow's ready to help.</p>
                        <ul>
                            <li><span>All limited links</span></li>
                            <li><span>Own analytics platform</span></li>
                            <li><span>Chat support</span></li>
                            <li><span>Optimize hashtags</span></li>
                            <li><span>Unlimited users</span></li>
                        </ul>
                        <button className="yellow-button">Get started</button>
                    </div>

                    <div className="card">
                        <p className="card-price">$299 <span>Per Design</span></p>
                        <h3>Landing page</h3>
                        <p>When you're ready to go beyond prototyping in Figma</p>
                        <ul>
                            <li><span>All limited links</span></li>
                            <li><span>Own analytics platform</span></li>
                            <li><span>Chat support</span></li>
                            <li><span>Optimize hashtags</span></li>
                            <li><span>Unlimited users</span></li>
                            <li><span>Assist and Help</span></li>
                        </ul>

                        <button className="darkblue-button">Get started</button>
                    </div>

                
                </section>
            </article>

            <FAQ isPricing={true}/>
        </main>
  )  
};