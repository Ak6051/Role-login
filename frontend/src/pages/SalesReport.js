// import React, { useState, useEffect } from 'react';
// import { Box, Button, TextField, Typography, Modal } from '@mui/material';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import Navbar from '../components/AdminNavbar';
// import Sidebar from '../components/AdminSidebar';
// import { fetchSales, createSale, deleteSale, updateSale } from '../utils/SaleReportService';
// import * as XLSX from 'xlsx'; // Import xlsx for Excel export

// const SalesReport = () => {
//   const [sales, setSales] = useState([]);
//   const [formData, setFormData] = useState({
//     companyName: '',
//     phoneNumber: '',
//     address: '',
//     websiteUrl: '',
//     emailId: '',
//     callStatus: '',
//     meetingDate: '',
//     meetingTime: '',
//     contactPerson: '',
//     designation: '',
//     description: '',
//   });
//   const [open, setOpen] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [selectedId, setSelectedId] = useState(null);

//   useEffect(() => {
//     getSales();
//   }, []);

//   const getSales = async () => {
//     try {
//       const response = await fetchSales();
//       setSales(response.data);
//     } catch (error) {
//       console.error('Error fetching sales data:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editMode) {
//         await updateSale(selectedId, formData);
//       } else {
//         await createSale(formData);
//       }
//       setFormData({
//         companyName: '',
//         phoneNumber: '',
//         address: '',
//         websiteUrl: '',
//         emailId: '',
//         callStatus: '',
//         meetingDate: '',
//         meetingTime: '',
//         contactPerson: '',
//         designation: '',
//         description: '',
//       });
//       setOpen(false);
//       getSales();
//     } catch (error) {
//       console.error('Error saving sale:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteSale(id);
//       getSales();
//     } catch (error) {
//       console.error('Error deleting sale:', error);
//     }
//   };

//   const handleEdit = (sale) => {
//     setFormData(sale);
//     setSelectedId(sale._id);
//     setEditMode(true);
//     setOpen(true);
//   };

//   const handleOpen = () => {
//     setFormData({
//       companyName: '',
//       phoneNumber: '',
//       address: '',
//       websiteUrl: '',
//       emailId: '',
//       callStatus: '',
//       meetingDate: '',
//       meetingTime: '',
//       contactPerson: '',
//       designation: '',
//       description: '',
//     });
//     setEditMode(false);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setEditMode(false);
//   };

//   const handleExport = () => {
//     const worksheet = XLSX.utils.json_to_sheet(sales);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'SalesData');
//     XLSX.writeFile(workbook, 'SalesData.xlsx');
//   };

//   const columns = [
//     { field: 'companyName', headerName: 'Company Name', width: 150 },
//     { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
//     { field: 'address', headerName: 'Address', width: 150 },
//     { field: 'websiteUrl', headerName: 'Website', width: 150 },
//     { field: 'emailId', headerName: 'Email', width: 150 },
//     { field: 'callStatus', headerName: 'Call Status', width: 120 },
//     { field: 'contactPerson', headerName: 'Contact Person', width: 150 },
//     { field: 'designation', headerName: 'Designation', width: 120 },
//     { field: 'description', headerName: 'Description', width: 170 },
//     {
//       field: 'actions',
//       headerName: 'Actions',
//       width: 180,
//       renderCell: (params) => (
//         <>
//           <Button onClick={() => handleEdit(params.row)} variant="contained" color="primary" size="small">
//             Edit
//           </Button>
//           <Button onClick={() => handleDelete(params.row._id)} variant="contained" color="secondary" size="small" style={{ marginLeft: 8 }}>
//             Delete
//           </Button>
//         </>
//       ),
//     },
//   ];

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar />
//       <Box sx={{ flexGrow: 1 }}>
//         <Navbar />
//         <Box sx={{ p: 3 }}>
//           <Typography variant="h4" gutterBottom>
//             Sales Report
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
//             <Button variant="contained" color="primary" onClick={handleOpen}>
//               Add New Sale
//             </Button>
//             <Button variant="contained" color="secondary" onClick={handleExport}>
//               Export to Excel
//             </Button>
//           </Box>
//           <Box sx={{ height: 500, width: '100%' }}>
//             <DataGrid
//               rows={sales}
//               columns={columns}
//               getRowId={(row) => row._id}
//               pageSize={5}
//               components={{
//                 Toolbar: GridToolbar,
//               }}
//             />
//           </Box>

