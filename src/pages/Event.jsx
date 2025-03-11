import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Event() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false); 
  };

  return (
    <>
      
      <Box sx={{ position: "fixed", bottom: 20, right: 20 ,background:"none"}}>
      <text className="font-medium text-violet-500 mb-3 mr-9">Add Event  </text>
        <Fab color="secondary" aria-label="add" onClick={handleClick}>
          <AddIcon />
        </Fab>
      </Box>

      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <form className="form">
            <TextField label="Event Name" fullWidth required />
            <TextField  type="date" fullWidth required  />
            <TextField  type="time" fullWidth required  />
            <TextField label="Venue" fullWidth required />
            <TextField label="Organizer" fullWidth required />

            <div className="flex justify-end gap-2 mt-4">
              <Button onClick={handleClose} color="error">Cancel</Button>
              <Button type="submit" variant="contained" color="primary">
                Add Event
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
