import * as React from 'react';
import { Box } from '@mui/material';
import ListSection from './components/list-section';

const OrderPage = () => (
  <Box sx={(theme) => ({
    display: 'flex',
    flexDirection: {
      xl: 'column',
      lg: 'column',
      md: 'column',
      sm: 'column',
      xs: 'column',
    },
    py: {
      lg: 10,
      md: 10,
      sm: 10,
      xs: 5,
    },
    px: {
      lg: 10,
      md: 10,
      sm: 10,
      xs: 5,
    },
    height: '100vh',
    background: theme.palette.secondary.main,
  })}
  >
    <ListSection />
  </Box>
);

export default OrderPage;
