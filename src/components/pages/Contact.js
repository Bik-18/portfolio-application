import React from "react";

import "./Contact.css";

function Contact() {
    return (
        <>
            <div id="contact">
                <h1>Contact Me</h1>
                <div className="contact-container">
                    <div className="left">
                        <h2>Let's Connect</h2>
                        {/* <p>jad fhebfiwef wehhfbweifijqd bfihbwef ifbihfbw cweiufweifhwe ijwehifhwekjfcw
                            hudcuyhwdfich cihbfijweqhfiwe kbweiuqfhiuwef ihfweiuhfiuwef ibweiufhweiuf
                            wfdihfgbwdifh fjwbekjfbw kjfhweifwek jhfjkwdhfcijjwekfbnwdhfcikwd
                        </p> */}
                        <div class="icon"><i class="far fa-envelope"></i>sahirkumar613@gmail.com</div>
                        <div class="icon"><i class="fas fa-phone"></i>8084430565</div>
                        <div class="icon"><i class="fas fa-map-marker-alt"></i>Bangalore,Karnatka.</div>

                    </div>

                    <div className="right">

                        <h2>Send me a message</h2>
                        <label>First & Last Name</label>
                        <input type="text"></input>
                        <label>Phone Number</label>
                        <input type="number"></input>
                        <label>Email Address</label>
                        <input type="email"></input>
                        <label>Messages</label>
                        <textarea name="text1" cols="40" rows="5" placeholder="Your message here..."></textarea>



                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact;