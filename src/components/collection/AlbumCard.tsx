"use client";

import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface CardProps {
  title: string;
  text: string;
  updatedAt?: string;
  imageTop?: StaticImageData;
}

interface AlbumCardProps {
  items: CardProps[]; // multiple cards as carousel
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AlbumCard: React.FC<AlbumCardProps> = ({ items }) => {
  return (
    <section style={{ padding: "40px 0" }} className="px-5">
       <div className="d-flex justify-content-center flex-column mb-5">
        <h3 className="text-center">Featured Albums</h3>
        <p className="fs-3 text-center">
          Film & Media Scores – Cinematic Soundtracks That Bring Stories to Life
        </p>
    </div>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        style={{ paddingBottom: "40px" }}
      >
        {items.map((card, i) => {
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
            <SwiperSlide key={i}>
              <div className="d-flex justify-content-center align-items-center">
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
                  {card.imageTop && (
                    <Image
                      src={card.imageTop}
                      alt={card.title}
                      className="card-img-top"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        objectPosition: "top",
                        backgroundColor: "#000",
                      }}
                    />
                  )}

                  <div className="card-body" style={{ padding: "35px" }}>
                    <h3
                      className="fw-bold"
                      style={{
                        textAlign: "left",
                        fontSize: "1.8rem",
                        color: "#fff",
                      }}
                    >
                      {card.title}
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
                      {card.text}
                    </p>

                    {card.updatedAt && (
                      <p
                        className="mt-3"
                        style={{
                          color: "#aaa",
                          fontSize: "0.9rem",
                          textAlign: "left",
                        }}
                      >
                        Last updated {card.updatedAt}
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default AlbumCard;
