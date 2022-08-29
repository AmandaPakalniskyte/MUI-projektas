import * as React from 'react';
import {
  Box,
} from '@mui/material';

const RegisterFormSection = ({ children }) => (
  <Box sx={(theme) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: {
      xl: 'column',
      lg: 'column',
      md: 'column',
      sm: 'column',
      xs: 'column',
    },
    py: 8,
    px: 10,
    height: '100%',
    background: theme.palette.primary.main,
  })}
  >
    {children}

  </Box>
);

export default RegisterFormSection;
