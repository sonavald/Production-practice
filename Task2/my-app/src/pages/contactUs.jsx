import "./../css/contact_us.css"

export function ContactUs() {
    return(
        <main>

            <article className="contact-us">
                <section className="contact-us-label">
                    <h2>Contact us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore.
                    </p>
                </section>

                <section className="contact-us-form">
                    <form>
                        <label>
                            Name
                            <input type="text" name="your_name" placeholder="Enter your name"/>   
                        </label>
                        
                        <label>
                            Email
                            <input type="text" name="email" placeholder="Enter your email"/>
                        </label>
                        
                        <label>
                            Subject
                            <input type="text" name="context" placeholder="Provide context"/>
                        </label>
                        
                        <label>
                            Subject
                            <input type="text" name="subject" placeholder="Select subject"/>
                        </label>
                        
                        <label>
                            Message
                            <textarea type="text" name="message" placeholder="Write your question"></textarea>
                        </label>
                        
                        <input className="darkblue-button" type="button" name="submit" value="Send message"/>
                    </form>
                </section>
            </article>

        </main>
    )
};