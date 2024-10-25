
// import React, { useState } from "react";
// import { TextField, Button, Typography, Box, Grid, InputAdornment } from "@mui/material";
// import { Search, CloudUpload, Language } from "@mui/icons-material"; // Import icons
// import Navbar from '../components/UserNavbar';
// import Sidebar from '../components/Sidebar';

// const HRForm = () => {
//   const [employeeCount, setEmployeeCount] = useState(0);
//   const [cvFiles, setCvFiles] = useState([]);

//   const handleEmployeeCountChange = (event) => {
//     const count = parseInt(event.target.value, 10);
//     if (count >= 0 && !isNaN(count)) {
//       setEmployeeCount(count);
//       setCvFiles(Array(count).fill(null));
//     } else {
//       setEmployeeCount(0);
//       setCvFiles([]);
//     }
//   };

//   const handleCvChange = (index, event) => {
//     const files = [...cvFiles];
//     files[index] = event.target.files[0];
//     setCvFiles(files);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Website URL:", event.target.websiteUrl.value);
//     console.log("Employee Count:", employeeCount);
//     console.log("CV Files:", cvFiles);
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
//       <Sidebar />
//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
//         <Navbar />

//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{
//             p: 3,
//             maxWidth: 600,
//             mx: "auto",
//             height: "calc(100vh - 64px)", // Adjust height based on Navbar
//             display: 'flex',
//             flexDirection: 'column',
//           }}
//         >
//           <Typography variant="h4" align="center" gutterBottom>
//             HR Form
//           </Typography>

//           {/* Website URL Field with Icon */}
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Website URL"
//             name="websiteUrl"
//             variant="outlined"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Language />
//                 </InputAdornment>
//               ),
//             }}
//           />

//           {/* Search Employee Field with Icon */}
//           <TextField
//             fullWidth
//             margin="normal"
//             type="number"
//             label="Search Employee"
//             value={employeeCount}
//             onChange={handleEmployeeCountChange}
//             variant="outlined"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Search />
//                 </InputAdornment>
//               ),
//             }}
//           />

//           <Box mt={2} sx={{ flexGrow: 1, overflowY: 'auto', maxHeight: '300px' }}> {/* Set a fixed height and scroll */}
//             <Typography variant="subtitle1">Upload CVs</Typography>
//             <Grid container spacing={2}>
//               {cvFiles.map((_, index) => (
//                 <Grid item xs={12} key={index}>
//                   <TextField
//                     fullWidth
//                     type="file"
//                     inputProps={{ accept: ".pdf,.doc,.docx" }}
//                     onChange={(e) => handleCvChange(index, e)}
//                     variant="outlined"
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <CloudUpload />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>

//           {/* Submit Button with Icon */}
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             startIcon={<CloudUpload />} // Button icon
//             sx={{ mt: 3 }}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default HRForm;
import React, { useState } from "react";
import { TextField, Button, Typography, Box, Grid, InputAdornment, Container } from "@mui/material";
import { Search, CloudUpload, Language } from "@mui/icons-material"; // Import icons
import Navbar from '../components/UserNavbar';
import Sidebar from '../components/Sidebar';

const HRForm = () => {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [cvFiles, setCvFiles] = useState([]);

  const handleEmployeeCountChange = (event) => {
    const count = parseInt(event.target.value, 10);
    if (count >= 0 && !isNaN(count)) {
      setEmployeeCount(count);
      setCvFiles(Array(count).fill(null));
    } else {
      setEmployeeCount(0);
      setCvFiles([]);
    }
  };

  const handleCvChange = (index, event) => {
    const files = [...cvFiles];
    files[index] = event.target.files[0];
    setCvFiles(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Website URL:", event.target.websiteUrl.value);
    console.log("Employee Count:", employeeCount);
    console.log("CV Files:", cvFiles);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar />

        <Container 
        sx={{ 
            p: 3, 
            maxWidth: 400,  // Reduced width
            mx: "auto", 
            mt:"25px",
            height: "calc(100vh - 64px)", 
            display: 'flex', 
            flexDirection: 'column', 
            boxShadow: 3, 
            borderRadius: 2, 
            backgroundColor: 'white', 
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            HR Form
          </Typography>

          {/* Website URL Field with Icon */}
          <TextField
            fullWidth
            margin="normal"
            label="Website URL"
            name="websiteUrl"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Language />
                </InputAdornment>
              ),
            }}
          />

          {/* Search Employee Field with Icon */}
          <TextField
            fullWidth
            margin="normal"
            type="number"
            label="Search Employee"
            value={employeeCount}
            onChange={handleEmployeeCountChange}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />

          <Box mt={2} sx={{ flexGrow: 1, overflowY: 'auto', maxHeight: '300px' }}> {/* Set a fixed height and scroll */}
            <Typography variant="subtitle1">Upload CVs</Typography>
            <Grid container spacing={2}>
              {cvFiles.map((_, index) => (
                <Grid item xs={12} key={index}>
                  <TextField
                    fullWidth
                    type="file"
                    inputProps={{ accept: ".pdf,.doc,.docx" }}
                    onChange={(e) => handleCvChange(index, e)}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <CloudUpload />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Submit Button with Icon */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<CloudUpload />} // Button icon
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </Container>
      </Box>
    </div>
  );
};

export default HRForm;
