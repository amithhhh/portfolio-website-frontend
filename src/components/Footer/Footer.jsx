import { Box, Typography } from '@mui/material'
import React from 'react'
import IconBox from '../../ExtraComponents/IconBox/IconBox';

function Footer() {
  return (
    <Box sx={{backgroundColor: "#34363a", padding: "2rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <Typography variant='h4' sx={{color: "#fff"}}>
            Amith.
        </Typography>
        <IconBox color="#fff"/>
    </Box>
  )
}

export default Footer
