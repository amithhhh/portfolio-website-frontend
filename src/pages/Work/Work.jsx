import React, { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import SkillHead from '../../ExtraComponents/SkillHead/SkillHead'
import { styled } from '@mui/system'
import { projectSet } from '../../Data/Data';
import WorkComponent from '../../ExtraComponents/WorkComponent/WorkComponent';


function Work() {
    const [data, setData] = useState("");
    const [tools, setTools] = useState([]);

    

    useEffect(() => {
      function fetchTools() {
        try {
          if (data === "") {
            setTools(projectSet); // Show all tools when no department is selected
          } else {
            setTools(projectSet.filter((item) => item.department === data));
          }
        } catch (err) {
          console.error("Error fetching tools:", err);
        }
      };
      fetchTools();
    }, [data]);

    const CustomContainer = styled(Container)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "column",
        padding: "2rem",
        gap: "1rem"
      }))
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
      const TitlePage = styled(Typography)(({ theme }) => ({
          fontFamily: "monospace",
          fontSize: "2.5rem",
          color: "#fff",
          
          
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
                <TitlePage><UnderlinedText>WORKS.</UnderlinedText></TitlePage>
            </Box>
            <SkillHead color="#2d2d30" setData={setData} />
            <ComponentContainer>
          {
            tools.map((item, index) => (
              <WorkComponent key={index} name={item.name} image={item.icon} defenition={item.definition} Tools={item.tools} />
            ))
          }
        </ComponentContainer>
        </CustomContainer>
    </Box>
  )
}

export default Work
