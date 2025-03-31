import { Box, Typography } from '@mui/material'
import React from 'react'
import { maxWidth, padding, styled, width } from '@mui/system'

function CardComponent({ name, image, defenition, Tools }) {


    const UnderlinedText = styled("span")({
        position: "relative",
        display: "inline-block",
        color: "rgba(240, 165, 0, 0.8)",
        "&::after": {
          content: '""',
          display: "block",
          width: "50%",
          height: "2px",
          backgroundColor: "rgba(240, 165, 0, 0.8)",
          position: "absolute",
          bottom: "0px",
          left: "20%"
        }
    
      })

    const CustomContainer = styled(Box)(({ theme }) => ({
        display: "flex",
        // flex: "1 1 calc(31% - 20px)",
        // maxWidth: "calc(31% - 20px)",
        flex: "1 1 330px",  // Fixed size of 300px
        maxWidth: "330px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "28rem",
        textAlign: "center",
        padding: "1rem",
        height: "13rem",
        objectFit: "auto",
        wordWrap: 'break-word',
        whiteSpace: "normal",
        border: '1px solid transparent',
        borderImage: "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.5));",
        borderImageSlice: 2,
        //outline: "1px solid rgba(255, 255, 255, 0.3)",
        //outlineOffset: "-2px",
        gap: "0.5rem",
        "&:hover": {
            boxShadow: "0px 0px 15px rgba(240, 165, 0, 0.3)"
        },
        [theme.breakpoints.down("md")]:{
            width: "22rem",
            flex: " 1 1 calc(99% - 20px)",
            maxWidth: "calc(99% - 20px)",

        }
    }))
    const Title = styled(Typography)(({ theme }) => ({
        color: "#fff",
        fontSize: "1.8rem",
        fontFamily: "monospace"
    }))

  return (
    <CustomContainer data-aos="fade-left">
        <Box>{image}</Box>
        <Title variant='h6'><UnderlinedText>{name}</UnderlinedText></Title>
        <Typography variant='body2' sx={{color: "#fff"}}>{defenition}</Typography>
    </CustomContainer>
    
  )
}

export default CardComponent
