import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ()  =>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_74mqik2', 'template_stmof9e', form.current, '-gZQ_MBrEOHepB7T1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <div className="container">
            <div className="contact-container">
                <div className="greetings">
                    <h2><span> Hello!</span> Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada, magna sed porta volutpat, orci sem tempus dui, dictum tincidunt mi nulla hendrerit sapien. Nunc sit amet ornare magna, sit amet consectetur leo.</p>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="contact-form">
                        <div>
                            <input type="text" name="user_name" className="sender-name" placeholder="Name" required/>
                        </div> 
                        <div>
                            <input type="text" name="user_email" className="sender-email" placeholder="E-mail" required/>
                        </div>
                        <div>
                            <input type="text" name="user_phone" className="sender-phonenum" placeholder="Phone number"/>
                        </div>
                        <div>
                            <textarea type="text" cols="40" rows="10" className="sender-message" placeholder="Message"name="message" required/>
                        </div>
                        <input type="submit" value="Send" className="send-btn"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;