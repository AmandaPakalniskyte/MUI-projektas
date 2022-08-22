import * as React from 'react';
import { Box, Typography } from '@mui/material';
import CartContext from '../../../../contexts/cart-context';
import Item from './components/item';
import TotalSection from './components/total-section';

const fetchItem = async ({ id, count }) => {
  const response = await fetch(`http://localhost:8000/paintings/${id}`);
  const item = await response.json();

  return {
    ...item,
    count,
  };
};

const fetchCartItems = async (cartItems) => {
  const items = await Promise.all(cartItems.map((item) => fetchItem(item)));

  return items;
};

const ListSection = () => {
  const { cartItems: cartItemsData, deleteItem, addToCart } = React.useContext(CartContext);
  const [cartItems, setCartItems] = React.useState([]);
  // console.table(cartItems);

  React.useEffect(() => {
    (async () => {
      const fetchedItems = await fetchCartItems(cartItemsData);

      setCartItems(fetchedItems);
    })();
  }, [cartItemsData]);

  const total = cartItems.reduce((prevSum, { count, price }) => prevSum + count * price, 0);
  console.log(cartItems);

  return (
    <>
      {/* <Box component="pre" sx={{ mt: 15 }}>{JSON.stringify(cartItems, null, 4)}</Box> */}

      <Box
        alignSelf="center"
        sx={() => ({
          width: {
            xl: '70%',
            lg: '100%',
            md: '100%',
            sm: '100%',
            xs: '100%',
          },

        })}
      >
        {cartItems.length > 0 && (
        <Typography variant="h4" sx={(theme) => ({ color: theme.palette.common.white })}>Jūsų krepšelis</Typography>
        )}
        {cartItems.length === 0 && (
        <Typography variant="h4" sx={(theme) => ({ color: theme.palette.common.white })}>Jūsų krepšelis tuščias</Typography>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {cartItems.map(({
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
              setCount={(newCount) => addToCart({ id, count: newCount })}
              deleteItem={() => deleteItem(id)}
            />
          ))}

        </Box>
        <TotalSection total={total} />

      </Box>

    </>
  );
};

export default ListSection;
