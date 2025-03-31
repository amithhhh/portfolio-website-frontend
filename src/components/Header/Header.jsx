import React, { useState, useCallback } from 'react';
import { Box, Typography, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { styled, width } from '@mui/system';
import { headerData } from '../../Data/Data';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

// Styled Components
const CustomMenuIcon = styled(MenuIcon)({
  cursor: 'pointer',
  color: "#fff",
  width: "5rem",
  height: "3rem"
});

const MainBox = styled(Box)({
  backgroundColor: '#2d2d30',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px',
});

const ListBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(10),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const ListComponent = styled(Box)({
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
  '&:hover': {
    color: '#f7c274',
  },
});

const IconBox = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    alignItems: 'center',
  },
}));

function Header() {
  console.log("header is rendering....")
  const navigate = useNavigate();
  const [mobileMenu, setMobilemenu] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setMobilemenu((prevState) => ({ ...prevState, [anchor]: open }));
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {headerData.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <MainBox>
      <Box>
        <Typography
          sx={{
            fontFamily: 'monospace',
            fontWeight: 'bold',
            fontSize: '30px',
            color: '#fff',
            cursor: 'pointer'
          }}
          onClick={() => navigate('/')}
        >
          Am.
        </Typography>
      </Box>
      
      {/* Mobile Menu */}
      <IconBox>
        <CustomMenuIcon onClick={toggleDrawer('left', true)} />
        <Drawer anchor="left" open={mobileMenu.left} onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
      </IconBox>
      
      {/* Desktop Menu */}
      <ListBox>
        {headerData.map((item) => (
          <ListComponent key={item.id} onClick={() => navigate(item.path)} role="button">
            {item.name}
          </ListComponent>
        ))}
      </ListBox>
    </MainBox>
  );
}

export default Header;
