import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'Name', headerName: ' Name', width: 200 },
  { field: 'Email', headerName: 'Email', width: 250 },
  { field: 'RegisterNo', headerName: 'RegisterNo', width: 250 },
  { field: 'Department', headerName: 'Department', width: 250 },
  {
    field: 'EventName',
    headerName: 'EventName',
    width: 320,
  },
  
];

const rows = [
  { id: 1, Name: 'Ram', Email: 'ram@gmail.com',RegisterNo:'7376242AD144',Department:'AIDS', EventName:'Front Frezky' },
  { id: 2, Name: 'Dev', Email: 'dev@gmail.com',RegisterNo:'7376242EC168',Department:'ECE', EventName:'Front Frezky'  },
  { id: 3, Name: 'Vikram', Email:'v@gmail.com',RegisterNo:'7376242AL218',Department:'AIML', EventName:'Bit Hack' },
  { id: 4, Name: 'Sanjeev', Email: 's@gmail.com',RegisterNo:'7376242CS165',Department:'CSE', EventName:'Bit Hack' },
  { id: 5, Name: 'Mari',  Email: 'muthu@gmail.com',RegisterNo:'7376242CB134',Department:'CSBS', EventName:'Front Frezky' },
  
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 500, width: '100%',marginTop:10 ,display:'flex',flexDirection:'column', columnGap:5 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
