import * as React from 'react';
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  IconButton,
  OutlinedInput,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import { Image, TypographyLimited } from '../../../components';
import CartContext from '../../../contexts/cart-context';
import FavouritesContext from '../../../contexts/favourites-context';
import PopupWindow from './popup-window';

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
  img,
  description,
  dimensions,
  price,
}) => {
  const { addToCart, getItemCount, deleteItem } = React.useContext(CartContext);
  const itemCountInCart = getItemCount(id);
  const [count, setCount] = React.useState(itemCountInCart === 0 ? 1 : itemCountInCart);

  React.useEffect(() => {
    setCount(itemCountInCart === 0 ? 1 : itemCountInCart);
  }, [itemCountInCart]);

  const { addToFavourites } = React.useContext(FavouritesContext);
  const [disable, setDisable] = React.useState();

  // React.useEffect(() => {
  //   setDisable(!disable);
  // }, [disable]);

  // const itemCountInFavourites = getFavouritesCount(id);
  // eslint-disable-next-line max-len
  // const [favCount, setFavCount] = React.useState(itemCountInFavourites === 0 ? 1 : itemCountInCart);

  // React.useEffect(() => {
  //   setFavCount(itemCountInFavourites === 0 ? 1 : itemCountInFavourites);
  // }, [itemCountInFavourites]);

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
        <Item sx={{
          position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 1000, backgroundColor: 'black', opacity: '0', textAlign: 'center', pt: '45%',
        }}
        >
          {dimensions}
        </Item>
        <Image src={img} sx={{ position: 'absolute', top: 0, left: 0 }} />
      </Box>
      <CardContent sx={{ p: 2, flexGrow: 1 }}>
        <Box sx={{
          display: 'flex',

          alignItems: 'center',
          mb: 2,
        }}
        >
          <Typography variant="h5" component="div" sx={{ mr: 2 }}>{title}</Typography>
          <IconButton
            disabled={disable}
            sx={(theme) => ({ color: theme.palette.primary.main })}
            onClick={() => { addToFavourites(id); setDisable(true); }}
          >
            <FavoriteBorderIcon />
          </IconButton>
          <PopupWindow />
        </Box>
        <TypographyLimited variant="body2" color="text.secondary">{description}</TypographyLimited>
        <Typography variant="h5" component="div" sx={{ mt: 2 }}>{price}</Typography>
      </CardContent>
      <CardActions sx={{ p: 1, alignSelf: 'center' }}>
        <Button
          size="small"
          variant="contained"
          onClick={() => addToCart({ id, count })}
          disabled={count === itemCountInCart}
        >
          <IconButton sx={(theme) => ({ color: theme.palette.primary.contrastText })}>
            <AddShoppingCartIcon />
          </IconButton>
        </Button>
        <Box sx={{ display: 'flex', ml: 1 }}>
          <Button
            variant="contained"
            size="small"
            sx={{
              p: 0, height: 48, width: 20, minWidth: 0, borderRadius: 0, borderBottomLeftRadius: 4, borderTopLeftRadius: 4, boxShadow: 'none',
            }}
            onClick={() => setCount(count - 1)}
            disabled={count <= 1}
          >
            -
          </Button>
          <OutlinedInput
            variant="contained"
            size="small"
            inputProps={{
              style: {
                padding: 0, width: 30, minWidth: 0, textAlign: 'center',
              },
              value: count,
            }}
            readOnly
            sx={{ borderRadius: 0 }}
          />
          <Button
            variant="contained"
            size="small"
            sx={{
              p: 0, height: 48, width: 20, minWidth: 0, borderRadius: 0, borderBottomRightRadius: 4, borderTopRightRadius: 4, boxShadow: 'none',
            }}
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
        </Box>
        <Button
          size="small"
          variant="contained"
          onClick={() => deleteItem(id)}
        >
          <IconButton sx={(theme) => ({ color: theme.palette.primary.contrastText })}>
            <DeleteIcon />
          </IconButton>
        </Button>
      </CardActions>
    </Card>
  );
};

export default GalleryCard;
