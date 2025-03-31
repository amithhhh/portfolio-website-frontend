import { Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import profileImg from '../../assets/Into-Img.png'

function About() {

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
      textAlign: "center"
    }
  }))

  const ParentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse"
    }
  }))
  const ChildBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
          <TitlePage><UnderlinedText>ABOUT ME.</UnderlinedText></TitlePage>
        </Box>
        <ParentBox data-aos="fade-left">
          <ChildBox data-aos="fade-left">
            <Typography
              component="pre"
              sx={{
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                overflowX: "auto",
                fontSize: "1rem",
                color: "#fff",
               
              }}
            >

              Hey there! I'm Amith E.K., a cybersecurity professional, web developer, and
              data science enthusiast who loves everything about tech, security, and
              building awesome projects. I have a strong background in security monitoring,
              incident response, and full-stack development. Whether it's analyzing
              security threats, coding a new project, or diving deep into data science,
              I love solving problems and making things work smarter and safer.

              My cybersecurity journey has taken me through SOC operations, threat
              intelligence, and ethical hacking. I work with tools like Splunk, Wazuh,
              Suricata, Wireshark, and Nessus to keep systems secure. But that’s not all—
              I’m also into web development, building applications using Django, React,
              and Express.js. Lately, I’ve been exploring data science, using Python,
              Pandas, NumPy, and Scikit-Learn to analyze data and bring insights to life.

              Now, let's talk about passions beyond tech—because life is more than just code!
              <Box component="span" sx={{ fontWeight: "bold" }}>Hala Madrid!</Box> I'm a die-hard
              <Box component="span" sx={{ fontWeight: "bold" }}>Real Madrid</Box> fan.
              Watching them play, especially in the Champions League, gives me goosebumps
              every single time.

              I also have a deep love for <Box component="span" sx={{ fontWeight: "bold" }}>combat sports</Box>.
              Boxing and martial arts have always inspired me, and I look up to legends like
              <Box component="span" sx={{ fontWeight: "bold" }}>Mike Tyson, GSP, Tony Ferguson,
                Charles "Do Bronx" Oliveira, and Islam Makhachev</Box>. Their discipline,
              resilience, and never-give-up attitude resonate with me. There’s something
              about the fight game that teaches you not just about sports but about life
              itself—how to take hits and keep going.

              When I’m not working on tech or watching fights, I’m probably geeking out
              over cybersecurity challenges on <Box component="span" sx={{ fontWeight: "bold" }}>
                TryHackMe, HackTheBox, and BlueTeamOnline</Box>, or just enjoying a great
              football match.
            </Typography>



          </ChildBox>
          <ChildBox>
            <img src={profileImg} alt="" style={{ maxWidth: "70%" }} />
          </ChildBox>
        </ParentBox>
      </CustomContainer>
    </Box>
  )
}

export default About
