import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "registerNumber", headerName: "Register Number", width: 200 },
  { field: "department", headerName: "Department", width: 200 },
  { field: "eventName", headerName: "Event Name", width: 250 },
];

const DataTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/api/participants")
      .then((response) => setRows(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <DataGrid rows={rows} columns={columns} pageSize={5} />;
};

export default DataTable;
