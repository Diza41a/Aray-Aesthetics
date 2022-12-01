import React, { useRef } from 'react';
// import { useScrollContainer } from 'react-indiana-drag-scroll';
import { useDraggable } from "react-use-draggable-scroll";

// Data imports
const servicesJSON = require('./data/services.json');

export default function Services() {
  // const scrollContainer = useScrollContainer();
  const draggableRef = useRef();
  const { events } = useDraggable(draggableRef);

  const renderServices = () => servicesJSON.map((service, i) => {
    return (
      <div className="service-wrap" key={i} style={{ backgroundImage: `url('${service.imageUri}')`, backgroundPositionX: service.backgroundPositionX }}>
        <div className="title-wrap">
          <p className="number">{('0' + (i + 1)).slice(-2)}</p>
          <h5 className="title">{service.name}</h5>
        </div>
      </div>
    );
  });

  return (
    <>
      {/* <h2 className="section-title" id="services">Services</h2> */}
      <div className="services-wrap">

        <h2 className="section-title" id="services">Services</h2>

        {/* <div className="services-gallery-wrap" ref={scrollContainer.ref}>
          {renderServices()}
        </div> */}
        <div
        className="services-gallery-wrap"
        {...events}
        ref={draggableRef} // add reference and events to the wrapping div
        >
          {renderServices()}
        </div>

        <div className="services-reach-out">
          <p>Call for availability and most recent pricing!</p>
          <button className="contact-btn btn">
            <span>Contact</span>
            <i className="fa-solid fa-phone" />{' '}
            <i className="fa-solid fa-chevron-down arrow" />
          </button>
        </div>
      </div>
    </>
  );
};