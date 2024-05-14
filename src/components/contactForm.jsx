import React, { useState } from 'react';

function ContactForm({ language }) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Subject:', subject);
    console.log('Message:', message);
    setSubject('');
    setMessage('');
  };

  const texts = {
    en: {
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      submitButton: 'Submit'
    },
    fr: {
      subjectLabel: 'Sujet',
      messageLabel: 'Message',
      submitButton: 'Envoyer'
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subject">{texts[language].subjectLabel}</label>
          <input
            required
            name="subject"
            id="subject"
            type="text"
            value={subject}
            onChange={handleSubjectChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">{texts[language].messageLabel}</label>
          <textarea
            required
            cols="50"
            rows="10"
            id="textarea"
            name="textarea"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <button type="submit" className="form-submit-btn">
          {texts[language].submitButton}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;



