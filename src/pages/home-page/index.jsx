import * as React from 'react';
import {
  Box, Typography,
} from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { styled } from '@mui/material/styles';

// import * as Home from './components';

// const Item = styled(Box)(({ theme }) => ({

//   ':hover': {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//     cursor: 'pointer',
//   },

// }));

const HomePage = () => (
  <Box sx={(theme) => ({
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
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
      <Box
        sx={{
          height: {
            lg: '350px',
            md: '350px',
            sm: '250px',
            xs: '250px',
          },
          width: {
            lg: '550px',
            md: '550px',
            sm: '450px',
            xs: '320px',
          },
        }}
        component="img"
        src="/palms2.jpg"
        objectPosition="left"
        position="relative"
        right={0}
        alignSelf="center"
        display="flex"
        justifyContent="right"
      />
      <Box
        color="white"
        position="absolute"
        zIndex="665"
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.main,
          p: {
            lg: 5,
            md: 5,
            sm: 4,
            xs: 4,
          },
          top: {
            lg: 215,
            md: 215,
            sm: 185,
            xs: 185,
          },
          right: {
            lg: '40%',
            md: '20%',
            sm: '0%',
            xs: '0%',
          },
          height: {
            lg: '220px',
            md: '220px',
            sm: '180px',
            xs: '180px',
          },
          width: {
            lg: '500px',
            md: '500px',
            sm: '400px',
            xs: '320px',
          },
        })}
      >
        <Typography
          component="h2"
          variant="h6"
          sx={() => ({
            mb: 2,
            fontSize: {
              lg: 16,
              md: 16,
              sm: 13,
              xs: 13,
            },
          })}
        >
          GALERIJOS KONCEPTAS
        </Typography>
        <Typography sx={() => ({
          fontSize: {
            lg: 16,
            md: 16,
            sm: 13,
            xs: 13,
          },
        })}
        >
          Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Delectus
          architecto illum perferendis mollitia a ducimus
          minima unde esse nostrum quae voluptates voluptatem
        </Typography>
      </Box>
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
      <Box
        sx={{
          height: {
            lg: '350px',
            md: '350px',
            sm: '250px',
            xs: '250px',
          },
          width: {
            lg: '550px',
            md: '550px',
            sm: '400px',
            xs: '320px',
          },
        }}
        display="flex"
        component="img"
        src="/palms1.jpg"
        objectFit="scale-down"
        position="relative"
      />
      <Box
        color="white"
        position="absolute"
        zIndex="665"
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.main,
          p: {
            lg: 5,
            md: 5,
            sm: 4,
            xs: 4,
          },
          top: {
            lg: 615,
            md: 615,
            sm: 480,
            xs: 480,
          },
          left: {
            lg: '40%',
            md: '20%',
            sm: '0%',
            xs: '0%',
          },
          height: {
            lg: '220px',
            md: '220px',
            sm: '180px',
            xs: '180px',
          },
          width: {
            lg: '500px',
            md: '500px',
            sm: '400px',
            xs: '320px',
          },
        })}
      >
        <Typography
          component="h2"
          variant="h6"
          sx={() => ({
            mb: 2,
            fontSize: {
              lg: 16,
              md: 16,
              sm: 13,
              xs: 13,
            },
          })}
        >
          GALERIJOS ISTORIJA
        </Typography>
        <Typography sx={() => ({
          fontSize: {
            lg: 16,
            md: 16,
            sm: 13,
            xs: 13,
          },
        })}
        >
          Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Delectus
          architecto illum perferendis mollitia a ducimus
          minima unde esse nostrum quae voluptates voluptatem
        </Typography>
      </Box>
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
