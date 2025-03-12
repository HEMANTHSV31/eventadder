import React, { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import './Event.css'
export default function Event() {
  const [open, setOpen] = useState(false);
  const [eventData, setEventData] = useState({
    eventname: "",
    date: "",
    time: "",
    venue: "",
    organizer: "",
  });

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:7000/api/events", eventData, {
            headers: { "Content-Type": "application/json" }
        });

        console.log("Response:", response.data);
        alert("Event added successfully!");
        handleClose();
        window.location.reload(); 
    } catch (error) {
        console.error("Error adding event:", error.response?.data || error.message);
        alert("Failed to add event. Check the console for details.");
    }
};

  return (
    <>
      <Box sx={{ position: "fixed", bottom: 20, right: 20, background: "none" }}>
        <span className="font-medium text-violet-500 mb-3 mr-9">Add Event</span>
        <Fab color="secondary" aria-label="add" onClick={handleClick}>
          <AddIcon />
        </Fab>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <form  onSubmit={handleSubmit}>
            <TextField  name="eventname" label="Event Name" fullWidth required onChange={handleChange} />
            <TextField   name="date" type="date" fullWidth required onChange={handleChange} />
            <TextField  name="time" type="time" fullWidth required onChange={handleChange} />
            <TextField  name="venue" label="Venue" fullWidth required onChange={handleChange} />
            <TextField  name="organizer" label="Organizer" fullWidth required onChange={handleChange} />
            <div className="flex justify-evenly gap-2 mt-4">
              <Button onClick={handleClose} color="error" sx={{marginTop:5}}>Cancel</Button>
              <Button type="submit" variant="contained" color="primary" sx={{marginTop:5}}>Add Event</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
