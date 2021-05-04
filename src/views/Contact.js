import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

const Contact = () => {
  return (
    <div className="mt-5 container">
      <div className="mt-5 row d-flex align-items-start justify-content-center">
        <div className="col-12 col-lg-6">
          <ContactInfo />
        </div>
        <div className="col-12 col-lg-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
