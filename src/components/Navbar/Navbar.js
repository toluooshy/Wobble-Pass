import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useWindowDimensions } from "../../utils/CustomHooks";
import { DESKTOP_MIN } from "../../utils/Constants";

import home from "../../graphics/icons/home.png";
import create from "../../graphics/icons/create.png";
import profile from "../../graphics/icons/profile.png";

const Navbar = ({}) => {
  const location = useLocation();
  const dimensions = useWindowDimensions();

  return dimensions.width < DESKTOP_MIN * 2 ? (
    <div
      className="footer"
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "4px 0px",
      }}
    >
      <div>
        <Link to="/">
          <img
            style={{
              width: "24px",
              opacity: location.pathname.length < 4 ? "100%" : "40%",
            }}
            src={home}
            alt="home icon"
          />
        </Link>
      </div>
      <div>
        <Link to="/create">
          <img
            style={{
              padding: "2px",
              width: "20px",
              opacity:
                location.pathname.indexOf("create") !== -1 ? "100%" : "40%",
            }}
            src={create}
            alt="create icon"
          />
        </Link>
      </div>
      <div>
        <Link to="/profile">
          <img
            style={{
              width: "24px",
              opacity:
                location.pathname.indexOf("profile") !== -1 ? "100%" : "40%",
            }}
            src={profile}
            alt="profile icon"
          />
        </Link>
      </div>
    </div>
  ) : (
    <div
      className="marquee"
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "4px 0px",
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            color: "#ffffff",
            opacity: location.pathname.length < 4 ? "100%" : "40%",
            fontSize: "larger",
            textDecoration: "none",
          }}
        >
          HOME
        </Link>
      </div>
      <div>
        <Link
          to="/create"
          style={{
            color: "#ffffff",
            opacity:
              location.pathname.indexOf("create") !== -1 ? "100%" : "40%",
            fontSize: "larger",
            textDecoration: "none",
          }}
        >
          EVENT
        </Link>
      </div>
      <div>
        <Link
          to="/profile"
          style={{
            color: "#ffffff",
            opacity:
              location.pathname.indexOf("profile") !== -1 ? "100%" : "40%",
            fontSize: "larger",
            textDecoration: "none",
          }}
        >
          PROFILE
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
