import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
    return (
        <div className="Contact" id="Contact">
            <h2>Get In Touch</h2>
            <div className="contact-me">
                    <div className="column contact-info">
                        <div className="row">
                            <i><span><ion-icon name="person"></ion-icon></span></i>
                            <div className="info">
                                <h4>Name</h4>
                                <p>Mert Keskin</p>
                            </div>
                        </div>
                        <div className="row">
                            <i><span><ion-icon name="location"></ion-icon></span></i>
                            <div className="info">
                                <h4>Address</h4>
                                <p>Ankara, Turkey</p>
                            </div>
                        </div>
                        <div className="row">
                            <i><span><ion-icon name="mail"></ion-icon></span></i>
                            <div className="info">
                                <h4>E-mail</h4>
                                <p>mertkskinmtk6@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="column contact-form">
                        <h3>Message Me</h3>
                        <form action="#">
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" placeholder="Name" required></input>
                                </div>
                                <div className="field surname">
                                <input type="text" placeholder="Surname" required></input>
                                </div>
                            </div>
                            <div>
                                <input className="field" type="text" placeholder="Subject" required></input>
                            </div>
                            <div id="textarea">
                            <textarea id="text" name="text" rows="4" cols="50" placeholder="Details..."></textarea>
                            </div>
                            <div>
                                <button id="submit" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default Contact;