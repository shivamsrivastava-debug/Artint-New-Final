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
        <div className="row gx-1 gy-3">
          <h3>Explore Lyrical Music Video - Artint Studios VEVO</h3>

          <div className="col-auto">
            <div
              className="topy-tilt fade-top"
              style={{ width: "350px", height: "400px" }}
            >
              <Image
                src={HomeImgOne}
                alt="Image"
                className="img-fluid object-fit-cover border border-dark rounded"
              />
            </div>
          </div>

          <div className="col-auto">
            <div
              className="topy-tilt fade-top"
              style={{ width: "350px", height: "400px" }}
            >
              <Image
                src={HomeImgTwo}
                alt="Image"
                className="img-fluid object-fit-cover border border-dark rounded"
              />
            </div>
          </div>

          <div className="col-auto">
            <div
              className="topy-tilt fade-top"
              style={{ width: "350px", height: "400px" }}
            >
              <Image
                src={HomeImgTwo}
                alt="Image"
                className="img-fluid object-fit-cover border border-dark rounded"
              />
            </div>
          </div>

          <div className="col-auto">
            <div
              className="topy-tilt fade-top"
              style={{ width: "350px", height: "400px" }}
            >
              <Image
                src={HomeImgTwo}
                alt="Image"
                className="img-fluid object-fit-cover border border-dark rounded"
              />
            </div>
          </div>

          <div className="col-auto">
            <div
              className="topy-tilt fade-top"
              style={{ width: "350px", height: "400px" }}
            >
              <Image
                src={HomeImgTwo}
                alt="Image"
                className="img-fluid object-fit-cover border border-dark rounded"
              />
            </div>
          </div>

          <div className="col-auto">
            <div
              className="topy-tilt fade-top"
              style={{ width: "350px", height: "400px" }}
            >
              <Image
                src={HomeImgTwo}
                alt="Image"
                className="img-fluid object-fit-cover border border-dark rounded"
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
