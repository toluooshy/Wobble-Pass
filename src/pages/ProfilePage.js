"use es6";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, resetUserSession } from "../services/AuthService";

import background from "../graphics/backgrounds/primary.png";

import ProfileCard from "../components/Profile/ProfileCard";
import { myProfile } from "../utils/Constants";

const ProfilePage = () => {
  const [profile, setProfile] = useState(myProfile);

  const navigate = useNavigate();

  const user = getUser();
  const name = user !== "undefined" && user ? user.name : "friend";
  console.log(user);

  const signoutHandler = () => {
    resetUserSession();
    navigate("/");
    window.location.reload();
  };
  return (
    <div
      style={{
        padding: "80px 0px 40px 0px",
      }}
    >
      MORE COMING SOON
      <ProfileCard profile={profile} setProfile={setProfile} />
    </div>
  );
};

export default ProfilePage;
