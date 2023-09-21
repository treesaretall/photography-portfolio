import React, { useContext } from "react";

import { ImInstagram } from "react-icons/im";

import { CursorContext } from "../context/CursorContext";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaverHandler}
      className="hidden xl:flex ml-14">
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.instagram.com/notaboutcows/" target="_blank">
            <ImInstagram className="w-8 h-8 bg-white" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
