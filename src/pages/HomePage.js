"use es6";

import React, { useState } from "react";

import background from "../graphics/backgrounds/primary.png";
import EventList from "../components/Event/EventList";

import { allEvents } from "../utils/Constants";

const HomePage = ({}) => {
  const [events, setEvents] = useState(allEvents);
  const [type, setType] = useState("any");
  const [currency, setCurrency] = useState("any");

  return (
    <div
      style={{
        padding: "80px 0px 40px 0px",
      }}
    >
      MORE COMING SOON
      <div
        style={{
          margin: "auto",
          width: "80%",
        }}
      >
        <EventList
          events={events}
          type={type}
          setType={setType}
          currency={currency}
          setCurrency={setCurrency}
        />
      </div>
      <br />
    </div>
  );
};

export default HomePage;
