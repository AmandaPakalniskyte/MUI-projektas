import * as React from 'react';
import {
  Box, Typography,
} from '@mui/material';
import Img from './components/img';
import ImgReverse from './components/img-reverse';
import TopDescription from './components/top-description';
import BottomDescription from './components/bottom-description';

const HomePage = () => (
  <Box sx={(theme) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    py: {
      lg: 10,
      md: 10,
      sm: 10,
      xs: 10,
    },
    px: {
      lg: 10,
      md: 10,
      sm: 4,
      xs: 4,
    },
  })}
  >
    <Box>
      <Img />
      <TopDescription />
      <Box
        textAlign="right"
        color="white"
        position="absolute"
        sx={() => ({
          top: {
            xl: 90,
            lg: 140,
            md: 140,
            sm: 185,
            xs: 185,
          },
          right: {
            xl: 85,
            lg: 85,
            md: 85,
            sm: '0%',
            xs: '0%',
          },
        })}
      >
        <Typography sx={{ typography: { xl: 'h1', lg: 'h2' } }}>PAVEI</Typography>
        <Typography sx={{ typography: { xl: 'h1', lg: 'h2' } }}>KSLŲ</Typography>
        <Typography sx={{ typography: { xl: 'h1', lg: 'h2' } }}>REPRO</Typography>
        <Typography sx={{ typography: { xl: 'h1', lg: 'h2' } }}>DUKCIJŲ</Typography>

      </Box>
    </Box>
    <Box display="flex" justifyContent="right" mt={6}>
      <ImgReverse />
      <BottomDescription />
      <Box
        textAlign="left"
        color="white"
        position="absolute"
        sx={() => ({
          top: {
            lg: 590,
            md: 215,
            sm: 185,
            xs: 185,
          },
          left: {
            lg: 85,
            md: '20%',
            sm: '0%',
            xs: '0%',
          },
        })}
      >
        <Typography sx={{ typography: { xl: 'h1', lg: 'h2' } }}>GA</Typography>
        <Typography sx={{ typography: { xl: 'h1', lg: 'h2' } }}>LER</Typography>
        <Typography sx={{ typography: { xl: 'h1', lg: 'h2' } }}>IJA</Typography>
      </Box>
    </Box>
  </Box>

);
export default HomePage;
