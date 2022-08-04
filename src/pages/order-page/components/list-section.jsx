import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CartContext from '../../../contexts/cart-context';

const ListSection = () => {
  const { cartItems } = React.useContext(CartContext);

  return (
    <>
      <Box component="pre" sx={{ mt: 15 }}>{JSON.stringify(cartItems, null, 4)}</Box>

      <Box width="100%">
        <Typography variant="h4" ml={6}>Jūsų klepšelis</Typography>
        <Grid
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          my={2}
          pl={4}
          sx={(theme) => ({ borderRadius: 1, height: '100px', background: theme.palette.secondary.opaque })}
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
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          my={2}
          mx={6}
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
      </Box>

    </>
  );
};

export default ListSection;
