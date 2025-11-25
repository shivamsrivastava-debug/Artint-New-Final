import React from "react";
import Image from "next/image";
import avatar from "public/images/testimonial/avatar.png";
import HomeImgOne from "/public/images/HomeImgOne.jpg";
import HomeImgTwo from "/public/images/HomeImgTwo.jpg";
import HomeImgThree from "/public/images/HomeImgThree.jpg";
import HomeImgFour from "/public/images/HomeImgFour.jpg";
import HomeImgFive from "/public/images/HomeImgFive.jpg";
import HomeImgSix from "/public/images/HomeImgSix.jpg";
import HomeImgSeven from "/public/images/HomeImgSeven.jpg";

const ClientFeedbackMain = () => {
  return (
    <section className="section feedback-s fade-wrapper">
      <div className="container">
        <div className="row gaper">

          <h3>Explore Lyrical Music Video - Artint Studios VEVO</h3>

          <div className="col-12 col-md-6 col-xl-4">
            <div className="topy-tilt fade-top w-100 h-100">
              <Image
                src={HomeImgOne}
                alt="Image"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <div className="topy-tilt fade-top w-100 h-100">
              <Image
                src={HomeImgTwo}
                alt="Image"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <div className="topy-tilt fade-top w-100 h-100">
              <Image
                src={HomeImgThree}
                alt="Image"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <div className="topy-tilt fade-top w-100 h-100">
              <Image
                src={HomeImgFour}
                alt="Image"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <div className="topy-tilt fade-top w-100 h-100">
              <Image
                src={HomeImgFive}
                alt="Image"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <div className="topy-tilt fade-top w-100 h-100">
              <Image
                src={HomeImgSix}
                alt="Image"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <div className="topy-tilt fade-top w-100 h-100">
              <Image
                src={HomeImgSeven}
                alt="Image"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4">
            <div className="topy-tilt fade-top w-100 h-100">
              <Image
                src={HomeImgOne}
                alt="Image"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedbackMain;
