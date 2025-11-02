import React, { useRef } from "react";
import styles from "./HomeVideo.module.css";
import { Container } from "reactstrap";

const HomeVideo = () => {
  const videoRef = useRef(null);

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (video) {
      if (video.requestFullscreen) video.requestFullscreen();
      else if (video.webkitRequestFullscreen)
        video.webkitRequestFullscreen(); // Safari
      else if (video.msRequestFullscreen) video.msRequestFullscreen(); // IE11
    }
  };

  return (
    <div className={styles.homeVideo}>
      <Container>
        <div className={styles.videoDiv}>
          <video
            ref={videoRef}
            className={styles.video}
            src="/video/high.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>

          <div className={styles.videoElements}>
            <div className={styles.videoBtns}>
              <button onClick={handleFullscreen}>
                <img src="/images/home/fs.svg" alt="Fullscreen" />
              </button>
              <button>
                <img src="/images/home/loc.svg" alt="Location" />
              </button>
            </div>

            <div className={styles.videoText}>
              <p>
                <span></span>construction
              </p>
              <p>
                <span></span>live site
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeVideo;
