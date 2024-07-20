import React from "react";
import Hero from "../Components/Hero/Hero";
import "./pages.css";

import Popular from "../Components/Popular/Popular";
import Banner from "../Components/Banner/Banner";
import BannerBottom from "../Components/Banner/BannerBottom";
import Bestseller from "../Components/BestSeller/Bestseller";
import { Row } from "react-bootstrap";
import NewCollections from "../Components/NewCollections/NewCollections";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <BannerBottom />
      <h1 className="title">New Collections</h1>
      <NewCollections />
      <Banner />
    </div>
  );
};

export default Homepage;
