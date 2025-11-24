import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Artintlogo from "public/images/newlogo.png";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
}

const Offcanvas = ({ openNav, setOpenNav }: HeaderProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const handleNestedmenu = (nestmenu: string) => {
    if (nestmenu === openNestedMenu) {
      setOpenNestedMenu(null);
    } else {
      setOpenNestedMenu(nestmenu);
    }
  };

  const isNestedMenuOpen = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " nav__dropdown-active" : " ";
  };

  const isNestedMenuButton = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " navbar__item-active" : " ";
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? " nav__dropdown-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " navbar__item-active" : " ";
  };

  // window resize
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const closeNav = () => {
    setOpenNav(false);
    setOpenSubMenu(null);
  };

  return (
    <div className="offcanvas-nav">
      <div
        className={"offcanvas-menu" + (openNav ? " show-offcanvas-menu" : " ")}
      >
        <nav className="offcanvas-menu__wrapper" data-lenis-prevent>
          <div className="offcanvas-menu__header nav-fade">
            <div className="logo">
              <Link href="/">
                <Image src={Artintlogo} alt="Image" title="Image" priority className="w-25 py-4"  />
              </Link>
            </div>
            <button
              aria-label="close offcanvas menu"
              className="close-offcanvas-menu"
              onClick={closeNav}
            >
              <i className="fa-light fa-xmark-large"></i>
            </button>
          </div>
          <div className="offcanvas-menu__list">
            <div className="navbar__menu">
              <ul>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button>
                    <Link href="/">Experience</Link>
                  </button>
                </li>

                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button>
                    <Link href="about-us">Vision</Link>
                  </button>
                </li>

                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button>
                    <Link href="portfolio">Collection</Link>
                  </button>
                </li>

                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button>
                    <Link href="client-feedback">Visual realms</Link>
                  </button>
                </li>

                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button>
                    <Link href="contact-us">Commision-Art</Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Offcanvas;
