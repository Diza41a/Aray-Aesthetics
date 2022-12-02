import React from 'react';

export default function Gallery() {

  return (
    <>
      <h2 className="section-title" id="gallery">Gallery</h2>
      <section className="gallery-wrap">
        <div className="gallery-gate">
          <div className="row-img">
            <div className="img-wrap">
              <img src="./assets/images/gallery1.png" alt="" />
            </div>
            <div className="img-wrap">
              <img src="./assets/images/gallery2.png" alt="" />
            </div>
          </div>
          <div className="row-btn">
            <button>Open Gallery...</button>
          </div>
          <div className="row-img">
            <div className="img-wrap">
              <img src="./assets/images/gallery3.png" alt="" />
            </div>
            <div className="img-wrap">
              <img src="./assets/images/gallery4.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
