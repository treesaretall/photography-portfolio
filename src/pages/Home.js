import React from "react";

import mebnw from "../img/home/mebnw.jpg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        {/*text and image wrapper*/}
        <div className="flex flex-col justify-center">
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">Photographer</h1>
          </div>
          <div>Image</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
