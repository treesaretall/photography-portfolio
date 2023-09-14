import React, { useContext } from "react";

import Austin from "../img/portfolio/Austin.jpg";
import Cori from "../img/portfolio/Cori.JPG";
import Fate from "../img/portfolio/Fate.JPG";
import Jade from "../img/portfolio/Jade.JPG";
import Rhiannon from "../img/portfolio/Rhiannon.JPG";
import Sandra from "../img/portfolio/Sandra.JPG";
import LeftArrow from "../img/arrow/arrow-left.png";
import RightArrow from "../img/arrow/arrow-right.png";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start">
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Gers uiregiuh hiusdf. ihuahiusg hiurefhiu raiueh. ihudsvaiu
              fhreiuh faiuec iaehuhfg iuhaeiufh. asihucvaei rhurfciaewuhf
              husafei fhuieaw.
            </p>
            <Link
              to={"/contact"}
              className="btn md:mb-[30px] sm:mb-[10px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </motion.div>

          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className="flex overflow-y-auto lg:gap-2 justify-center">
            <div
              className="gap-5 p-2 max-w-max bg-accent overflow-x-scroll object-scale-down snap-mandatory snap-x"
              style={{ display: "flex", flexDirection: "row" }}>
              <img
                className="object-cover h-full lg:h-full hover:scale-110 transition-all duration-500 snap-center"
                src={Cori}
                alt="Cori in the water"
              />
              <img
                className="object-cover h-full lg:h-full hover:scale-110 transition-all duration-500 snap-center"
                src={Austin}
                alt="Austin at the park"
              />
              <img
                className="object-cover h-full lg:h-full hover:scale-110 transition-all duration-500 snap-center"
                src={Fate}
                alt="Fate and the moon"
              />
              <img
                className="object-cover h-full lg:h-full hover:scale-110 transition-all duration-500 snap-center"
                src={Jade}
                alt="Jade sitting downtown"
              />
              <img
                className="object-cover h-full lg:h-full hover:scale-110 transition-all duration-500 snap-center"
                src={Rhiannon}
                alt="Rhiannon on a rainy day"
              />
              <img
                className="object-cover h-full lg:h-full hover:scale-110 transition-all duration-500 snap-center"
                src={Sandra}
                alt="Sandra in front of some shops"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
