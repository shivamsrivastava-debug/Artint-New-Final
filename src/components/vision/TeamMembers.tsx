import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import HomeImgThree from "/public/images/HomeImgThree.jpg";
import HomeImgFive from "/public/images/HomeImgFive.jpg";
import HomeImgSix from "/public/images/HomeImgSix.jpg";

const images = [HomeImgFive, HomeImgThree, HomeImgSix, HomeImgThree, HomeImgFive, HomeImgSix];

const TeamMembers = () => {
  return (
    <section
      className="section team-slider-s"
      style={{ paddingTop: "2rem", paddingBottom: "2rem" }} // reduced padding
    >
      {/* Section Header */}
      <div className="container-fluid">
        <div className="row gaper justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <div className="section__header mb-3">
              <h2 className="title title-anim text-center">Top Songs</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="team-r position-relative">
        <div className="team-s__slider-w">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            speed={800}
            loop={true}
            centeredSlides={false}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".next-team-s",
              prevEl: ".prev-team-s",
            }}
            className="team-s__slider"
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3, centeredSlides: true },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="team-s__slider-single">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={img} alt="Image" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="slide-group">
          <button aria-label="previous item" className="slide-btn prev-team-s">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button aria-label="next item" className="slide-btn next-team-s">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
     