import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
    return (
        <div className="Contact" id="Contact">
            <h2>Get In Touch</h2>
            <div className="contact-me">
                    <div className="column contact-info">
                        <div className="row">
                            <i><span><ion-icon name="person" style={{color: "#3f71f4"}}></ion-icon></span></i>
                            <div className="info">
                                <p style={{fontWeight: "600", fontSize: "20px"}}>Name</p>
                                <p>Mert Keskin</p>
                            </div>
                        </div>
                        <div className="row">
                            <i><span><ion-icon name="location" style={{color: "#3f71f4"}}></ion-icon></span></i>
                            <div className="info">
                                <p style={{fontWeight: "600", fontSize: "20px"}}>Address</p>
                                <p>Ankara, Turkey</p>
                            </div>
                        </div>
                        <div className="row">
                            <i><span><ion-icon name="mail" style={{color: "#3f71f4"}}></ion-icon></span></i>
                            <div className="info">
                                <p style={{fontWeight: "600", fontSize: "20px"}}>E-mail</p>
                                <p>mertkskinmtk6@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="column contact-form">
                        <p style={{fontWeight: "600"}}>Message Me</p>
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