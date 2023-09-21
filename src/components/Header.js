import React, { useContext } from "react";

import Socials from "./Socials";
import Logo from "../img/header/Logo.png";
import MobileNav from "./MobileNav";

import { Link } from "react-router-dom";

import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link
          to={"/"}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          className="max-w-[200px]">
          <img className="h-[100px] lg:h-[140px]" src={Logo} alt="Logo" />
        </Link>
        {/*nav bar*/}
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          className="hidden xl:flex gap-x-12 font-semibold">
          <Link
            to={"/"}
            className="text-[#696c6d] btn bg-white w-8 h-8 rounded-full hover:text-primary transition">
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-[#696c6d] btn bg-white w-8 h-8 rounded-full hover:text-primary transition">
            About
          </Link>
          <Link
            to={"/portfolio"}
            className="text-[#696c6d] btn bg-white w-8 h-8 rounded-full hover:text-primary transition">
            Portfolio
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] btn bg-white w-8 h-8 rounded-full hover:text-primary transition">
            Contact
          </Link>
        </nav>
      </div>
      {/*socials*/}
      <Socials />
      {/*mobile nav*/}
      <MobileNav />
    </header>
  );
};

export default Header;
