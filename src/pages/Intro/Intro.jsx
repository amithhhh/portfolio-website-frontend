import { Box, Container, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import React from 'react';
import introImg from '../../assets/Into-Img.png';
import { Typewriter } from 'react-simple-typewriter'
import IconBox from '../../ExtraComponents/IconBox/IconBox';

function Intro() {
    // Updated animation with golden glow (#f0a500)
    const fadeInBorder = keyframes`
        0% {
            box-shadow: 0 0 5px rgba(240, 165, 0, 0.8);
        }
        50% {
            box-shadow: 0 0 15px rgba(240, 165, 0, 0.6);
        }
        100% {
            box-shadow: 0 0 10px rgba(240, 165, 0, 0.8);
        }
    `;

    const CustomContainer = styled(Container)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(6),
        textAlign: 'center',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            position: 'static'
        }
    }));

    const IntoImg = styled('img')(({ theme }) => ({
        width: '28rem',
        height: '28rem',
        maxWidth: '100%',
        borderRadius: '50%',
        animation: `${fadeInBorder} 2.5s ease-in-out infinite alternate`,
        [theme.breakpoints.down('md')]: {
            width: '26rem',
            height: '16rem',
            padding: 0,
            border: 'none'
        }
    }));

    const NameBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        
        justifyContent: 'space-between',
        padding: '',
        width: '82rem',
        height: '15rem',
        backgroundColor: "#2d2d30",
        position: 'absolute',
        right: "3.3rem",
        top: '10rem',
        borderTopRightRadius: theme.spacing(20),
        borderBottomRightRadius: theme.spacing(20),
        borderTopLeftRadius: theme.spacing(20),
        borderBottomLeftRadius: theme.spacing(20),
        animation: `${fadeInBorder} 2.5s ease-in-out infinite alternate`,
        [theme.breakpoints.down("md")]: {
            position: 'static',
            backgroundColor: "#34363a",
            width: 'auto',
            height: 'auto',
            animation: 'none',
            flexDirection: 'column'
        }
    }))
    const Description = styled(Typography)(({ theme }) => ({
        fontFamily: 'monospace',
        fontSize: "2rem",
        fontWeight: 'bolder',
        color: "#fff",
        [theme.breakpoints.down("md")]: {
            fontSize: '2rem'
        }
        
    }))
    const TextBox = styled(Box)(({ theme }) => ({
         width: '30rem', 
         display: 'flex', 
         flexDirection: 'column', 
         justifyContent: 'center',
         [theme.breakpoints.down("md")]: {
            width: 'auto'
         }
    }))

    return (
        <Box sx={{ backgroundColor: '#34363a', padding: "2rem" }}>
            <CustomContainer data-aos="fade-left">
                <Box sx={{ zIndex: 10 }}>
                    <IntoImg src={introImg} />
                </Box>
                <NameBox>
                    <TextBox>
                        <Typography variant='h6' sx={{
                            color: "#fff",
                            fontFamily: 'italics'
                        }}>"Secure, Build, Innovate"</Typography>
                    </TextBox>
                    <TextBox>
                    <Description>Hello,</Description>
                    <Description>I'm <span style={{color: 'rgba(240, 165, 0, 0.8)'}}>AMITH</span></Description>
                    <Description><Typewriter
                    words={["Tech Enthusiast", "Web Developer", "Data Scientist", "Cybersecurity Analyst"]} 
                    loop={true} cursor cursorStyle="|" /></Description>
                    </TextBox>
                </NameBox>
            </CustomContainer>
            <IconBox color='#f0a500' />

        </Box>
    );
}

export default Intro;
