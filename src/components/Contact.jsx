import React, { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import successAnimation from '../assets/success.json';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate cyber transmission/loading state
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  return (
    <section className="contact-section" id="contact">
      <h2 data-aos="fade-up">📬 Establish Connection</h2>

      <div className="contact-container" data-aos="fade-up">
        {!submitted ? (
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form glass-panel">
            <div className="form-header">
              <span className="terminal-prompt">USER@TERMINAL:~ $ send_message</span>
            </div>
            
            <div className="input-group">
              <input type="text" name="user_name" required placeholder=" " />
              <label>Ident_Name</label>
              <div className="input-bar"></div>
            </div>

            <div className="input-group">
              <input type="email" name="user_email" required placeholder=" " />
              <label>Ident_Email</label>
              <div className="input-bar"></div>
            </div>

            <div className="input-group">
              <textarea name="message" required rows="5" placeholder=" " />
              <label>Payload_Message</label>
              <div className="input-bar"></div>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              <span>{loading ? 'TRANSMITTING...' : 'SEND PAYLOAD'}</span>
            </button>
          </form>
        ) : (
          <div className="success-wrapper glass-panel">
            <div className="lottie-success-container">
              <Lottie 
                animationData={successAnimation} 
                loop={false} 
                className="success-lottie"
              />
            </div>
            <h3>TRANSMISSION COMPLETE 🚀</h3>
            <p>Data payload received. Initiating response protocol soon.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

