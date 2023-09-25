import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

import { CursorContext } from "../context/CursorContext";

import { ImInstagram } from "react-icons/im";

const Jade =
  "https://drive.google.com/uc?export=view&id=1wboNx-UrId_3WMseSr69-Xj9p2llDUd8";
const Austin =
  "https://drive.google.com/uc?export=view&id=1xoYmMd5VfnWN9IReAQMcAzCFAgUap5lP";
const Sandra =
  "https://drive.google.com/uc?export=view&id=1wWRiRRFcv0YugwOsG5JhYDfUuIsqzU4Y";
const Cori =
  "https://drive.google.com/uc?export=view&id=1E8Mr6NPiJFV_1yERPY5UCtGxrbZ83LNk";
const Rhiannon =
  "https://drive.google.com/uc?export=view&id=1uVNnbVsQ8aGwpc_TrlaIj4mpsW_pPQx8";
const Fate =
  "https://drive.google.com/uc?export=view&id=1Gil1wKVA_zA29qoo7gf98W37lmi3OKY3";

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
              A brief selection of my work. More can be found on my InstaGram.
            </p>
            <a
              className="md:mb-[30px] sm:mb-[10px] mx-auto lg:mx-0"
              href="https://www.instagram.com/notaboutcows/"
              target="_blank">
              <ImInstagram className="w-[50px] h-[50px]" />
            </a>
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
