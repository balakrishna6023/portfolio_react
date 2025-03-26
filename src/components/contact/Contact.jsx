import React from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    
    emailjs.sendForm(
      "service_jtxko7a",   // Replace with your EmailJS Service ID
      "template_yyfqlkk",  // Replace with your EmailJS Template ID
      event.target,
      "ff4F9P0A_Zg8Eyn2d"    // Replace with your EmailJS Public Key
    ).then(
      (response) => {
        alert("Email sent successfully!");
      },
      (error) => {
        alert("Failed to send email.");
      }
    );

    event.target.reset(); // Clear the form after submission
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message.
          </p>
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
              <p>Andhra Pradesh, India</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
          <button className="contact-submit" type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
