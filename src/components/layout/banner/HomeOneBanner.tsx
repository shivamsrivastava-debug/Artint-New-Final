import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const HomeOneBanner = () => {
  return (
    <>
      <section
        className="banner position-relative w-100"
        style={{ height: "70vh", overflow: "hidden" }} 
      >
        {/* <video
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover", zIndex: -1 }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://artint-studios.s3-eu-central-2.ionoscloud.com/artint-studios-music-website.mp4" type="video/mp4" />
        </video> */}

        {/* Content */}
        <div className="container position-relative h-100 d-flex align-items-center">
          <div className="row w-100">
            <div className="col-12">
              <div className="banner__content text-white">

                <motion.h1
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="fw-bold fs-1 mb-0"
                >
                  Artint Studio
                </motion.h1>

                <motion.p
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="fs-2 mt-2"
                >
                  Where Sound Meets Emotion - A Journey Through Music
                </motion.p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeOneBanner;
