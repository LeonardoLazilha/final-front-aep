import * as React from 'react';
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

export default function ButtonAppBar() {
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
      <AppBar position="static" color="inherit">
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
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: '#007E2F', fontWeight: 'bold', fontFamily: 'Merriweather' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#007E2F' }}>GreenFarm</Link>
          </Typography>
          {!isMobile && (
            <React.Fragment>
              <Button color="inherit" component={Link} to="/" sx={{ color: '#000' }}>Início</Button>
              <Button color="inherit" component={Link} to="/sobre" sx={{ color: '#000' }}>Sobre</Button>
              <Button color="inherit" component={Link} to="/produtos" sx={{ color: '#000' }}>Produtos</Button>
            </React.Fragment>
          )}
          <Button
            color="inherit"
            component={Link}
            to="/login"
            sx={{
              backgroundColor: '#007E2F',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#007E2F',
                color: '#FFFFFF',
              },
              fontSize: '0.7rem', 
            }}
          >
            Já sou agricultor
          </Button>
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
            </List>
          </Drawer>
        )
      }
    </Box >
  );
}
