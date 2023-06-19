import React from "react";
import { Link } from "react-router-dom";

import Banner from "../slider/BannerHome";
import "./Home.css";
import ImgScroll from "./imgScroll/ImgScroll";
import Aside from "../aside/Aside";

const Home = () => {
  return (
    <>
      <Banner />

      <div className="row">
        <button className="btnAboutMe">
          <Link to="/about" style={{ color: "white", fontWeight: 500 }}>
            ABOUT ME
          </Link>
        </button>
      </div>
      <div style={{ width: 1200, paddingTop: "50px" }}>
        <ImgScroll />
      </div>
      <div className="hr"></div>
      <Aside />
    </>
  );
};

export default Home;
