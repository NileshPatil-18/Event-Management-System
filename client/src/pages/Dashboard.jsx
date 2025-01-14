import React, { useState } from "react";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";

const Dashboard = () => {
  const [events, setEvents] = useState([
    { id: 1, name: "Tech Conference", date: "2025-01-20", description: "Explore the latest in tech." },
    { id: 2, name: "Art Expo", date: "2025-02-15", description: "Showcasing modern art pieces." },
  ]);

  const addEvent = (newEvent) => {
    const eventWithId = { ...newEvent, id: events.length + 1 };
    setEvents([eventWithId, ...events]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Event Dashboard</h1>
      <div className="mb-6">
        <EventForm addEvent={addEvent} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
