import * as React from 'react';
import { Box, Typography } from '@mui/material';
import CartContext from '../../../../contexts/cart-context';
import Item from './components/item';

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
  const { cartItems: cartItemsData } = React.useContext(CartContext);
  const [cartItems, setCartItems] = React.useState([]);
  // console.table(cartItems);

  React.useEffect(() => {
    (async () => {
      const fetchedItems = await fetchCartItems(cartItemsData);

      setCartItems(fetchedItems);
    })();
  }, [cartItemsData]);

  return (
    <>
      {/* <Box component="pre" sx={{ mt: 15 }}>{JSON.stringify(cartItems, null, 4)}</Box> */}

      <Box width="100%">
        <Typography variant="h4" ml={1} mt={4}>Jūsų krepšelis</Typography>
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
              setCount={(newCount) => console.log(newCount)}
            />
          ))}

        </Box>

      </Box>

    </>
  );
};

export default ListSection;
