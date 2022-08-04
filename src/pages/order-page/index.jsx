import * as React from 'react';
import { Box } from '@mui/material';
import ListSection from './components/list-section';
import ContactSection from './components/contact-section';

const OrderPage = () => (
  <Box sx={(theme) => ({
    display: 'flex',
    flexDirection: {
      xl: 'row',
      lg: 'column',
      md: 'column',
      sm: 'column',
      xs: 'column',
    },
    pt: 10,
    px: 4,
    gap: 4,
    background: theme.palette.secondary.main,
  })}
  >
    <ListSection />
    <ContactSection />
  </Box>
);

export default OrderPage;
