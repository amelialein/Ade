import React from "react";

function Contact(){
    return(
        <div>
            <section className="contactpage">
                <h2>Contact Us</h2>
                <form method="POST">
                    <label for="firstname">First Name:</label>
                    {/* <input type="text" title="firstname" placeholder="Enter your first name." required></input>*/}
                    <br/>
                    <br/>
                    <label for="lastname">Last Name:</label>
                    {/* <input type="text" title="lastname" placeholder="Enter your last name."></input>*/}
                    <br/>
                    <br/>
                    <label for="email">Email:</label>
                    {/* <input type="text" title="email" placeholder="Enter your email." required></input>*/}
                    <br/>
                    <br/>
                    <textarea rows="5" cols="40" placeholder="Enter your message" required></textarea>
                    <br/>
                    <br/>
                    {/* <input type="checkbox" name="newsletter" checked>Sign me up for the Newsletter</input> */}
                    <br/>
                    <br/>
                    <button type="submit">Send</button>
                </form>
            </section>
        </div>
    )
}

export default Contact