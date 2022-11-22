import React, { useState } from "react";
import { useWindowDimensions } from "../../utils/CustomHooks";
import { DESKTOP_MIN } from "../../utils/Constants";

import facebook from "../../graphics/logos/facebook.png";
import twitter from "../../graphics/logos/twitter.png";
import instagram from "../../graphics/logos/instagram.png";
import linkedin from "../../graphics/logos/linkedin.png";
import coinbasenft from "../../graphics/logos/coinbasenft.png";
import opensea from "../../graphics/logos/opensea.png";
import website from "../../graphics/logos/website.png";
import eth from "../../graphics/logos/eth.png";
import matic from "../../graphics/logos/matic.png";
import usdc from "../../graphics/logos/usdc.png";

const EventCard = ({ event }) => {
  const dimensions = useWindowDimensions();
  return (
    <div
      className="card"
      style={{
        width:
          dimensions.width < DESKTOP_MIN
            ? "100%"
            : dimensions.width < DESKTOP_MIN * 2
            ? "47%"
            : "31%",
        height: "fit-content",
        backgroundImage: `url(${event.img})`,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,.85)",
          borderRadius: "22px",
        }}
      >
        <div>
          <div>
            <div
              style={{
                padding: "10px 10px 0px 10px",
                color: "#ffffff",
              }}
            >
              <h1>{event.name}</h1>
              <div>
                <img
                  style={{
                    width: "100%",
                    borderRadius: "25px",
                  }}
                  src={event.img}
                  alt={`${event.name}'s event picture`}
                />
              </div>
              <p>
                🗓{" "}
                {String(
                  new Date(event.datetime).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                )}
              </p>
              <p>
                🕒{" "}
                {String(
                  new Date(event.datetime).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                )}
              </p>
              <p>📍 {event.location}</p>
              <b>About</b>
              <p>{event.desc}</p>
            </div>
            <div style={{ padding: "0px 5px" }}>
              {!!event.facebook && (
                <a href={event.facebook}>
                  <img
                    style={{
                      width: "25px",
                      height: "25px",
                      padding: "5px",
                    }}
                    src={facebook}
                    alt={`${event.name}'s Facebook page`}
                  />
                </a>
              )}
              {!!event.twitter && (
                <a href={event.twitter}>
                  <img
                    style={{
                      width: "25px",
                      height: "25px",
                      padding: "5px",
                    }}
                    src={twitter}
                    alt={`${event.name}'s Twitter page`}
                  />
                </a>
              )}
              {!!event.instagram && (
                <a href={event.instagram}>
                  <img
                    style={{
                      width: "25px",
                      height: "25px",
                      padding: "5px",
                    }}
                    src={instagram}
                    alt={`${event.name}'s Instagram page`}
                  />
                </a>
              )}
              {!!event.linkedin && (
                <a href={event.linkedin}>
                  <img
                    style={{
                      width: "25px",
                      height: "25px",
                      padding: "5px",
                    }}
                    src={linkedin}
                    alt={`${event.name}'s LinkedIn page`}
                  />
                </a>
              )}
              {!!event.coinbasenft && (
                <a href={event.coinbasenft}>
                  <img
                    style={{
                      width: "25px",
                      height: "25px",
                      padding: "5px",
                    }}
                    src={coinbasenft}
                    alt={`${event.name}'s CoinbaseNFT page`}
                  />
                </a>
              )}
              {!!event.opensea && (
                <a href={event.opensea}>
                  <img
                    style={{
                      width: "25px",
                      height: "25px",
                      padding: "5px",
                    }}
                    src={opensea}
                    alt={`${event.name}'s OpenSea page`}
                  />
                </a>
              )}
              {!!event.website && (
                <a href={event.website}>
                  <img
                    style={{
                      width: "25px",
                      height: "25px",
                      padding: "5px",
                    }}
                    src={website}
                    alt={`${event.name}'s website page`}
                  />
                </a>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "rgba(255,255,255,.5)",
            borderRadius: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              borderRadius: "25px",
            }}
          >
            <div style={{ margin: "auto 0px", padding: "4px 0px 0px 0px" }}>
              <img
                style={{
                  width: "24px",
                  height: "24px",
                  padding: "10px",
                }}
                src={
                  event.currency === "matic"
                    ? matic
                    : event.currency === "eth"
                    ? eth
                    : usdc
                }
                alt="admission currency (USDC, ETH, or MATIC) logo"
              />
            </div>
            <div style={{ margin: "auto 0px" }}>
              <h3>
                {event.admission} {event.currency.toUpperCase()}
              </h3>
            </div>
          </div>
          <div
            style={{
              margin: "auto 10px",
            }}
          >
            <button style={{ width: "100px" }}>BUY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
