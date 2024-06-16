import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

export default function ButtonAppBarGreen() {
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:700px)');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" sx={{ backgroundColor: '#007E2F' }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
          {/* Logo */}
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: '#fff', fontWeight: 'bold', fontFamily: 'Merriweather' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>GreenFarm</Link>
          </Typography>
          {/* Itens do centro - aparecem apenas em telas maiores que 700px */}
          {!isMobile && (
            <React.Fragment>
              <Button color="inherit" sx={{ color: '#fff' }} component={Link} to="/">
                Início
              </Button>
              <Button color="inherit" sx={{ color: '#fff' }} component={Link} to="/sobre">
                Sobre
              </Button>
              <Button color="inherit" sx={{ color: '#fff' }} component={Link} to="/produtos">
                Produtos
              </Button>
              <Button color="inherit" sx={{ color: '#fff' }} component={Link} to="/perfil">
                Perfil
              </Button>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
      {
        isMobile && (
          <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
            <List>
              <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
                <ListItemText primary="Início" />
              </ListItem>
              <ListItem button component={Link} to="/sobre" onClick={handleDrawerClose}>
                <ListItemText primary="Sobre" />
              </ListItem>
              <ListItem button component={Link} to="/produtos" onClick={handleDrawerClose}>
                <ListItemText primary="Produtos" />
              </ListItem>
              <ListItem button component={Link} to="/perfil" onClick={handleDrawerClose}>
                <ListItemText primary="Perfil" />
              </ListItem>
            </List>
          </Drawer>
        )
      }
    </Box >
  );
}
