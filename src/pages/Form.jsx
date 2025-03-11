import React, { useState } from "react";
import axios from "axios";
import './Form.css'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registerNumber,setRegisterNumber] = useState("");
  const [eventName,setEventName] = useState ("");
  const [Department,setDepartment] =useState("");
  const [file, setFile] = useState(null);

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("registernumber",registerNumber);
    formData.append("eventname",eventName);
    formData.append("department",Department);
    if (file) {
      formData.append("file", file);
    }

    try {
      await axios.post("http://localhost:5000/api/participants", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Participant registered successfully!");
      setName("");
      setEmail("");
      setRegisterNumber("");
      setEventName("");
      setDepartment("");
      set
      setFile(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to register participant.");
    } 
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="form-container"
      >
        <h1 className="title">
          Event Registration
        </h1>

       
        <div className="formcontent">
         
          <div>
            <label className="labelcontent">
              Participant Name *
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              required
            />
          </div>

          
          <div>
            <label className="labelcontent">
              E-mail *
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              required
            />
          </div>
        
        <div>
          <label className="labelcontent">
            Register Number*
            </label>
            <input
              type="number"
              placeholder="Enter your Phone Number"
              value={registerNumber}
              onChange={(e) => setPhone(e.target.value)}
              className="input"
              required
            />
          </div>

          <div>
          <label className="labelcontent">
             Event Name*
            </label>
            <input
              type="text"
              placeholder="Enter Event you are participating"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div>
          <label className="labelcontent">
             Department Name*
            </label>
            <input
              type="text"
              placeholder="Enter your Department Name"
              value={Department}
              onChange={(e) => setDepartment(e.target.value)}
              className="input"
              required
            />
          </div>

          
          <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => console.log(event.target.files)}
        multiple
      />
    </Button>

          
          <button
            type="submit"
            className="button"
            
          >
          Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
