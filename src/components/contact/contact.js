import React from 'react';
import './contact.css';

const ContactForm = () => {
    return (
        <div className="content">
            <div className="contact-form-content">
                <form id="contact-form">
                    <h1>Contact Me</h1>

                    <div className="input-container">
                        <label for="name">Name</label>
                        <input id="name" className="contact-simple" type="text" name="name" required/><br/>
                    </div>
                    <div className="input-container">
                        <label for="email">Email</label>
                        <input id="email" className="contact-simple" type="email" name="email" required/><br/>
                    </div>
                    <div className="input-container">
                        <label for="subject">Subject</label>
                        <input id="subject" className="contact-simple" type="text" name="subject" required/><br/>
                    </div>
                    <div className="msg-container">
                        <label for="msg">Message</label>
                        <textarea id="msg" className="contact-msg" name="message" required/><br/>
                    </div>
                    <input className="contact-submit" type="submit" value="Send"/>
                </form>
            </div>
            
            <div id="modal" className="closed">
                <dialog className="modal-content" open>
                    <div className="modal-header">
                        <h2>Thank you.</h2>
                        <span id="close-button" onclick="closeModal()">&times;</span>
                    </div>
                    <p>Your message has been sent.</p>
                    <p>Please be patient while you wait for a reply. I
                        will get back to you as soon as possible. &#128516;</p>
                </dialog>
            </div>
        </div>
    )
};

export default ContactForm;