import { Box, Container, Typography, TextField, Button } from '@mui/material'
import { styled } from '@mui/system'
import React, { useState } from 'react'
import FormComponent from '../../ExtraComponents/FormComponent/FormComponent';

function Contacts() {

  const UnderlinedText = styled("span")({
    position: "relative",
    display: "inline-block",
    color: "#fff",
    "&::after": {
      content: '""',
      display: "block",
      width: "50%",
      height: "2px",
      backgroundColor: "#fff",
      position: "absolute",
      bottom: "-5px",
      left: "20%"
    }
  });

  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: '2rem',
    gap: "2rem",
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    }
  }));

  const ParentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse"
    }
  }));

  const ChildBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: "40rem",
    gap: "1rem",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      width: "auto"
    }
  }));

  const TitlePage = styled(Typography)(({ theme }) => ({
    fontFamily: "monospace",
    fontSize: "2.5rem",
    color: "#fff",
    textAlign: "center"
  }));
  return (
    <Box sx={{ backgroundColor: "#2d2d30", padding: "2rem 0" }}>
      <CustomContainer>
        <Box>
          <TitlePage>
            <UnderlinedText>GET IN TOUCH.</UnderlinedText>
          </TitlePage>
        </Box>
        <ParentBox>
          <ChildBox data-aos="fade-left" sx={{ backgroundColor: "#34363a", padding: "2rem", borderRadius: "10px" }}>
                  <FormComponent />
          </ChildBox>
        </ParentBox>
      </CustomContainer>
    </Box>
  );
}

export default React.memo(Contacts);
