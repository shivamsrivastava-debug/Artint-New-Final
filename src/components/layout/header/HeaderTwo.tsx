import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/images/logo.png";
import logoLight from "public/images/logo-light.png";
import Offcanvas from "./Offcanvas";
import Artintlogo from "public/images/newlogo.png";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderTwo = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar cmn-nav";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  let logoSrc = logo;

  const router = useRouter();
  if (router.pathname === "/index-two-light") {
    logoSrc = logoLight;
  }

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image
                        src={Artintlogo}
                        alt="Image"
                        className="w-25 py-4"
                      />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button>
                          <Link href="/">Experience</Link>
                        </button>
                      </li>

                      <li className="navbar__item nav-fade">
                        <Link href="about-us">VISION</Link>
                      </li>

                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button>
                          <Link href="portfolio">Collection</Link>
                        </button>
                      </li>

                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button>
                          <Link href="client-feedback">Visual Realms</Link>
                        </button>
                      </li>

                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button>
                          <Link href="contact-us">Commision-Art</Link>
                        </button>
                      </li>

                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button>
                          <Link href="">Future</Link>
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="navbar__options">
                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default HeaderTwo;
