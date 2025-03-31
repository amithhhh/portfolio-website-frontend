import { Box, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system'

function WorkComponent({ name, image, defenition, Tools }) {

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
            left: "25%"
        }
    });

    const CustomContainer = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "25rem",
        maxWidth: "25rem",
        height: "20rem",
        padding: "1rem",
        wordWrap: 'break-word',
        whiteSpace: "normal",
        border: '1px solid transparent',
        borderImage: "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.5))",
        borderImageSlice: 2,
        gap: "0.5rem",
        "&:hover": {
            boxShadow: "0px 0px 15px rgba(240, 165, 0, 0.3)"
        },
        [theme.breakpoints.down("md")]: {
            width: "24rem",
            height: "auto",
            flex: "1 1 calc(90% - 20px)",
            maxWidth: "calc(90% - 20px)",
        }
    }));

    const Title = styled(Typography)({
        color: "#fff",
        fontSize: "1.8rem",
        fontFamily: "monospace"
    });

    return (
        <CustomContainer data-aos="fade-left">
            {/* Fixed-size rectangular image container */}
            <Box sx={{
                width: {lg: "25rem", sm: "25rem"},  // Width of the rectangle
                height: {lg: "13rem", sm: "9rem"}, // Height of the rectangle
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                borderRadius: "8px", // Optional rounded corners
            }}>
                <img src={image} alt={name} style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover" // Ensures the image maintains its aspect ratio
                }} />
            </Box>
            <Title variant='h6'><UnderlinedText>{name}</UnderlinedText></Title>
            <Typography variant='body2' sx={{ color: "#fff" }}>{defenition}</Typography>
            <Box sx={{backgroundColor: "#34363a", color: "#fff", padding: "1rem", borderRadius: "8px"}}>
            <Typography variant='body2' sx={{ color: "#fff" }}>Tools used: {
                    Tools.map((item) => (
                        item + ", "
                    ))
                }</Typography>
            </Box>
        </CustomContainer>
    );
}

export default WorkComponent;
