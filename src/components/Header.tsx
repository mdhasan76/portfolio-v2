"use client";
import Image from "next/image";
/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from "react"; // import state
import logo from "../../public/assets/logo-192.png";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const header: any = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    // console.log(scrollTop);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <div className="header-section bg-transparent flex items-center justify-between border-gray-400 px-5 duration-1000">
      <a href="#home" className="block">
        <Image
          src={logo}
          className="block"
          alt="hasan logo"
          height={100}
          width={100}
        />
      </a>
      <nav>
        <section className="MOBILE-MENU flex md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] [&>li>a]:text-lg">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="#about"
                  className="hover:scale-105 duration-300 inline-block"
                >
                  About
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="#experience"
                  className="hover:scale-105 duration-300 inline-block"
                >
                  Experience
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="#portfolio"
                  className="hover:scale-105 duration-300 inline-block"
                >
                  Portfolio
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="#contact"
                  className="hover:scale-105 duration-300 inline-block"
                >
                  Contact
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="https://drive.google.com/file/d/149S_I3rItsLmMkgbFLQunXxCUCMi4Ktd/view?usp=sharing"
                  target="_blank"
                  className="hover:scale-105 duration-300 inline-block"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 md:flex [&>li>a]:text-lg">
          <li>
            <a
              href="#about"
              className="hover:scale-105 duration-300 inline-block"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:scale-105 duration-300 inline-block"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:scale-105 duration-300 inline-block"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:scale-105 duration-300 inline-block"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/149S_I3rItsLmMkgbFLQunXxCUCMi4Ktd/view?usp=sharing"
              target="_blank"
              className="hover:scale-105 duration-300 inline-block"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        }
      `}</style>
    </div>
  );
}
