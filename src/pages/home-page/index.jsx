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
  <Box sx={() => ({
    // position: 'absolute',
    // top: 0,
    // left: 0,
    height: '100vh',
    width: '100%',
    // zIndex: 1,
    backgroundColor: 'black',
    p: 10,

  })}
  >
    <Box
      height="500px"
      width="700px"
      // top={0}
      // left={0}
      component="img"
      src="/face2.jpg"
      // zIndex="9000"
      // objectFit="scale-down"
      objectPosition="left"
      position="relative"

    />
    <Box
      color="white"
      position="absolute"
      height="220px"
      width="450px"
      // border="2px solid white"
      top={350}
      left={550}
      zIndex="665"
      sx={() => ({
        backgroundColor: 'black',
        p: 5,
      })}
    >
      <Typography
        component="h2"
        variant="h6"
        sx={() => ({ mb: 2 })}
      >
        GALERIJOS KONCEPTAS

      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Delectus
        architecto illum perferendis mollitia a ducimus
        minima unde esse nostrum quae voluptates voluptatem iusto
      </Typography>

    </Box>
  </Box>

);
export default HomePage;
