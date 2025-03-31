import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from '@mui/material'

function IconBox(color) {
    return (
        <Box sx={{ width: {lg: '30rem', sm: 'auto'}, display: 'flex', justifyContent: 'space-between', gap: "1rem" }}>
            <FacebookIcon sx={{ color: color, fontSize: '2rem' }} onClick={() => window.open("https://facebook.com")} />
            <InstagramIcon sx={{ color: color, fontSize: '2rem' }} onClick={() => window.open("https://instagram.com/_amithhhhh")} />
            <TwitterIcon sx={{ color: color, fontSize: '2rem' }} onClick={() => window.open("https://twitter.com")} />
            <GitHubIcon sx={{ color: color, fontSize: '2rem' }} onClick={() => window.open("https://github.com/amithhhh")} />
        </Box>
    )
}

export default IconBox
