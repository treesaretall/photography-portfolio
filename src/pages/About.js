import React from "react";

import woodsbnw from "../img/about/woodsbnw.jpg";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section ">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={woodsbnw} alt="Matt in the forest" />
          </div>
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              <b>Aaaasdfefiuheag iuhhefw iu fewairucfh</b>. iuahwefipuh
              eaihusadg iuhcaiuewci abdsuf iuehwf piuweuc. ieauhf iuewuhf
              epwiuhhf weiuuhceiw uhfiue.
              <br />
              <br />
              jhiouhefjaiophugj. eroihjs feroi fehw uhig soifjerwojf.
              rejivdsfklj oirjewf fijsog. ojirewiuh uhireafh bb fabehubyhf buaf
              fuainf uygauyg okjv eijosferhu.
            </p>
            <Link to={"/portfolio"} className="btn">
              View my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
