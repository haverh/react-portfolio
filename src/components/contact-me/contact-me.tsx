import { forwardRef } from "react";

import "./contact-me.css";

const ContactMe = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} id="contact-me" className="contact-section h-screen flex flex-col justify-center items-center p-4 z-10 bg-[#141414]">
      <h2 className=" poppins-font">CONTACT ME</h2>
      <form id="contact-form" method="POST" className="contact-form w-full min-w-[300px] max-w-[500px]">
        <input type="hidden" name="access_key" value="511134da-3adf-421a-bcae-4694c917ec63"></input>

        <div className="contact-component contact-name">
          <label className="my-label" htmlFor="name">Name</label><br/>
          <input id="name" type="text" name="name" placeholder="Enter your full name"/>
        </div>
        
        <div className="contact-component contact-email">
          <label htmlFor="email">Email</label><br/>
          <input id="email" type="email" name="email" placeholder="Enter your email address"/>
        </div>
        

        <div className="contact-component contact-message">
          <label htmlFor="message">Message</label><br/>
          <textarea id="message" name="message" placeholder="Enter your message here..."></textarea>
        </div>

        <div className="contact-component">
          <button type="submit" className="real-btn bangers-font py-2 px-4">Submit</button>
        </div>
      </form>
    </div>
  )
});

export default ContactMe;