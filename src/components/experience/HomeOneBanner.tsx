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
  style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
>
  <video
    autoPlay
    muted
    loop
    playsInline
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{ objectFit: "cover", zIndex: -1 }}
  >
    <source src="/videos/musicwave.mp4" type="video/mp4" />
  </video>

  <div className="container position-relative h-50 d-flex justify-content-center align-items-center text-center">
    <div className="w-100">

      <div className="banner__content text-white">

    <motion.h1
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fw-bold mb-0"
      style={{
        fontSize: "clamp(2rem, 10vw, 5rem)" 
      }}
    >
      Artint Studio
    </motion.h1>


        <motion.p
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="fs-2"
          style={{
          fontSize: "clamp(2rem, 10vw, 3rem)" 
      }}
        >
          Where Sound Meets Emotion - A Journey Through Music
        </motion.p>

      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default HomeOneBanner;
