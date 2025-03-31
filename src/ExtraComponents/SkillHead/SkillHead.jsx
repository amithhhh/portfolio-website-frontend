import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { skillSet } from '../../Data/Data'


const SkillHead = ( { color, setData } ) => {
    const HeadBox = styled(Box)(({ theme }) => ({
        display: "flex",
        backgroundColor: color,
        color: "#fff",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '15rem',
        paddingRight: '15rem',
        [theme.breakpoints.down("md")]: {
            paddingLeft: '2rem',
            paddingRight: '2rem',
        }
    }))
    const Text = styled(Typography)(( {theme} ) => ({
        fontSize: "1rem",
        fontFamily:'monospace',
        transition: 'color 0.5s ease',
        "&:hover": {
            color: "rgba(240, 165, 0, 0.8)"
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "0.7rem"
        },
        "&:active": {
            color: "rgba(240, 165, 0, 0.8)"
        }

        
        
    }))
  return (
        <HeadBox data-aos="fade-left">
            {
                skillSet.map((item, index) => (
                    <Box key={index} onClick={() => setData(item)} sx={{cursor: 'pointer', border: '1px solid transparent',
                        borderImage: "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.5));",
                        borderImageSlice: 2, padding: "0.5rem",
                    width: 'auto'}}><Text>{item}</Text></Box>
                    
                ))
            }
        </HeadBox>
  )
}

export default SkillHead
