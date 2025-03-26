import React from 'react'
import './contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "546f03fc-2afe-49a4-9b39-86a74d62699b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  }


  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want to me work on. You can contact me anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                   <img src={mail_icon} alt="" />
                   <p>balakrishnalingala94@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+91 9390824604</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Andhrapradesh,India</p>
                </div>
            </div>
        </div>
        <form  className="contact-right" onSubmit={onSubmit}>
            <label htmlFor="">Your name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="email">Your email</label>
            <input type="email" placeholder='enter your email' name='email' />
            <label htmlFor="">write your message here</label>
            <textarea name="message" rows="8" placeholder='enter your message' ></textarea>
            <button className="contact-submit" type='submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
