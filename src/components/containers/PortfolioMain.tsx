import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeImgOne from "/public/images/HomeImgOne.jpg";
import HomeImgTwo from "/public/images/HomeImgTwo.jpg";
import HomeImgThree from "/public/images/HomeImgThree.jpg";
import HomeImgFour from "/public/images/HomeImgFour.jpg";
import HomeImgFive from "/public/images/HomeImgFive.jpg";
import HomeImgSix from "/public/images/HomeImgSix.jpg";
import HomeImgSeven from "/public/images/HomeImgSeven.jpg";
import HomeImgNine from "/public/images/HomeImgNine.jpg";



const PortfolioMain = () => {
  return (
    <section className="section portfolio-m fade-wrapper">
      
      <div className="container">
        <h3 className="pl-5 mb-3">Top Singles</h3>

        <div className="row gaper">
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={HomeImgOne} alt="Image" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={HomeImgTwo} alt="Image" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={HomeImgThree} alt="Image" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={HomeImgFour} alt="Image" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={HomeImgFive} alt="Image" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={HomeImgSix} alt="Image" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={HomeImgSeven} alt="Image" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={HomeImgFour} alt="Image" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={HomeImgNine} alt="Image" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={HomeImgOne} alt="Image" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={HomeImgTwo} alt="Image" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={HomeImgThree} alt="Image" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={HomeImgFour} alt="Image" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={HomeImgSix} alt="Image" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={HomeImgFive} alt="Image" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More..</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMain;
