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
    pt: 10,
    px: 10,
    height: '100vh',
    background: theme.palette.secondary.main,
  })}
  >
    <ListSection />
  </Box>
);

export default OrderPage;
