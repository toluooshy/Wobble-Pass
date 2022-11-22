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

const ProfileCard = ({ profile, setProfile }) => {
  const dimensions = useWindowDimensions();
  return (
    <div
      className="card"
      style={{
        height: "fit-content",
      }}
    >
      <div>
        <div>
          <div style={{ padding: "10px" }}>
            <h2>{profile.username}</h2>
            <div style={{ display: "flex" }}>
              <img
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "100%",
                }}
                src={profile.img}
                alt={`${profile.username}'s profile picture`}
              />
              <div style={{ margin: "auto 10px" }}>
                <h3>4 Events</h3>
              </div>
              <div style={{ margin: "auto 10px" }}>
                <h3>20 Tickets</h3>
              </div>
              <div style={{ margin: "auto 10px" }}>
                <h3>69 Friends</h3>
              </div>
            </div>
            <p>{profile.bio}</p>
            <p>📍 {profile.location}</p>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "rgba(0,0,0,.75)",
              borderRadius: "22px",
            }}
          >
            {!!profile.facebook && (
              <a href={profile.facebook}>
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    padding: "10px 5px 5px 10px",
                  }}
                  src={facebook}
                  alt={`${profile.username}'s Facebook page`}
                />
              </a>
            )}
            {!!profile.twitter && (
              <a href={profile.twitter}>
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    padding: "10px 5px 5px 10px",
                  }}
                  src={twitter}
                  alt={`${profile.username}'s Twitter page`}
                />
              </a>
            )}
            {!!profile.instagram && (
              <a href={profile.instagram}>
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    padding: "10px 5px 5px 10px",
                  }}
                  src={instagram}
                  alt={`${profile.username}'s Instagram page`}
                />
              </a>
            )}
            {!!profile.linkedin && (
              <a href={profile.linkedin}>
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    padding: "10px 5px 5px 10px",
                  }}
                  src={linkedin}
                  alt={`${profile.username}'s LinkedIn page`}
                />
              </a>
            )}
            {!!profile.coinbasenft && (
              <a href={profile.coinbasenft}>
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    padding: "10px 5px 5px 10px",
                  }}
                  src={coinbasenft}
                  alt={`${profile.username}'s Coinbase NFT page`}
                />
              </a>
            )}
            {!!profile.opensea && (
              <a href={profile.opensea}>
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    padding: "10px 5px 5px 10px",
                  }}
                  src={opensea}
                  alt={`${profile.username}'s OpenSea page`}
                />
              </a>
            )}
            {!!profile.website && (
              <a href={profile.website}>
                <img
                  style={{
                    width: "25px",
                    height: "25px",
                    padding: "10px 5px 5px 10px",
                  }}
                  src={website}
                  alt={`${profile.username}'s website page`}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
