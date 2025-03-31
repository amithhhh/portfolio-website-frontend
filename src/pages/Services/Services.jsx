import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system'
import { serviceData } from '../../Data/Data'
import CardComponent from '../../ExtraComponents/CardComponent/CardComponent'


function Services() {

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

  })

  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem",
  }))
  const TitlePage = styled(Typography)(({ theme }) => ({
    fontFamily: "monospace",
    fontSize: "2.5rem",
    color: "#fff",
    textAlign: "center"
    
  }))

  const ComponentContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "1rem",
    flexWrap: 'wrap',
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "2rem"
    }
  }))

  return (
    <Box sx={{backgroundColor: "#2d2d30"}}>
      <CustomContainer>
        <Box sx={{paddingBottom: "2rem"}}>
            <TitlePage><UnderlinedText>SERVICES.</UnderlinedText></TitlePage>
        </Box>
        <ComponentContainer>
          {
            serviceData.map((item) => (
              <CardComponent key={item.id} name={item.name} image={item.image} defenition={item.defenition} />
            ))
          }
        </ComponentContainer>
      </CustomContainer>
      
    </Box>
  )
}

export default Services
