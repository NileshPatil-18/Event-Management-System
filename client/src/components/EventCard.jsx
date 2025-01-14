import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="border rounded shadow-md p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{event.name}</h3>
      <p className="text-gray-600">{event.date}</p>
      <p className="text-gray-700">{event.description}</p>
      <Link to={`/event/${event.id}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
};

export default EventCard;
