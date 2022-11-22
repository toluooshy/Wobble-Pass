import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = ({}) => {
  const location = useLocation();

  const formattedParams = (params) => {
    return String(params).substring(1) === ""
      ? "Wobble Pass"
      : String(params).substring(1, 2).toUpperCase() +
          String(params).substring(2).replace("=", "");
  };

  return (
    <div
      className="header"
      style={{
        width: "100%",
        border: "solid 1px #000000",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          margin: "auto",
          textAlign: "left",
          fontSize: "xx-large",
        }}
      >
        {formattedParams(location.pathname)}
      </div>
      <div
        style={{
          margin: "auto",
          textAlign: "right",
        }}
      >
        0x6e77236c577E10855F3eaE68A5BE34bce1072e75
      </div>
    </div>
  );
};

export default Header;
