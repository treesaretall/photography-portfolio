import React from "react";

import { ImInstagram } from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.instagram.com/notaboutcows/" target="_blank">
            <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
