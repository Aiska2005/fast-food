import React from "react";
import img2 from "../assets/IconCard/iconOne.png";
import img3 from "../assets/IconCard/iconTree.png";
import img1 from "../assets/IconCard/iconTwo.png";
import logo from "../assets/logo/logo.svg";
import {
  FacebookOutlined,
  InstagramOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./Aside.css";

const Aside = () => {
  return (
    <div>
      <div className="blockSection" style={{ display: "flex", columnGap: 30 }}>
        <div>
          <div>
            <img className="logoSection" src={logo} alt="" />
          </div>
          <span>
            <PhoneOutlined style={{ color: "red" }} />
            +709573927
          </span>
        </div>

        <div className="information">
          <ul className="liBlock">
            <span className="itemli">Информация</span>
            <li>
              <Link>История</Link>
            </li>
            <li>
              <Link to="/restorans">Рестораны</Link>
            </li>
            <li>
              <Link to="/about">Халяль</Link>
            </li>
          </ul>
          <div>
            <ul className="liBlock">
              <span className="itemli">Нужна помощь?</span>
              <li>
                <Link to="/contact">Свяжитесь с нами</Link>
              </li>
              <li>
                <Link to="/rules">Правила и условия</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="liBlock">
              <span className="itemli"> Подписывайтесь на нас</span>
              <li
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  paddingTop: "10px",
                }}
              >
                <a href="">
                  <InstagramOutlined />
                </a>
                <a href="">
                  <FacebookOutlined />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="blockImgCardVisa">
          <img style={{ width: 35 }} src={img1} alt="" />
          <img style={{ width: 35 }} src={img2} alt="" />
          <img style={{ width: 35 }} src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Aside;
