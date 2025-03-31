import React, { useRef } from "react";
import { Box, TextField, Button } from "@mui/material";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Admin() {

  const navigate = useNavigate();

    const nameRef = useRef();
    const passwordRef = useRef();
    const commonStyles = {
        backgroundColor: "#fff",
        borderRadius: "5px",
        "& .MuiInputLabel-root": { color: "rgba(240, 165, 0, 0.8)" }, // Label color
        "& .MuiInputLabel-root.Mui-focused": { color: "rgba(240, 165, 0, 0.8)" }, // Label color when focused
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "rgba(240, 165, 0, 0.8)" }, // Default border color
          "&:hover fieldset": { borderColor: "rgba(240, 165, 0, 0.8)" }, // Border on hover
          "&.Mui-focused fieldset": { borderColor: "rgba(240, 165, 0, 0.8)" } // Border when focused
        }
      };
      const handleSubmit = async (e) => {
          e.preventDefault();
          const formValues = {
            username: nameRef.current.value,
            password: passwordRef.current.value
          };
      
          try {
            const response = await axios.post("https://amithekapi.onrender.com/api/auth/login", formValues, {withCredentials: true});
            // console.log("Login Successful:", response.data);
            // alert("Validated Successfully");
              navigate('/dashboard')    
        } catch (err) {
            console.error("Login Failed:", err.response?.data || err.message);
        }
        
          
        };
  return (
    <Box sx={{ backgroundColor: '#34363a', padding: "2rem" }}>

        <form action="" method="post" style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", gap: "1rem", width: "100%", flexWrap: "wrap" }}>
                    <TextField label="Name" name="name" inputRef={nameRef} required fullWidth sx={{ flex: 1, backgroundColor: "#fff", ...commonStyles }}  />
                    <TextField label="Password" name="password" type="password" inputRef={passwordRef} required fullWidth sx={{ flex: 1, backgroundColor: "#fff", ...commonStyles }} />
                  </Box>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    fullWidth 
                    sx={{ 
                      marginTop: "1rem", 
                      backgroundColor: "rgba(240, 165, 0, 0.8)",
                      "&:hover": { backgroundColor: "rgba(200, 140, 0, 1)" } // Darker shade on hover
                    }}
                  >
                    Log In
                  </Button>
        </form>

    </Box>
  )
}

export default Admin
