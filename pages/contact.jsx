import React from 'react';

// Helpers
import { makeInputBox, makeTextArea } from './subcomponents/helpers.js';

export default function Contact() {

  return (
    <>
      <h2 className="section-title" id="contact">Contact</h2>
      <div className="contact-wrap">
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
            <a href="mailto:SomeEmail23@gmail.com">SomeEmail23@gmail.com</a>
          </div>
          <div className="method">
            <i className="fa-solid fa-phone" />
            <a href="tel:9413740327">{'+1 (941)374-0327'}</a>
          </div>
          <div className="links">
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-pinterest" />
          </div>
          <div className="method"></div>
        </div>
      </div>
    </>
  );
}