import React from "react";

import Austin from "../img/portfolio/Austin.jpg";
import Cori from "../img/portfolio/Cori.JPG";
import Fate from "../img/portfolio/Fate.JPG";
import Jade from "../img/portfolio/Jade.JPG";
import Rhiannon from "../img/portfolio/Rhiannon.JPG";
import Sandra from "../img/portfolio/Sandra.JPG";

import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <div className="flex flex-col lg:items-start">
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Gers uiregiuh hiusdf. ihuahiusg hiurefhiu raiueh. ihudsvaiu
              fhreiuh faiuec iaehuhfg iuhaeiufh. asihucvaei rhurfciaewuhf
              husafei fhuieaw.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-2">
            <div className="max-w-[250px] lg:max-w-[500px] h-[187px] lg:h-[350px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-full hover:scale-110 transition-all duration-500"
                src={Cori}
                alt="Cori in the water"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[500px] h-[187px] lg:h-[350px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-full hover:scale-110 transition-all duration-500"
                src={Austin}
                alt="Austin at the park"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[500px] h-[187px] lg:h-[350px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-full hover:scale-110 transition-all duration-500"
                src={Fate}
                alt="Fate and the moon"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[500px] h-[187px] lg:h-[350px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-full hover:scale-110 transition-all duration-500"
                src={Jade}
                alt="Jade sitting downtown"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[500px] h-[187px] lg:h-[350px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-full hover:scale-110 transition-all duration-500"
                src={Rhiannon}
                alt="Rhiannon on a rainy day"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[500px] h-[187px] lg:h-[350px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-full hover:scale-110 transition-all duration-500"
                src={Sandra}
                alt="Sandra in front of some shops"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
