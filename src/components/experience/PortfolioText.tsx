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
import HomeImgOne from "public/images/HomeImgOne.jpg";
import HomeImgTwo from "public/images/HomeImgTwo.jpg";

const PortfolioText = () => {
  const [hover, setHover] = useState(0);
  return (
    <section className="section portfolio pb-0 fade-wrapper position-relative mx-5 px-5">
      
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
            reverseDirection: false,
          }}
          className="portfolio__text-slider"
        >
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="vision">Artint Studio</Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">Artint Studio</Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">Artint Studio</Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">Artint Studio</Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">Artint Studio</Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">Artint Studio</Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container-fluid">
       <h3 className="mb-1 mt-5">Latest Songs</h3>
        <hr className="mb-5 mx-2"/>
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 0 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(0)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgThree} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 1 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(1)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgFour} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 2 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(2)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgFive} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 3 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(3)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgSix} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 4 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(4)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgSeven} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 5 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(5)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgTwo} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 0 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(0)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgThree} alt="Image" />
              </Link>
            </div>
          </div>
        </div>
      </div>    

      <div className="container-fluid">
       <h3 className="mb-1 mt-5">Latest Albums</h3>
        <hr className="mb-5 mx-2"/>
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 0 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(0)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgThree} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 1 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(1)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgFour} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 2 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(2)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgFive} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 3 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(3)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgSix} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 4 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(4)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgSeven} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 5 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(5)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgTwo} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 0 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(0)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgThree} alt="Image" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h3 className="mb-1 mt-5">Lyrics Music Videos</h3>
        <hr className="mb-5 mx-2"/>
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 0 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(0)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgThree} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 1 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(1)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgFour} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 2 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(2)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgFive} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 3 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(3)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgSix} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 4 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(4)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgSeven} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 5 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(5)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgTwo} alt="Image" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                " border rounded border-dark portfolio__single topy-tilt fade-top" +
                (hover === 0 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(0)}
              style={{width:"350px", height:"400px"}}
            >
              <Link href="portfolio">
                <Image src={HomeImgThree} alt="Image" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default PortfolioText;
