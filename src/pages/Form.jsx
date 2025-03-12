import React, { useState } from "react";
import axios from "axios";
import './Form.css';  
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    registerNumber: "",
    eventName: "",
    department: "",
  });
  const [csvFile, setCsvFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCsvChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await axios.post("http://localhost:7000/api/participants", formData, {
            headers: { "Content-Type": "application/json" }
        });

        alert("Participant registered successfully!");
        setFormData({ name: "", email: "", registerNumber: "", eventName: "", department: "" });
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to register participant.");
    }
};


  const handleCsvUpload = async () => {
    if (!csvFile) {
      alert("Please select a CSV or Excel file first.");
      return;
    }

    const data = new FormData();
    data.append("csvFile", csvFile);

    try {
      await axios.post("http://localhost:7000/api/uploadCSV", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("CSV uploaded successfully!");
      setCsvFile(null);
    } catch (error) {
      console.error("Error uploading CSV:", error);
      alert("Failed to upload CSV.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container">
        <h1 className="title">Event Registration</h1>
        <input className="input" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input className="input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input className="input" type="text" name="registerNumber" value={formData.registerNumber} onChange={handleChange} placeholder="Register Number" required />
        <input className="input" type="text" name="eventName" value={formData.eventName} onChange={handleChange} placeholder="Event Name" required />
        <input className="input" type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" required />
       
        <label className="upload-btn">
          <CloudUploadIcon />
          Upload CSV
          <input type="file" accept=".csv, .xlsx" onChange={handleCsvChange} className="hidden-input" />
        </label>
        <div className="bt">
        <button type="button" className="btn" onClick={handleCsvUpload}>
          Upload CSV
        </button>

        <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
