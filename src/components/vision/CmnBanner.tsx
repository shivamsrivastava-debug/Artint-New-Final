import React from "react";
import Link from "next/link";


const CmnBanner = ({title}:{title:string}) => {
  return (
    <>
      <section
        className="cmn-banner bg-img d-flex vh-70"
        style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.png')" }}
      >
        <div className="container">
          <div className="row gaper align-items-center d-flex flex-column justify-content-between align-items-center ">
            <div className="col-12 col-lg-5 col-xl-7">
              <div className="text-center">
                <h2 className="title title-anim">{title}</h2>             
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmnBanner;
