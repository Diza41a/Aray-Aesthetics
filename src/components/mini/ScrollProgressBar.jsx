import React, { useEffect, useRef  } from 'react';

export default function ScrollProgressBar() {
  const progressBarEl = useRef(null);

  // ComponentDidMount
  useEffect(() => {
    window.onscroll = function() {scrollProgress()};

    const scrollProgress = () => {
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrolled = (winScroll / height) * 100;
      progressBarEl.current.style.width = scrolled + "%";
    }
  }, []);

  return (
    <div className="progressBar-wrap">
      <div className="progressBar" ref={progressBarEl} />
    </div>
  );
};
