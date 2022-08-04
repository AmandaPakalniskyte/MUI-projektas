import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import * as Nav from './components';

const pages = [
  { text: 'Pagrindinis', to: '/' },
  { text: 'Konceptas', to: '/concept' },
  { text: 'Paveikslų galerija', to: '/gallery' },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignSelf: 'stretch' }}>
          {pages.map(({ text, to }) => <Nav.Link key={to} to={to}>{text}</Nav.Link>)}
        </Box>
        <Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={() => navigate('/favourites')}
          >
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={() => navigate('/order')}
          >
            <ShoppingBasketIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
