import React from "react";

import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import MobileNav from "./components/MobileNav";
import Socials from "./components/Socials";

import { BrowserRouter as Router } from "react-router-dom";

import { motion } from "framer-motion";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;
