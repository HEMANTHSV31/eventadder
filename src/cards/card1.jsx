import React, { useEffect, useState } from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import image from "../assets/event.png";
import "./card.css";

const EventCard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/api/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const handleDelete = (eventId) => {
    axios
      .delete(`http://localhost:7000/api/events/${eventId}`)
      .then(() => {
        setEvents(events.filter(event => event.id !== eventId));
        alert("Event deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
        alert("Failed to delete event.");
      });
  };
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {events.map((event) => (
        <motion.div
          key={event.id}
          whileTap={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[30%] bg-white p-4 shadow-xl rounded-xl"
        >
          <Card className="transition-transform">
            <img src={image} alt="Event" className="w-40 h-32 object-cover rounded-t-xl mx-auto" />
            <CardBody>
              <Typography variant="h5" color="blue" className="mb-2 text-center font-bold">
                {event.eventname}
              </Typography>
              <Typography className="text-gray-700">
                <strong>Date:</strong> {event.date} <br />
                <strong>Time:</strong> {event.time} <br />
                <strong>Venue:</strong> {event.venue} <br />
                <strong>Organized by:</strong> {event.organizer}
              </Typography>
              <div className="flex justify-evenly">
              <Link to="/eventadder/register">
                <Button className="button mt-3 w-full">Register</Button>
              </Link>
              <Button className="button mt-3 w-full" onClick={()=> handleDelete(event.id)}>Delete</Button>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default EventCard;
