import React, { useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // You can integrate EmailJS here if needed.
    // emailjs.sendForm(...);
  };

  return (
    <section className="contact-section" id="contact">
      <h2>📬 Contact Me</h2>

      {!submitted ? (
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <div className="success-message">
          <h3>Thanks for reaching out! 🚀</h3>
          <p>I’ll get back to you as soon as possible.</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
