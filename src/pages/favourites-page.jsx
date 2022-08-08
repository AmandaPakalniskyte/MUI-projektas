import * as React from 'react';
import { Box, Grid, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import FavouritesContext from '../contexts/favourites-context';
import FavouriteCard from './favourite-card';

const fetchItem = async (id) => {
  const response = await fetch(`http://localhost:8000/paintings/${id}`);
  const item = await response.json();

  return item;
};

const fetchFavouriteItems = async (favouriteItems) => {
  const items = await Promise.all(favouriteItems.map(fetchItem));

  return items;
};

const FavouritesPage = () => {
  const { favouriteItems: favouriteItemsData } = React.useContext(FavouritesContext);
  const [favouriteItems, setFavouriteItems] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const fetchedItems = await fetchFavouriteItems(favouriteItemsData);

      setFavouriteItems(fetchedItems);
    })();
  }, [favouriteItemsData]);

  return (

    <Box sx={(theme) => ({ height: '100vh', background: theme.palette.secondary.main })}>
      <Box sx={{
        display: 'flex', gap: { xs: 4, xl: 0 }, pt: 11, px: 2,
      }}
      >
        <Grid container spacing={3}>
          {favouriteItems.map(({
            id,
            title,
            description,
            img,
            category,
            price,
            dimensions,
            liked,
          }) => (
            <Grid key={id} item xs={12} sm={6} md={4} xl={3}>
              <FavouriteCard
                key={id}
                title={title}
                description={description}
                img={img}
                category={category}
                price={price}
                dimensions={dimensions}
                liked={liked}
              />
            </Grid>
          ))}
        </Grid>

      </Box>
      <Button
        width="100%"
        size="large"
        variant="contained"
        onClick={() => navigate('/gallery')}
        sx={(theme) => ({ color: theme.palette.primary.contrastText, ml: 2, mt: 5 })}
      >

        <ArrowBackIosIcon />

        Grįžti į galeriją
      </Button>
    </Box>
  );
};

export default FavouritesPage;
