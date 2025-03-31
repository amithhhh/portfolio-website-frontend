import React, { useRef } from "react";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";

function FormComponent() {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

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
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    try {
        const response = await axios.post("http://localhost:5000/api/message/save-message", formValues)
        console.log(response.data)
        alert("Enquiry Submitted Successfully!")
    }catch (err) {
      console.log(err)
        alert("Server busy! Try again later.")
    }
    
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      {/* Name and Email in one row */}
      <Box sx={{ display: "flex", gap: "1rem", width: "100%", flexWrap: "wrap"}}>
        <TextField label="Name" name="name" inputRef={nameRef} required fullWidth sx={{ flex: 1, backgroundColor: "#fff", ...commonStyles }}  />
        <TextField label="Email" name="email" type="email" inputRef={emailRef} required fullWidth sx={{ flex: 1, backgroundColor: "#fff", ...commonStyles }} />
      </Box>

      <TextField label="Subject" name="subject" inputRef={subjectRef} required fullWidth sx={{ marginTop: "1rem", backgroundColor: "#fff", ...commonStyles }} />

      <TextField label="Message" name="message" inputRef={messageRef} required multiline rows={4} fullWidth sx={{ marginTop: "1rem", backgroundColor: "#fff", ...commonStyles  }} />

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
  Send Message
</Button>

    </form>
  );
}

export default FormComponent;