//           <Modal open={open} onClose={handleClose}>
//             <Box
//               component="form"
//               onSubmit={handleSubmit}
//               sx={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 width: 400,
//                 bgcolor: 'background.paper',
//                 boxShadow: 24,
//                 p: 4,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: 2,
//               }}
//             >
//               <Typography variant="h6">{editMode ? 'Edit Sale' : 'Add New Sale'}</Typography>
//               <TextField name="companyName" label="Company Name" value={formData.companyName} onChange={handleChange} required />
//               <TextField name="phoneNumber" label="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
//               <TextField name="address" label="Address" value={formData.address} onChange={handleChange} required />
//               <TextField name="websiteUrl" label="Website" value={formData.websiteUrl} onChange={handleChange} required />
//               <TextField name="emailId" label="Email" value={formData.emailId} onChange={handleChange} required />
//               <TextField name="callStatus" label="Call Status" value={formData.callStatus} onChange={handleChange} required />
//               <TextField name="contactPerson" label="Contact Person" value={formData.contactPerson} onChange={handleChange} required />
//               <TextField name="designation" label="Designation" value={formData.designation} onChange={handleChange} required />
//               <TextField name="description" label="Description" value={formData.description} onChange={handleChange} required multiline />
//               <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
//                 <Button type="submit" variant="contained" color="primary">
//                   {editMode ? 'Update' : 'Add'}
//                 </Button>
//               </Box>
//             </Box>
//           </Modal>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default SalesReport;
import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Modal } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Navbar from '../components/AdminNavbar';
import Sidebar from '../components/AdminSidebar';
import { fetchSales, createSale, deleteSale, updateSale } from '../utils/SaleReportService';
import * as XLSX from 'xlsx'; // Import xlsx for Excel export

const SalesReport = () => {
  const [sales, setSales] = useState([]);
  const [formData, setFormData] = useState({
    companyName: '',
    phoneNumber: '',
    address: '',
    websiteUrl: '',
    emailId: '',
    callStatus: '',
    meetingDate: '',
    meetingTime: '',
    contactPerson: '',
    designation: '',
    description: '',
  });
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    getSales();
  }, []);

  const getSales = async () => {
    try {
      const response = await fetchSales();
      setSales(response.data);
    } catch (error) {
      console.error('Error fetching sales data:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await updateSale(selectedId, formData);
      } else {
        await createSale(formData);
      }
      setFormData({
        companyName: '',
        phoneNumber: '',
        address: '',
        websiteUrl: '',
        emailId: '',
        callStatus: '',
        meetingDate: '',
        meetingTime: '',
        contactPerson: '',
        designation: '',
        description: '',
      });
      setOpen(false);
      getSales();
    } catch (error) {
      console.error('Error saving sale:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSale(id);
      getSales();
    } catch (error) {
      console.error('Error deleting sale:', error);
    }
  };

  const handleEdit = (sale) => {
    setFormData(sale);
    setSelectedId(sale._id);
    setEditMode(true);
    setOpen(true);
  };

  const handleOpen = () => {
    setFormData({
      companyName: '',
      phoneNumber: '',
      address: '',
      websiteUrl: '',
      emailId: '',
      callStatus: '',
      meetingDate: '',
      meetingTime: '',
      contactPerson: '',
      designation: '',
      description: '',
    });
    setEditMode(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditMode(false);
  };

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(sales);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'SalesData');
    XLSX.writeFile(workbook, 'SalesData.xlsx');
  };

  const columns = [
    { field: 'companyName', headerName: 'Company Name', width: 150 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
    { field: 'address', headerName: 'Address', width: 150 },
    { field: 'websiteUrl', headerName: 'Website', width: 150 },
    { field: 'emailId', headerName: 'Email', width: 150 },
    { field: 'callStatus', headerName: 'Call Status', width: 120 },
    { field: 'contactPerson', headerName: 'Contact Person', width: 150 },
    { field: 'designation', headerName: 'Designation', width: 120 },
    { field: 'description', headerName: 'Description', width: 170 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 180,
      renderCell: (params) => (
        <>
          <Button onClick={() => handleEdit(params.row)} variant="contained" color="primary" size="small">
            Edit
          </Button>
          <Button onClick={() => handleDelete(params.row._id)} variant="contained" color="secondary" size="small" style={{ marginLeft: 8 }}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Sales Report
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Add New Sale
            </Button>
            <Button variant="contained" color="secondary" onClick={handleExport}>
              Export to Excel
            </Button>
          </Box>
          <Box sx={{ height: 500, width: '100%' }}>
            <DataGrid
              rows={sales}
              columns={columns}
              getRowId={(row) => row._id}
              pageSize={5}
              components={{
                Toolbar: GridToolbar,
              }}
            />
          </Box>

          <Modal open={open} onClose={handleClose}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                overflowY: 'auto', // Enable vertical scrolling
                maxHeight: '80vh', // Limit modal height
              }}
            >
              <Typography variant="h6">{editMode ? 'Edit Sale' : 'Add New Sale'}</Typography>
              <TextField name="companyName" label="Company Name" value={formData.companyName} onChange={handleChange} required />
              <TextField name="phoneNumber" label="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
              <TextField name="address" label="Address" value={formData.address} onChange={handleChange} required />
              <TextField name="websiteUrl" label="Website" value={formData.websiteUrl} onChange={handleChange} required />
              <TextField name="emailId" label="Email" value={formData.emailId} onChange={handleChange} required />
              <TextField name="callStatus" label="Call Status" value={formData.callStatus} onChange={handleChange} required />
              <TextField name="contactPerson" label="Contact Person" value={formData.contactPerson} onChange={handleChange} required />
              <TextField name="designation" label="Designation" value={formData.designation} onChange={handleChange} required />
              <TextField name="description" label="Description" value={formData.description} onChange={handleChange} required multiline />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button type="submit" variant="contained" color="primary">
                  {editMode ? 'Update' : 'Add'}
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </div>
  );
};

export default SalesReport;