'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import HomeImgThree from "public/images/HomeImgThree.jpg";
import HomeImgFour from "public/images/HomeImgFour.jpg";
import HomeImgFive from "public/images/HomeImgFive.jpg";
import HomeImgSix from "public/images/HomeImgSix.jpg";
import HomeImgSeven from "public/images/HomeImgSeven.jpg";
import HomeImgTwo from "public/images/HomeImgTwo.jpg";

const PortfolioText = () => {
  const [hover, setHover] = useState(null);

  const images = [
    HomeImgThree,
    HomeImgFour,
    HomeImgFive,
    HomeImgSix,
    HomeImgSeven,
    HomeImgTwo,
    HomeImgThree,
  ];

  return (
    <section className="section portfolio pb-0 fade-wrapper position-relative px-xl-3 px-md-0 px-sm-0">
      
      {/* TEXT SLIDER */}
      <div className="portfolio__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="portfolio__text-slider"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <SwiperSlide key={i}>
              <div className="portfolio__text-slider-single">
                <h2 className="h1">
                  <Link href="portfolio">Artint Studio</Link>
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* REUSABLE GRID FUNCTION */}
      {["Latest Songs", "Latest Albums", "Lyrics Music Videos"].map((title, sectionIndex) => (
        <div className="container-fluid" key={sectionIndex}>
          <h3 className="mb-1 mt-5">{title}</h3>
          <hr className="mb-5 mx-2" />

          <div className="row g-3">
            {images.map((img, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-xl-3" key={index}>
                <div
                  className={
                    "border rounded portfolio__single" +
                    (hover === img.src ? " portfolio__single-active" : "")
                  }
                  onMouseEnter={() => setHover(img.src)}
                  onMouseLeave={() => setHover(null)}
                  style={{ width: "100%", height: "500px", cursor: "pointer" }}
                >
                  <Link href="portfolio">
                    <Image
                      src={img}
                      alt="Image"
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

    </section>
  );
};

export default PortfolioText;
