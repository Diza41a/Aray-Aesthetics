import React from 'react';

export default function Gallery() {
  return (
    <>
      <h2 className="section-title" id="gallery">Gallery</h2>
      <section className="gallery-wrap">
        <div className="gallery-gate">
          <div className="row-img">
            <img src="./assets/images/mock.jpg" alt="" />
            <img src="./assets/images/mock2.jpg" alt="" />
          </div>
          <div className="row-btn">
            <button>Open Gallery...</button>
          </div>
          <div className="row-img">
            <img src="./assets/images/mock2.jpg" alt="" />
            <img src="./assets/images/mock.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
