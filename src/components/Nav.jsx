import React, { useState } from "react";
import headerlogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import close from "../assets/icons/xx.png";
import { navLinks } from "../constants";
const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="padding-x py-8 z-10 w-full absolute">
      <nav className=" flex justify-between items-center max-container ">
        <a href="/">
          <img src={headerlogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex  flex-1 justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            setOpenNav(!openNav);
          }}
          className="sm:hidden cursor-pointer"
          style={{ zIndex: openNav ? 100 : 0 }}
        >
          <img
            src={openNav ? close : hamburger}
            alt="hamburger"
            width={25}
            height={25}
          />
        </button>
        {openNav ? (
          <div
            className="bg-black fixed top-0 left-0 bg-opacity-90 w-[100vw] 
    h-[100vh] overflow-y-auto
    flex flex-row justify-center
    "
          >
            <ul className="flex list-decimal flex-col gap-6 justify-center mb-12 font-extrabold">
              <li className="font-montserrat underline text-white leading-normal text-lg">
                <a href="/">Home</a>
              </li>
              <li className="font-montserrat leading-normal text-lg underline text-white">
                <a href="/">About</a>
              </li>
              <li className="font-montserrat leading-normal text-lg underline text-white">
                <a href="/">Products</a>
              </li>
              <li className="font-montserrat leading-normal text-lg underline text-white">
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
};

export default Nav;
