"use client";

import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CardProps {
  title: string;
  text: string;
  updatedAt?: string;
  imageTop?: StaticImageData;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AlbumCard: React.FC<CardProps> = ({
  title,
  text,
  updatedAt,
  imageTop,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3, 
    triggerOnce: true, 
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section>
      <div className="d-flex justify-content-center align-items-center"  style= {{ padding: "40px 0" }}>
        <motion.div
          ref={ref}
          className="card shadow"
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          style={{
            width: "73%",
            borderRadius: "14px",
            overflow: "hidden",
            backgroundColor: "rgba(5, 5, 30, 0.6)",
          }}
        >
          {imageTop && (
            <Image
              src={imageTop}
              alt={title}
              className="card-img-top"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                objectPosition: "top",
                backgroundColor:"#000"
              }}
            />
          )}
          <div className="card-body" style={{ padding: "35px" }}>
            <h3
              className="fw-bold"
              style={{ textAlign: "left", fontSize: "1.8rem", color: "#fff" }}
            >
              {title}
            </h3>
            <p
              style={{
                color: "#d4d4d4",
                fontSize: "1.1rem",
                marginTop: "15px",
                lineHeight: "1.7",
                textAlign: "left",
              }}
            >
              {text}
            </p>
            {updatedAt && (
              <p
                className="mt-3"
                style={{ color: "#aaa", fontSize: "0.9rem", textAlign: "left" }}
              >
                Last updated {updatedAt}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AlbumCard;
