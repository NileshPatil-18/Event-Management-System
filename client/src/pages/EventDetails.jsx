import React from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Event Details</h1>
      <p>Details for event ID: {id}</p>
    </div>
  );
};

export default EventDetails;
