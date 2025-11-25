"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Jingle {
  title: string;
  description: string;
  imageSrc: string;
}

const jinglesData: Jingle[] = [
  {
    title: "Morning Buzz",
    description: "A cheerful jingle to wake up your senses.",
    imageSrc: "/images/HomeImgOne.jpg",
  },
  {
    title: "Future Stack",
    description: "A futuristic sonic logo for innovation.",
    imageSrc: "/images/HomeImgTwo.jpg",
  },
  {
    title: "Future Stack",
    description: "A futuristic sonic logo for innovation.",
    imageSrc: "/images/HomeImgNine.jpg",
  },
  {
    title: "Future Stack",
    description: "A futuristic sonic logo for innovation.",
    imageSrc: "/images/HomeImgFive.jpg",
  },
  {
    title: "Future Stack",
    description: "A futuristic sonic logo for innovation.",
    imageSrc: "/images/HomeImgNine.jpg",
  },
  {
    title: "Future Stack",
    description: "A futuristic sonic logo for innovation.",
    imageSrc: "/images/HomeImgOne.jpg",
  },
  {
    title: "Future Stack",
    description: "A futuristic sonic logo for innovation.",
    imageSrc: "/images/HomeImgTwo.jpg",
  },
 {
    title: "Future Stack",
    description: "A futuristic sonic logo for innovation.",
    imageSrc: "/images/HomeImgFour.jpg",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const JingleSonic: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="mb-5 d-flex justify-content-center align-items-center"
    >
      <div className="row g-4 border rounded border-dark py-5" style={{ width:"73%", backgroundColor: "#1E1E2A", color: "#E0E0E0"}}>
        {jinglesData.map((jingle, index) => (
          <motion.div
            key={jingle.title}
            className="col-6 col-sm-4 col-lg-3"
            custom={index}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <div
              className="card position-relative overflow-hidden card-custom-hover blur-box"
              style={{
                borderRadius: "12px",
                backgroundColor: "#292934",
                cursor: "pointer",
              }}
            >
              <div
                className="position-relative w-100"
                style={{ height: "140px" }}
              >
                <Image
                  src={jingle.imageSrc}
                  alt={jingle.title}
                  fill
                  style={{ objectFit: "cover", objectPosition:"top"}}
                  className="fluid"
                />
              </div>


              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center overlay-hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="white"
                  className="bi bi-play-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zM6.79 5.093a.5.5 0 0 1 .79.41v4.994a.5.5 0 0 1-.79.41L4.5 9.97a.5.5 0 0 1 0-.94l2.29-1.937z" />
                </svg>
              </div>


              <div
                className="card-body text-center p-3"
                style={{ backgroundColor: "#21212e" }}
              >
                <h1 className="h5" style={{ color: "#E0E0E0" }}>
                  {jingle.title}
                </h1>
                <p className="small" style={{ color: "#B0B0B0" }}>
                  {jingle.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>


      <style jsx>{`
        .card-custom-hover {
          border-width: 1px;
          transition: transform 0.3s ease, box-shadow 0.3s ease,
            border-color 0.3s ease;
        }
        .card-custom-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(128, 0, 128, 0.3),
            0 4px 10px rgba(128, 0, 128, 0.3);
        }

        .overlay-hover {
          background-color: rgba(0, 0, 0, 0.4);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .card-custom-hover:hover .overlay-hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default JingleSonic;
