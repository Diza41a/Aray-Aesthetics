import React, { useState, useEffect } from 'react';
import AnimatedLayout from '../subcomponents/AnimatedLayout.jsx';
import NextPageLink from '../subcomponents/NextPageLink.jsx';
import FadeLoader from 'react-spinners/FadeLoader';

import { Gallery as GridGallery } from 'react-grid-gallery';
import galleryImages from './data/galleryImages.json';
import galleryVideos from './data/galleryVideos.json';
// temp!
import galleryThumbs from './data/galleryVideoThumbs(temp).json';

// choose one!!
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Gallery() {
  const [isExpanded, toggleExpand] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isLoading, toggleLoading] = useState(false);

  let images = [...galleryImages];
  const imageUris = images.map(({src}) => src);
  images = [...images, ...galleryThumbs];
  const videos = [...galleryVideos];
  const videoUris = videos.map(({src}) => src);

  let originalBackground = '';

  // ComponentDidMount()
  useEffect(() => {
    // Double scrollbar workaround (services)
    document.body.style.overflowY = 'initial';

    return () => {
        document.body.style.overflowY = 'hidden';
        document.querySelector('header').style.display = 'flex';
        document.querySelector('.page-progress-wrap').style.display = 'initial';
        document.querySelector('.hero').style.backgroundImage = originalBackground;
    };
  }, []);

  return (
    <>
      <h2 className="section-title" id="gallery">Gallery</h2>
      <AnimatedLayout props={{className: "gallery-wrap"}}>
        { isLoading
          ?
          <div className="loading-wrap">
            <FadeLoader
              color={'#ffffff'}
              loading={true}
              // cssOverride={}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <p className="loading-text">Loading...</p>
          </div>
          :
          isExpanded
          ?
          <div className="wrap">
            <video loop autoPlay muted>
              <source src="./assets/images/demo.mp4"/>
              <source src="./assets/images/back.mp4"/>
            </video>
            <div className="expanded-gallery">

              <button id="collapse-gallery" onClick={(() => {
                document.querySelector('header').style.display = 'flex';
                document.querySelector('.page-progress-wrap').style.display = 'initial';
                document.querySelector('.hero').style.backgroundImage = originalBackground;

                const galleryWrap = document.querySelector('.gallery-wrap');
                toggleExpand(false);
              })}>
                <i className="fa-solid fa-left-long" />
                <span>{' Collapse'}</span>
              </button>

              <Carousel
                emulateTouch
                showThumbs={false}
                showIndicators={false}
                selectedItem={photoIndex}
              >
                {imageUris.map((uri, i) => {
                  return (<div key={i}>
                    <img src={`${uri}`} data-index={i} loading="lazy" decoding="sync" />
                  </div>);
                })}
                {videoUris.map((uri, i) => {
                  return (<div key={i}>
                    <video data-index={imageUris.length + i} controls={true} playsInline muted>
                      <source src={`${uri}`} type="video/mp4"/>
                    </video>
                  </div>);
                })}

              </Carousel>

              <GridGallery images={images} enableImageSelection={false} onClick={((e) => {
                setPhotoIndex(e);
              })} />
            </div>
          </div>
          :
          <>
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
                  document.querySelector('header').style.display = 'none';
                  document.querySelector('.page-progress-wrap').style.display = 'none';
                  originalBackground = document.querySelector('.hero').style.backgroundImage;
                  document.querySelector('.hero').style.backgroundImage = 'url(./assets/images/purpleBack.jpeg)';

                  const galleryWrap = document.querySelector('.gallery-wrap');
                  toggleLoading(true);

                  setTimeout(() => {
                    toggleExpand(true);
                    toggleLoading(false);
                  }, 2500);
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
            <NextPageLink props={{ href: '/contact' }} />
          </>
        }

      </AnimatedLayout>
    </>
  );
};
