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
  // Images को एक array में रखें
  const images = [
    HomeImgOne,
    HomeImgThree,
    HomeImgTwo,
    HomeImgFive,
    HomeImgSix,
    HomeImgFour,
    HomeImgSeven,
    HomeImgSix,
    HomeImgThree,
    HomeImgNine,
    HomeImgFour,
    HomeImgOne,
  ];

  return (
    <section className="section portfolio-m fade-wrapper" style={{marginTop:"150px", backgroundColor:"#37353E"}} >
      <div className="px-5">
        <h3 className="pl-5 mb-3">Top Singles</h3>

        <div className="row gaper">
          {images.map((img, index) => (
            <div key={index} className="col-12 col-lg-6 col-xxl-3">
              <div className="portfolio-m__single topy-tilt fade-top">
                <div className="thumb">
                  <Link href="service-single">
                    <Image src={img} alt="Image" className="border rounded" style={{width:"450px", height:"500px"}}/>
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
