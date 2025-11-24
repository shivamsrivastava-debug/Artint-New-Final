// components/GDS.tsx  
"use client";

import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface GDSProps {
  imgSrc: StaticImageData | string;
  heading: string;
  text: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const GDS: React.FC<GDSProps> = ({ imgSrc, heading, text }) => {
  // एक एनिमेशन कंट्रोल हर कार्ड के लिए इस्तेमाल करेंगे
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();

  // अलग-अलग inView hooks हर कार्ड के लिए
  const [ref1, inView1] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref4, inView4] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref5, inView5] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView1) controls1.start("visible");
  }, [controls1, inView1]);
  useEffect(() => {
    if (inView2) controls2.start("visible");
  }, [controls2, inView2]);
  useEffect(() => {
    if (inView3) controls3.start("visible");
  }, [controls3, inView3]);
  useEffect(() => {
    if (inView4) controls4.start("visible");
  }, [controls4, inView4]);
  useEffect(() => {
    if (inView5) controls5.start("visible");
  }, [controls5, inView5]);

  return (
    <div className="container mb-5">
      {/* Card 1 */}
      <motion.div
        ref={ref1}
        className="card shadow-lg d-flex flex-row align-items-center"
        style={{
          backgroundColor: "#1e1e2a",
          border: "1px solid #333",
          borderRadius: "12px",
          overflow: "hidden",
        }}
        initial="hidden"
        animate={controls1}
        variants={cardVariants}
      >
        <div className="position-relative" style={{ width: "30%", height: "300px" }}>
          <Image src={imgSrc} alt={heading} fill style={{ objectFit: "contain", objectPosition: "left center" }} />
        </div>
        <div className="card-body text-center" style={{ width: "70%", color: "#e0e0e0" }}>
          <h4 className="card-title mb-3" style={{ color: "#ffffff" }}>{heading}</h4>
          <p className="card-text" style={{ color: "#c0c0c0" }}>{text}</p>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        ref={ref2}
        className="card shadow-lg d-flex flex-row align-items-center mt-5"
        style={{
          backgroundColor: "#1e1e2a",
          border: "1px solid #333",
          borderRadius: "12px",
          overflow: "hidden",
        }}
        initial="hidden"
        animate={controls2}
        variants={cardVariants}
      >
        <div className="card-body text-center" style={{ width: "70%", color: "#e0e0e0" }}>
          <h4 className="card-title mb-3" style={{ color: "#ffffff" }}>{heading}</h4>
          <p className="card-text" style={{ color: "#c0c0c0" }}>{text}</p>
        </div>
        <div className="position-relative" style={{ width: "30%", height: "300px" }}>
          <Image src={imgSrc} alt={heading} fill style={{ objectFit: "contain", objectPosition: "left center" }} />
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        ref={ref3}
        className="card shadow-lg d-flex flex-row align-items-center mt-5"
        style={{
          backgroundColor: "#1e1e2a",
          border: "1px solid #333",
          borderRadius: "12px",
          overflow: "hidden",
        }}
        initial="hidden"
        animate={controls3}
        variants={cardVariants}
      >
        <div className="position-relative" style={{ width: "30%", height: "300px" }}>
          <Image src={imgSrc} alt={heading} fill style={{ objectFit: "contain", objectPosition: "left center" }} />
        </div>
        <div className="card-body text-center" style={{ width: "70%", color: "#e0e0e0" }}>
          <h4 className="card-title mb-3" style={{ color: "#ffffff" }}>{heading}</h4>
          <p className="card-text" style={{ color: "#c0c0c0" }}>{text}</p>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        ref={ref4}
        className="card shadow-lg d-flex flex-row align-items-center mt-5"
        style={{
          backgroundColor: "#1e1e2a",
          border: "1px solid #333",
          borderRadius: "12px",
          overflow: "hidden",
        }}
        initial="hidden"
        animate={controls4}
        variants={cardVariants}
      >
        <div className="card-body text-center" style={{ width: "70%", color: "#e0e0e0" }}>
          <h4 className="card-title mb-3" style={{ color: "#ffffff" }}>{heading}</h4>
          <p className="card-text" style={{ color: "#c0c0c0" }}>{text}</p>
        </div>
        <div className="position-relative" style={{ width: "30%", height: "300px" }}>
          <Image src={imgSrc} alt={heading} fill style={{ objectFit: "contain", objectPosition: "left center" }} />
        </div>
      </motion.div>

      {/* Card 5 */}
      <motion.div
        ref={ref5}
        className="card shadow-lg d-flex flex-row align-items-center mt-5"
        style={{
          backgroundColor: "#1e1e2a",
          border: "1px solid #333",
          borderRadius: "12px",
          overflow: "hidden",
        }}
        initial="hidden"
        animate={controls5}
        variants={cardVariants}
      >
        <div className="position-relative" style={{ width: "30%", height: "300px" }}>
          <Image src={imgSrc} alt={heading} fill style={{ objectFit: "contain", objectPosition: "left center" }} />
        </div>
        <div className="card-body text-center" style={{ width: "70%", color: "#e0e0e0" }}>
          <h4 className="card-title mb-3" style={{ color: "#ffffff" }}>{heading}</h4>
          <p className="card-text" style={{ color: "#c0c0c0" }}>{text}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default GDS;
