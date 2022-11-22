import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = ({ connectWallet, selectedAddress }) => {
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
        style={{ margin: "auto" }}
        onMouseEnter={({ currentTarget }) => {
          if (!selectedAddress) {
            currentTarget.style.color = "#000000";
          }
        }}
        onMouseOut={({ currentTarget }) => {
          if (!selectedAddress) {
            currentTarget.style.color = "#ffffff";
          }
        }}
        onClick={({ currentTarget }) => {
          if (!selectedAddress) {
            connectWallet();
            currentTarget.style.color = "#fc0";
          } else {
            alert(
              "Wallet already connected. To disconecct simply refresh the webpage."
            );
          }
        }}
      >
        {selectedAddress || "Connect Web3 Wallet"}
      </div>
    </div>
  );
};

export default Header;
