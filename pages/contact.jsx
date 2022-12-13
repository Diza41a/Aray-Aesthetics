import React, { useEffect } from 'react';
import AnimatedLayout from '../subcomponents/AnimatedLayout.jsx';
const axios = require('axios');

// Helpers
import { makeInputBox, makeTextArea } from '../subcomponents/helpers.js';

export default function Contact() {
  // ComponentDidMount
  useEffect(() => {
    document.querySelector('header').style.position = 'sticky';

    return () => {
        document.querySelector('header').style.position = 'fixed';
    }
  }, []);

  // Form handlers
  const validateLength = (str, len) => str.length >= len;
  const validatePhone = (phone) => phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
  const validateEmail = (email) => String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  const sendRequest = (e) => {
    e.preventDefault();
    const nameEl = document.getElementById('name');
    const phoneEl = document.getElementById('phone-number');
    const emailEl = document.getElementById('email');
    const inquiryEl = document.getElementById('your-inquiry');

    // Length validation
    let invalidPresent = false;
    for (const [inputEl, len] of [[nameEl, 4], [inquiryEl, 20]]) {
      inputEl.value = inputEl.value.trim();
      if (!validateLength(inputEl.value, len)) {
        inputEl.value = '';
        inputEl.placeholder = `Min length: ${len}`;
        invalidPresent = true;
      }
    }

    const phoneOrEmail = {
      phone: false,
      email: false,
    };

    // Phone validation
    if (!validatePhone(phoneEl.value)) {
      phoneEl.value = '';
      phoneEl.placeholder = 'invalid';
    } else {
      phoneOrEmail.phone = true;
    }

    // Email validation
    if (!validateEmail(emailEl.value)) {
      emailEl.value = '';
      emailEl.placeholder = 'invalid';
    } else {
      phoneOrEmail.email = true;
    }

    // If invalid inputs exist, don't submit the form
    if (invalidPresent
      || (!phoneOrEmail.phone && !phoneOrEmail.email)) {
      return;
    }

    const resultEl = document.querySelector('p.result');
    console.log(resultEl);
    axios.post('/api/mail', {
      username: nameEl.value,
      phone: phoneOrEmail.phone ? phoneEl.value : undefined,
      email: phoneOrEmail.email ? emailEl.value : undefined,
      inquiry: inquiryEl.value,
     })
      .then((res) => {
        for (const inputEl of [nameEl, phoneEl, emailEl, inquiryEl]) {
          inputEl.placeholder = '';
          inputEl.value = '';
        }
        resultEl.innerText = 'Message submitted...';
      })
      .catch((err) => {
        resultEl.innerText = 'Error, try again later...';
      });
  }

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
            <button id="submit" onClick={sendRequest}><span>Submit</span></button>
          </div>
          <p className="result" />
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