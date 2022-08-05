import * as React from 'react';
import { Box, Typography } from '@mui/material';
import FavouritesContext from '../contexts/favourites-context';
import Item from './order-page/components/list-section/components/item';

const fetchItem = async ({ id, count }) => {
  const response = await fetch(`http://localhost:8000/paintings/${id}`);
  const item = await response.json();

  return {
    ...item,
    count,
  };
};

const fetchFavouriteItems = async (FavouriteItems) => {
  const items = await Promise.all(FavouriteItems.map((item) => fetchItem(item)));

  return items;
};

const FavouritesPage = () => {
  const { favouriteItems: favouriteItemsData } = React.useContext(FavouritesContext);
  const [favouriteItems, setFavouriteItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const fetchedItems = await fetchFavouriteItems(favouriteItemsData);

      setFavouriteItems(fetchedItems);
    })();
  }, [favouriteItemsData]);

  return (

    <Box width="100%">
      <Typography variant="h4" ml={1} mt={4}>Jūsų krepšelis</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {favouriteItems.map(({
          id,
          img,
          title,
          dimensions,
          price,
          count,
        }) => (
          <Item
            key={id}
            img={img}
            title={title}
            dimensions={dimensions}
            price={price}
            count={count}
            setCount={(newCount) => console.log(newCount)}
          />
        ))}

      </Box>

    </Box>
  );
};

export default FavouritesPage;
