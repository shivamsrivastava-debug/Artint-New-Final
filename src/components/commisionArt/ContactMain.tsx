import React from "react";
import Image from "next/image";
import Link from "next/link"; 
import star from "public/images/star.png";

const ContactMain = () => {
  return (
    <section className="section contact-m fade-wrapper py-5 py-md-5 py-lg-7"> 
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-md-10 col-lg-9 col-xl-8"> 
            <div className="section__header">
              <h2 className="display-4 fw-bold mb-3">Start Early Partnerships</h2>
              <p className="lead text-secondary"> 
                Invite film studios to collaborate on groundbreaking projects.
                Get involved in the creative process from day one and shape the
                future of audio-visual storytelling.
              </p>
            </div>
          </div>
        </div>




        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8"> 
            <div className="p-4 p-md-5 rounded-4 shadow-lg" style={{ backgroundColor: '#1A1A2E' }}> 
              <form action="#" method="post" className="contact-form">
                <div className="row g-4"> 
                  <div className="col-12 col-sm-6">
                    <div className="mb-3"> 
                      <label htmlFor="studioName" className="form-label text-light">Studio Name</label> 
                      <input
                        type="text"
                        name="studio-name"
                        id="studioName"
                        className="form-control bg-dark border-secondary text-light"
                        placeholder="Your studio name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="contactName" className="form-label text-light">Contact Name *</label>
                      <input
                        type="text"
                        name="contact-name"
                        id="contactName"
                        className="form-control bg-dark border-secondary text-light"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                  </div>
                  {/* Email Address */}
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="emailAddress" className="form-label text-light">Email Address *</label>
                      <input
                        type="email"
                        name="email-address"
                        id="emailAddress"
                        className="form-control bg-dark border-secondary text-light"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  {/* Phone Number */}
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="phoneNumber" className="form-label text-light">Phone Number</label>
                      <input
                        type="tel"
                        name="phone-number"
                        id="phoneNumber"
                        className="form-control bg-dark border-secondary text-light"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  {/* Project Type of Interest */}
                  <div className="col-12">
                    <div className="mb-3">
                      <label htmlFor="projectType" className="form-label text-light">Project Type of Interest</label>
                      <select id="projectType" className="form-select bg-dark border-secondary text-light"> 
                        <option value="" disabled selected>Select a project type</option> 
                        <option value="film" className="text-light">Film Production</option>
                        <option value="tv" className="text-light">TV Series</option>
                        <option value="animation" className="text-light">Animation Project</option>
                        <option value="docs" className="text-light">Documentary</option>
                        <option value="other" className="text-light">Other</option>
                      </select>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="col-12">
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label text-light">Message *</label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        className="form-control bg-dark border-secondary text-light"
                        placeholder="Tell us about your studio, your vision, and how you'd like to collaborate on our upcoming projects..."
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-lg d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(90deg, #8A2BE2, #FF69B4)', color: 'white', border: 'none' }}> {/* कस्टम ग्रेडिएंट, btn-lg, d-flex */}
                    <Image src={star} alt="Star" width={20} height={20} className="me-2" /> 
                    Start Partnership Discussion
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;