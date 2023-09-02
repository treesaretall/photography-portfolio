import React from "react";

import woodsbnw from "../img/about/woodsbnw.jpg";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section ">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div>image</div>
          <div>text</div>
        </div>
      </div>
    </section>
  );
};

export default About;
