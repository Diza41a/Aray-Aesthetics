import React, { useRef } from 'react';
import Link from 'next/link';
import AnimatedLayout from './subcomponents/AnimatedLayout.jsx';
import { useDraggable } from "react-use-draggable-scroll";
import NextPageLink from './subcomponents/NextPageLink.jsx';

// Data imports
const servicesJSON = require('./data/services.json');

export default function Services() {
  // const scrollContainer = useScrollContainer();
  const draggableRef = useRef();
  const { events } = useDraggable(draggableRef);

  const renderServices = () => servicesJSON.map((service, i) => {
    return (
      <div className="service-wrap" key={i}>
        <div
        className="service-background"
        style={{
          backgroundImage: `url('${service.imageUri}')`, backgroundPositionX: service.backgroundPositionX,
         }}
         />
        <div className="title-wrap">
          <p className="number">{('0' + (i + 1)).slice(-2)}</p>
          <h5 className="title">{service.name}</h5>
        </div>

        {/* Service description (hover) */}
        <div className="service-description">
          <h5 className="title">{service.name}</h5>
          <p className="description">{service.description}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      {/* <h2 className="section-title" id="services">Services</h2> */}
      <AnimatedLayout props={{className: "services-wrap"}}>

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
          <Link href="/contact" className="contact-btn btn">
            <span>Contact</span>
            <i className="fa-solid fa-phone" />{' '}
            <i className="fa-solid fa-chevron-down arrow" />
          </Link>
        </div>
        {/* <NextPageLink props={{ href: '/gallery', style: {right: '10%', left: 'initial'} }} /> */}
      </AnimatedLayout>
    </>
  );
};