import React from "react";
import Image from "next/image";

const AboutCta = () => {
  return (
    <section className="cta-s section position-relative overflow-hidden bg-dark my-5">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          objectFit: "cover",
          opacity: "0.60",       
          zIndex: 2,             
 
        }}
      >
        <source src="/videos/wave.mp4" type="video/mp4" />
      </video>

      <div
        className="container position-relative"
        style={{ zIndex: 3 }} 
      >
        <div className="row">
          <div className="col-12">
            <div
              className="cta__wrapper bg-secondary.bg-gradient bg-opacity-75 p-5 mt-3 rounded-4"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-9">
                  <div className="section__header text-center">
                    <h2 className="title text-white">Stream Now</h2>
                    <h4 className="text-white">
                      Stream Artint Studios’ Music on Your Favorite Platforms
                    </h4>
                    <p className="text-white-50">
                      Discover our latest tracks and albums – now available on Apple Music,
                      Spotify, Amazon Music, YouTube, iHeartRadio, Boomplay, Deezer, and Tidal.
                      Tune in and experience music that moves you, wherever you are.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutCta;
