import React from "react";
import Link from "next/link";

const Info = () => {
  return (
    <section className="section four-info">
      <div className="container">
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-6">
            <div className="four-info__content text-center">
              <h2 className="fw-7 title-anim">
                Sonic Resonance
              </h2>
              <p>
                At Artint Studios, we specialize in creating original soundtracks, cinematic scores, and sonic branding that resonate deeply with your audience. Our music is designed to elevate every moment, whether it’s an emotional film scene, an exciting game soundtrack, or a brand's unique sonic identity.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="container mt-5">
        <div className="row gaper align-items-start justify-content-end">
          <div className="col-12 col-lg-6">
            <div className="four-info__content text-center">
              <h2 className="title-anim">Passion</h2>
              <p>
                Born from a passion for storytelling through sound, Artint Studios brings together creative professionals who believe in the power of music to amplify emotion and narrative. We focus on producing high-quality, custom music that enhances your creative vision. Whether it's a lyrical music video, cinematic soundtrack, or non-lyrical composition, our work is tailored to meet the unique needs of each project
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="container mt-5">
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-6">
            <div className="four-info__content text-center">
              <h2 className="title-anim">
                Experimental
              </h2>
              <p>
                At Artint Studios, we create more than just music—we create experiences. Our soundtracks have already been featured in a variety of creative ventures, helping brands, filmmakers, and game developers connect with their audiences on a deeper level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
