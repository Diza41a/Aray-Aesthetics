import React, { useState, useEffect } from 'react';
import AnimatedLayout from '../subcomponents/AnimatedLayout.jsx';
import NextPageLink from '../subcomponents/NextPageLink.jsx';

import { Gallery as GridGallery } from 'react-grid-gallery';
import galleryData from './data/gallery.json';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default function Gallery() {
  const [isExpanded, toggleExpand] = useState(false);

  const [isZoomed, toggleZoomed] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [...galleryData, ...galleryData];
  const imageUris = images.map(({src}) => src);

  // ComponentDidMount()
  useEffect(() => {
    // Double scrollbar workaround (services)
    document.body.style.overflowY = 'initial';

    return () => {
        document.body.style.overflowY = 'hidden';
    };
  }, []);

  return (
    <>
      <h2 className="section-title" id="gallery">Gallery</h2>
      <AnimatedLayout props={{className: "gallery-wrap"}}>
        {
          isExpanded ?
          <div className="expanded-gallery">
            <button id="collapse-gallery" onClick={(() => {
              toggleExpand(false);
              toggleZoomed(false);
            })}>
              <i className="fa-solid fa-left-long" />
              <span>{' Collapse'}</span>
            </button>
            <GridGallery images={images} enableImageSelection={false} onClick={((e) => {
              setPhotoIndex(e);
              toggleZoomed(true);
            })} />

            {isZoomed && (
              <Lightbox
                onImageLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
                mainSrc={imageUris[photoIndex]}
                nextSrc={imageUris[(photoIndex + 1) % imageUris.length]}
                prevSrc={imageUris[(photoIndex + imageUris.length - 1) % imageUris.length]}
                onCloseRequest={() => toggleZoomed(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex((photoIndex + imageUris.length - 1) % imageUris.length)
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % imageUris.length)
                }
              />
            )}

          </div>
          :
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
              <button onClick={(() => {
                toggleExpand(true);
              })}>Open Gallery...</button>
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
        }

        <NextPageLink props={{ href: '/contact' }} />
      </AnimatedLayout>
    </>
  );
};
