import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          background: "#E4002B",
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#fff" }}>Политика конфиденциальности</span>
          <span style={{ color: "#fff" }}>Правила и условия</span>
        </div>
        <div style={{ color: "#fff" }}>
          © Copyright {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
