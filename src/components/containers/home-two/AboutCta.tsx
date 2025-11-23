import React from "react";
import Image from "next/image";
import star from "public/images/testimonial/star.png";
const AboutCta = () => {
  return (
    <section className="cta-s section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="cta__wrapper"
              data-background="assets/images/cta-bg.png"
            >
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-9">
                  <div className="section__header text-center">
                    <h2 className="title">
                      Stream Now
                    </h2>
                    <h4>Stream Artint Studios’ Music on Your Favorite Platforms</h4>
                    <p>Discover our latest tracks and albums – now available on Apple Music, Spotify, Amazon Music, YouTube, iHeartRadio, Boomplay, Deezer , and Tidal. Tune in and experience music that moves you, wherever you are.</p>
                  </div>
                </div>
              </div>
              <Image src={star} alt="Image" className="star" />
              <Image src={star} alt="Image" className="star-two" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCta;
