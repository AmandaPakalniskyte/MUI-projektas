import * as React from 'react';
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
import { Image, TypographyLimited } from '../../../components';
import CartContext from '../../../contexts/cart-context';
import FavouritesContext from '../../../contexts/favourites-context';

const Item = styled(Box)(({ theme }) => ({

  ':hover': {
    color: theme.palette.common.white,
    cursor: 'pointer',
    opacity: '0.7',
  },

}));

const GalleryCard = ({
  id,
  title,
  category,
  img,
  description,
  dimensions,
  price,
}) => {
  const { addToCart } = React.useContext(CartContext);
  const { addToFavourites } = React.useContext(FavouritesContext);

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
        <Item sx={{
          position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 5000, backgroundColor: 'black', opacity: '0', textAlign: 'center', pt: '45%',
        }}
        >
          {dimensions}
        </Item>
        <Image src={img} sx={{ position: 'absolute', top: 0, left: 0 }} />
      </Box>
      <CardContent sx={{ p: 2, flexGrow: 1 }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
        >
          <Typography variant="h5" component="div">{title}</Typography>
          <Typography variant="subtitle" component="div">{category}</Typography>
        </Box>
        <TypographyLimited variant="body2" color="text.secondary">{description}</TypographyLimited>
        <Typography variant="h5" component="div" sx={{ mt: 2 }}>{price}</Typography>
      </CardContent>
      <CardActions sx={{ p: 1, alignSelf: 'center' }}>
        <Button size="small" variant="contained">
          <IconButton sx={(theme) => ({ color: theme.palette.primary.contrastText })}>
            <RemoveRedEyeIcon />
          </IconButton>
        </Button>
        <Button size="small" variant="contained" onClick={() => addToFavourites(id)}>
          <IconButton sx={(theme) => ({ color: theme.palette.primary.contrastText })}>
            <FavoriteBorderIcon />
          </IconButton>
        </Button>
        <Button size="small" variant="contained" onClick={() => addToCart(id)}>
          <IconButton sx={(theme) => ({ color: theme.palette.primary.contrastText })}>
            <AddShoppingCartIcon />
          </IconButton>
        </Button>
      </CardActions>
    </Card>
  );
};

export default GalleryCard;
