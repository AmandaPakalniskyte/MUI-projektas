import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import * as Nav from './components';

const links = [
  { text: 'Pagrindinis', to: '/' },
  { text: 'Konceptas', to: '/concept' },
  { text: 'Paveikslų galerija', to: '/gallery' },
];

const expandBr = 'sm';

const Navbar = () => {
  const navigate = useNavigate();
  const isContracted = useMediaQuery((theme) => theme.breakpoints.down(expandBr));
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isContracted && open) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isContracted]);

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ display: { [expandBr]: 'none' } }}
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <Box sx={{
          display: { xs: 'none', [expandBr]: 'flex' },
          alignSelf: 'stretch',
        }}
        >
          {links.map(({ text, to }) => <Nav.Link key={to} to={to}>{text}</Nav.Link>)}
        </Box>

        {isContracted && (
          <Drawer
            anchor="top"
            open={open}
          >
            <Box sx={(theme) => ({
              ...theme.mixins.toolbarOffset,
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
              backgroundColor: 'secondary.main',
            })}
            >
              {links.map(({ text, to }) => (
                <Nav.Link
                  key={to}
                  to={to}
                  contracted
                  onClick={() => setOpen(false)}
                >
                  {text}
                </Nav.Link>
              ))}
            </Box>
          </Drawer>
        )}

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
