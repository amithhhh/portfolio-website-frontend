import { Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import profileImg from '../../assets/skillImg.jpeg'
import { LinearProgress } from '@mui/material'
import { skillAssess } from '../../Data/Data'

function Skills() {

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
    flexDirection: 'column',
    justifyContent: 'space-between',

    paddingBottom: '2rem',
    gap: "2rem",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    }
  }))

  const ParentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "1rem"
    }
  }))
  const ChildBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: "40rem",
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      width: "25rem"
    }

  }))

  const TitlePage = styled(Typography)(({ theme }) => ({
    fontFamily: "monospace",
    fontSize: "2.5rem",
    color: "#fff",

  }))
  return (
    <Box sx={{ backgroundColor: "#34363a" }}>
      <CustomContainer>
        <Box>
          <TitlePage><UnderlinedText>SKILLS.</UnderlinedText></TitlePage>
        </Box>
        <ParentBox data-aos="fade-left">
          <ChildBox data-aos="fade-left">
            <img src={profileImg} alt="" style={{ maxWidth: "80%" }} />
          </ChildBox>
          <ChildBox>
            {
              skillAssess.map((item) => (
                <Box key={item.id} sx={{ width: "100%", mb: 2 }} data-aos="fade-left" > {/* Wrap each bar */}
                  <Typography sx={{ color: "#fff", mb: 1, fontFamily: 'monospace', fontSize: {lg: "1rem", sm: "0.5rem"} }}>{item.name}</Typography>
                  <LinearProgress variant="determinate" value={item.percentage} sx={{ 
                    height: 8,
                     borderRadius: 5,
                     backgroundColor: "rgba(240, 165, 0, 0.2)",
                     "& .MuiLinearProgress-bar": {
                      backgroundColor: "rgba(240, 165, 0, 0.8)"
                     }
                  }} />
                </Box>
              ))
            }
          </ChildBox>
        </ParentBox>
      </CustomContainer>
    </Box>
  )
}

export default Skills
