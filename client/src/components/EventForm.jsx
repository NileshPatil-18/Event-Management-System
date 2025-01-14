import React, { useState } from "react";

const EventForm = ({ addEvent }) => {
  const [eventData, setEventData] = useState({
    name: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventData.name || !eventData.date || !eventData.description) {
      alert("All fields are required!");
      return;
    }
    addEvent(eventData);
    setEventData({ name: "", date: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="border rounded p-4 shadow-md">
      <h2 className="text-xl font-bold mb-4">Create New Event</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Event Name</label>
        <input
          type="text"
          name="name"
          value={eventData.name}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Event Date</label>
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={eventData.description}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
          rows="3"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Event
      </button>
    </form>
  );
};

export default EventForm;
