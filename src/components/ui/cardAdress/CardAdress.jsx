import React from "react";
import "./CardAdress.css";
// import { IoLocation } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const CardAdress = (props) => {
  const { item } = props;
  return (
    <div className="cardAdress">
      <img className="imgCardAdress" src={item.img} alt="" />
      <div className="blockText">
        <div className="itemTextCardAdress">
          <h3 style={{ color: "red" }}>{item.title}</h3>
          <p
            className="open-p"
            style={{ background: item.isOpen ? "black" : "red" }}
          >
            {" "}
            {item.isOpen ? "Close" : "Open"}{" "}
          </p>
        </div>
        <div>
          <p>{item.adress}</p>
          <p style={{ fontSize: 16, color: "red" }}>
            <span
              style={{
                marginRight: "10px",
              }}
            >
              <BsFillTelephoneFill />
            </span>
            {item.tel}
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontSize: 16, color: "red" }}>Время работы:</p>
          <p style={{ fontSize: 16, color: "red" }}>
            <b> {item.workingTime.start}</b> <b>{item.workingTime.end}</b>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardAdress;
