import React, { useEffect } from 'react';
import AnimatedLayout from '../subcomponents/AnimatedLayout.jsx';

// Helpers
import { makeInputBox, makeTextArea } from '../subcomponents/helpers.js';

export default function Contact() {
  // ComponentDidMount
  useEffect(() => {
    document.body.style.overflowY = 'initial';
    document.querySelector('.direct-links').style.display = 'none';
    document.querySelector('header').style.position = 'sticky';
    document.querySelector('.mobile-nav-wrap').style.position = 'sticky';

    return () => {
        document.querySelector('.direct-links').style.display = 'flex';
        document.querySelector('header').style.position = 'fixed';
        document.querySelector('.mobile-nav-wrap').style.position = 'absolute';
        document.body.style.overflowY = 'hidden';
    }
  }, []);

  return (
    <>
      {/* <h2 className="section-title" id="contact">Contact</h2> */}
      <AnimatedLayout props={{className: "contact-wrap"}}>
        <form action="submit">
          <div className="row-name row">
            {makeInputBox('Name')}
            <p>Get in touch with us</p>
          </div>
          <div className="row-method row">
            {makeInputBox('Phone Number')}
            <p>or</p>
            {makeInputBox('Email')}
          </div>
          <div className="row-inquiry row">
            {makeTextArea('Your Inquiry')}
          </div>
          <div className="row-submit row">
            <button id="submit"><span>Submit</span></button>
          </div>
        </form>
        <div className="contact-direct">
          <div className="method">
            <i className="fa-solid fa-envelope" />
            <a href="mailto:araysyzdykova@yahoo.com">AraySyzdykova@yahoo.com</a>
          </div>
          <div className="method">
            <i className="fa-solid fa-phone" />
            <a href="tel:9419141541">{'+1 (941)914-1541'}</a>
          </div>
          <div className="links">
            <a href="https://www.instagram.com/aray_aesthetics_llc/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram" />
            </a>
            <a>
              <i className="fa-brands fa-facebook disabled" />
            </a>
            <a>
              <i className="fa-brands fa-pinterest disabled" />
            </a>
          </div>
          <div className="method"></div>
        </div>
      </AnimatedLayout>
    </>
  );
}