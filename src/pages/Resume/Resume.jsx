import { Box, Container, Typography } from '@mui/material'
import { styled, useMediaQuery, useTheme } from '@mui/system'
import React, { useMemo } from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { resumeData } from '../../Data/Data';

function Resume() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
  const TitlePage = styled(Typography)(({ theme }) => ({
    fontFamily: "monospace",
    fontSize: "2.5rem",
    color: "#fff",

  }))
  return (
    <Box sx={{ backgroundColor: "#34363a", mb: 0 }}>
      <CustomContainer>
        <Box>
          <TitlePage><UnderlinedText>RESUME.</UnderlinedText></TitlePage>
        </Box>
        <Box sx={{ maxWidth: { lg: 800, sm: "auto" }, margin: "auto", padding: 2 }}>
          <Typography variant="h4" gutterBottom align="center" color='#fff' fontFamily='monospace'>Work Experience.</Typography>
          <Timeline position="alternate">
            {resumeData.workExperience.map((job, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" } }}>
                  <TimelineDot color="primary" sx={{ backgroundColor: "rgba(240, 165, 0, 0.8)", display: { lg: "flex", md: "flex", sm: "none", xs: "none" } }} />
                  {index !== resumeData.workExperience.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent data-aos={index % 2 == 0 ? "fade-left" : "fade-right"} sx={{
                  width: "100%",
                  textAlign: isSmallScreen ? "center" : "left",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isSmallScreen ? "center" : "flex-start"
                }}>
                  <Typography variant="h6" sx={{ color: "#fff", fontFamily: "monospace" }}>{job.title} - {job.company}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ color: "rgba(240, 165, 0, 0.8)" }}>{job.duration}</Typography>
                  <Typography variant="body1" sx={{ color: "#fff" }}>{job.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
          <Typography variant="h4" gutterBottom align="center" color='#fff' fontFamily='monospace' sx={{ marginTop: 4 }}>Education.</Typography>
          <Timeline position="alternate">
            {resumeData.education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" } }}>
                  <TimelineDot color="secondary" sx={{ backgroundColor: "rgba(240, 165, 0, 0.8)", display: { lg: "flex", md: "flex", sm: "none", xs: "none" } }} />
                  {index !== resumeData.education.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent data-aos={index % 2 == 0 ? "fade-left" : "fade-right"} sx={{
                  width: "100%",
                  textAlign: isSmallScreen ? "center" : "left",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isSmallScreen ? "center" : "flex-start"
                }}>
                  <Typography variant="h6" sx={{ color: "#fff", fontFamily: "monospace" }}>{edu.title} - {edu.institution}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ color: "rgba(240, 165, 0, 0.8)" }}>{edu.duration}</Typography>
                  <Typography variant="body1" color='#fff'>{edu.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </CustomContainer>

    </Box>
  )
}

export default Resume
