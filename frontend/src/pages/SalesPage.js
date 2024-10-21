
// import React, { useState } from 'react';
// import {
//   Typography,
//   Container,
//   Box,
//   TextField,
//   Button,
//   MenuItem,
//   Grid,
//   Paper,
// } from '@mui/material';
// import Navbar from '../components/UserNavbar';
// import Sidebar from '../components/Sidebar';

// const SalesPage = () => {
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
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // Process form data here
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       <Sidebar />
//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
//         <Navbar />

//         {/* Scrollable Content Area */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             overflowY: 'auto',
//             mt: 8, // Add margin top to avoid overlap with the fixed Navbar
//           }}
//         >
//           <Container maxWidth="sm" sx={{ mt: 4 }}>
//             <Typography variant="h4" sx={{ mb: 2 }}>
//               Sales
//             </Typography>
//             <Typography variant="body1" sx={{ mb: 3 }}>
//               This is the Sales page. Please fill out the form below.
//             </Typography>

//             {/* Sales Form */}
//             <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
//               <form onSubmit={handleSubmit}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Company Name"
//                       name="companyName"
//                       value={formData.companyName}
//                       onChange={handleChange}
//                       required
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Phone Number"
//                       name="phoneNumber"
//                       value={formData.phoneNumber}
//                       onChange={handleChange}
//                       required
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Address"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleChange}
//                       required
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Website URL"
//                       name="websiteUrl"
//                       value={formData.websiteUrl}
//                       onChange={handleChange}
//                       required
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Email ID"
//                       name="emailId"
//                       value={formData.emailId}
//                       onChange={handleChange}
//                       required
//                       type="email"
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Call Status"
//                       name="callStatus"
//                       select
//                       value={formData.callStatus}
//                       onChange={handleChange}
//                       required
//                       variant="outlined"
//                     >
//                       <MenuItem value="ringing">Ringing</MenuItem>
//                       <MenuItem value="not reachable">Not Reachable</MenuItem>
//                       <MenuItem value="interested">Interested</MenuItem>
//                       <MenuItem value="not interested">Not Interested</MenuItem>
//                       <MenuItem value="meeting fixed">Meeting Fixed</MenuItem>
//                     </TextField>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Meeting Date"
//                       name="meetingDate"
//                       type="date"
//                       value={formData.meetingDate}
//                       onChange={handleChange}
//                       InputLabelProps={{ shrink: true }}
//                       required
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Meeting Time"
//                       name="meetingTime"
//                       type="time"
//                       value={formData.meetingTime}
//                       onChange={handleChange}
//                       InputLabelProps={{ shrink: true }}
//                       required
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Contact Person"
//                       name="contactPerson"
//                       value={formData.contactPerson}
//                       onChange={handleChange}
//                       required
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Designation"
//                       name="designation"
//                       value={formData.designation}
//                       onChange={handleChange}
//                       required
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
//                       Submit
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </form>
//             </Paper>
//           </Container>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default SalesPage;

import React, { useState } from 'react';
import {
  Typography,
  Container,
  Box,
  TextField,
  Button,
  MenuItem,
  Grid,
  Paper,
  Snackbar,
} from '@mui/material';
import Navbar from '../components/UserNavbar';
import Sidebar from '../components/Sidebar';

const callStatuses = [
  'Ringing',
  'Not Reachable',
  'Interested',
  'Not Interested',
  'Meeting Fixed',
];

const SalesPage = () => {
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

  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setAlertMessage('Data submitted successfully!');
        setOpenAlert(true);
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
      } else {
        setAlertMessage('Error submitting data. Please try again.');
        setOpenAlert(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setAlertMessage('An error occurred. Please try again later.');
      setOpenAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
       <Sidebar />
       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
         <Navbar />

        {/* Scrollable Content Area */}
         <Box
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            mt: 8, // Add margin top to avoid overlap with the fixed Navbar
          }}
        >
        <Container maxWidth="md" sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h4" align="center">Sales</Typography>
            <Typography variant="body1" sx={{ mt: 2 }} align="center">
              Please fill in the details below.
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {/* Form fields */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Website URL"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email ID"
                    name="emailId"
                    value={formData.emailId}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    select
                    label="Call Status"
                    name="callStatus"
                    value={formData.callStatus}
                    onChange={handleChange}
                    required
                  >
                    {callStatuses.map((status) => (
                      <MenuItem key={status} value={status}>
                        {status}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Meeting Date"
                    type="date"
                    name="meetingDate"
                    value={formData.meetingDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Meeting Time"
                    type="time"
                    name="meetingTime"
                    value={formData.meetingTime}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Contact Person"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
            <Snackbar
              open={openAlert}
              onClose={handleCloseAlert}
              message={alertMessage}
              autoHideDuration={6000}
            />
          </Paper>
        </Container>
        </Box>
      </Box>
    </div>
  );
};

export default SalesPage;
