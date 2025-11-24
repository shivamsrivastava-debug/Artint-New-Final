import React from "react";
import Image from "next/image";
import Link from "next/link";
import Artintlogo from "public/images/newlogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="footer section pb-0"
      style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper">
          <div className="col-12">
            <div className="footer__single">
              <Link href="/" className="logo">
                <Image src={Artintlogo} alt="Image" className="w-25" />
              </Link>
              <div className="footer__single-meta">
                <Link
                  href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                  target="_blank"
                ></Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-2 col-xl-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Latest Songs</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="about-us">More Than To Night</Link>
                  </li>
                  <li>
                    <Link href="client-feedback">Can't Let You Go</Link>
                  </li>
                  <li>
                    <Link href="blog">Homecomming You It</Link>
                  </li>
                  <li>
                    <Link href="contact-us">One Earth One Home</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-2 col-xl-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Menu</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="/">The Experience</Link>
                  </li>
                  <li>
                    <Link href="portfolio">The Collection</Link>
                  </li>
                  <li>
                    <Link href="contact-us">Commision Art</Link>
                  </li>
                  <li>
                    <Link href="client-feedback">Visual Realms</Link>
                  </li>
                  <li>
                    <Link href="about-us">The Vision</Link>
                  </li>
                  <li>
                    <Link href="">The Future</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-2 col-xl-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Streaming Universe</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="about-us">Spotify</Link>
                  </li>
                  <li>
                    <Link href="client-feedback">Apple Music</Link>
                  </li>
                  <li>
                    <Link href="blog">Youtube</Link>
                  </li>
                  <li>
                    <Link href="contact-us">Instagram</Link>
                  </li>
                  <li>
                    <Link href="contact-us">TikTok</Link>
                  </li>
                  <li>
                    <Link href="contact-us">LinkedIn</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-2 col-xl-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Business Portals</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="about-us">Licencing Terms</Link>
                  </li>
                  <li>
                    <Link href="client-feedback">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="blog">Business Collaborations</Link>
                  </li>
                  <li>
                    <Link href="contact-us">Media Kit Download</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Stay Tuned</h5>
              </div>
              <div className="footer__single-content">
                <p>
                  If you have a vision, we can bring it to life. Let’s talk.
                </p>
                <div className="footer__single-form">
                  <form action="#" method="post">
                    <div className="input-email">
                      <input
                        type="email"
                        name="subscribe-news"
                        id="subscribeNews"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className="subscribe">
                        <i className="fa-sharp fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                {/* <div className="col-12 col-lg-8">
                  <div className="footer__copyright-text text-center">
                    <p>
                      Copyright &copy;
                      <span id="copyYear">{currentYear}</span> Xpovio by{" "}
                      <Link

                        href="https://themeforest.net/user/UltraDevs"
                        target="_blank"
                      >
                        UltraDevs{" "}
                      </Link>
                      . All Rights Reserved
                    </p>
                  </div>
                </div> */}

                {/* <div className="col-12 col-lg-4">
                  <div className="social justify-content-center justify-content-lg-end">
                    <Link href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="https://www.twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="https://www.pinterest.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
