import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CartContext from '../contexts/cart-context';
import OrderPage from './order-page';

const CartPage = () => {
  const { cartItems } = React.useContext(CartContext);

  return (
    <>
      <Box component="pre" sx={{ mt: 15 }}>{JSON.stringify(cartItems, null, 4)}</Box>
      <Box sx={(theme) => ({ background: theme.palette.primary.contrast })}>
        <Typography variant="h3" ml={30}>Jūsų klepšelis</Typography>
        <Grid
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mx={30}
          my={2}
          pl={4}
          sx={(theme) => ({ borderRadius: 1, height: '100px', background: theme.palette.common.white })}
        >
          <Grid item xs={2} width="16%">
            <Box>img</Box>
          </Grid>
          <Grid item xs={2} width="16%">
            <Box>name</Box>
          </Grid>
          <Grid item xs={2} width="16%">
            <Box>dimensions</Box>
          </Grid>
          <Grid item xs={2} width="16%">
            <Box>quantity</Box>
          </Grid>
          <Grid item xs={2} width="16%">
            <Box>price</Box>
          </Grid>
          <Grid item xs={2} width="16%">
            <Box>delete</Box>
          </Grid>
        </Grid>
        <Grid
          spacing={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mx={30}
          my={2}
          pl={4}
          sx={(theme) => ({ borderRadius: 1, height: '100px', background: theme.palette.common.white })}
        >
          <Grid item xs={2} width="16%">
            <Box>img</Box>
          </Grid>
          <Grid item xs={2} width="16%">
            <Box>name</Box>
          </Grid>
          <Grid item xs={2} width="16%">
            <Box>dimensions</Box>
          </Grid>
          <Grid item xs={2} width="16%">
            <Box>quantity</Box>
          </Grid>
          <Grid item xs={2} width="16%">
            <Box>price</Box>
          </Grid>
          <Grid item xs={2} width="16%">
            <Box>delete</Box>
          </Grid>
        </Grid>
        <OrderPage />
      </Box>
    </>
  );
};

export default CartPage;
