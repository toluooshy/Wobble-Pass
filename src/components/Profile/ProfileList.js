import React, { useState } from "react";

import EventCard from "./EventCard";

const EventList = ({ events, type, setType, currency, setCurrency }) => {
  const [filteredEvents, setFilteredEvents] = useState(events);

  const filterEvents = (param, value) => {
    value = value.split(" ")[0].toLowerCase();
    console.log(value);
    value === "any"
      ? setFilteredEvents(events.filter((event) => event[param] !== null))
      : setFilteredEvents(events.filter((event) => event[param] === value));

    console.log(filteredEvents);
  };
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "rgba(0,0,0,.75)",
        borderRadius: "25px",
      }}
    >
      <h1 style={{ color: "#ffffff" }}>Events</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
          backgroundColor: "rgba(0,0,0,.75)",
          borderRadius: "25px",
        }}
      >
        <div>
          <pre style={{ color: "#ffffff" }}>Type</pre>
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              filterEvents("type", e.target.value);
            }}
          >
            <option name="any">Any Type</option>
            <option name="concerts">Concerts</option>
            <option name="parties">Networking</option>
            <option name="recreation">Recreation</option>
            <option name="networking">Networking</option>
          </select>
        </div>
      </div>
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          overflowY: "scroll",
        }}
      >
        {filteredEvents.map((event, index) => (
          <EventCard style={{ flex: "1" }} event={event} key={index} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
