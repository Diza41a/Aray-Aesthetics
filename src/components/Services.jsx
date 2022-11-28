import React from 'react';

// Data imports
const servicesJSON = require('../data/services.json');

export default function Services() {

  const renderServices = () => servicesJSON.map((service, i) => {
    return (
      <div className="service-wrap" key={i} style={{ backgroundImage: `url('${service.imageUri}')` }}>
        <div className="title-wrap">
          <p className="number">{('0' + (i + 1)).slice(-2)}</p>
          <h5 className="title">{service.name}</h5>
        </div>
      </div>
    );
  });

  return (
    <>
      <h2 className="section-title" id="services">Services</h2>
      <div className="services-wrap">
        <div className="services-gallery-wrap">
          {renderServices()}
        </div>
        <div className="services-reach-out">
          <p>Call for availability and most recent pricing!</p>
          <button className="contact-btn btn">
            {'Contact '}
            <i className="fa-solid fa-phone" />{' '}
            <i className="fa-solid fa-chevron-down arrow" />
          </button>
        </div>
      </div>
    </>
  );
};