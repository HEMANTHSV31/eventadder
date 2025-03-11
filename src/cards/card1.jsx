import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';
import image  from '../assets/event.png'
import './card.css'
const EventCard = () => {


  return (
    <motion.div
      whileTap={{ scale: 1.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen"
    >
      <Card className="w-[30%] bg-white p-4 shadow-xl rounded-xl transition-transform">
        
        <img src={image} alt="Event" className="w-40 h-32  object-cover rounded-t-xl" />
        
        <CardBody>
          <Typography variant="h5" color="blue" className="mb-2 text-center font-bold">
           FRONTEND FRENZY<hr/>
          </Typography>
          <Typography className="text-gray-700">
            <strong>Event Name:</strong> Frontend Frenzy 2.0  <br />
            <strong>Date:</strong> 13-03-2025 <br />
            <strong>Time:</strong> 8.45 AM <br />
            <strong>Venue:</strong> Bit Auditorium <br />
            <strong>Organized by:</strong> Code Circle Bit
          </Typography>

          
          <Link to='/eventadder/register'>
          <Button className="button">
            Register
          </Button>
          </Link>
        </CardBody>

        
      </Card>
    </motion.div>
  );
};

export default EventCard;
