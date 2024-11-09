import { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { images, video } from "../../constants";

import "./about.css";

const About = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  return (
    <section id="about" className="section__padding about">
      <h2>Why We are Best Food Maker</h2>
      <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </p>

      <article className="about__content">
        <p>
          It is a long established fact that a reader will be distracted layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
          as opposed to using English. Many desktop publishing packages and web page editors now use 
          Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web 
          sites still in their infancy. Various versions have evolved over the years, sometimes by accident, 
          sometimes on purpose It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The normal distribution of letters, as opposed to using 
          'Content  Many desktop publishing packages and web page editors search for 'lorem ipsum'
          will uncover many web sites still in  humour and the like. 
          <span> Read More</span>
        </p>

        <div className="about__video">
          <video
            ref={videoRef}
            loop
            controls={false}
            poster={images.videoPoster}
            preload="none"
            playsInline>  
            <source src={video} type="video/mp4" />
          </video>

          <div className="about__video-overlay flex__center">
            <div
              className="about__video-overlay_circle flex__center"
              onClick={() => {
                setPlayVideo(!playVideo);
                if (playVideo) {
                  videoRef.current.pause();
                } else {
                  videoRef.current.play();
                }
              }}
            >
              { playVideo ? (
                <BsPauseFill 
                  className="about__video-pause"
                />
              ) : (
                <BsFillPlayFill 
                  className="about__video-play"
                />
              )}
            </div>
          </div>  
        </div>
      </article>
    </section>
  )
}

export default About;