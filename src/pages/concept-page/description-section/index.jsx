import * as React from 'react';
import {
  Box, Typography,
} from '@mui/material';
import { Image } from '../../../components';

const items = [
  { imgLink: '/painting.jpg', itemTitle: 'Kūrybos etapas', explanation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores cumque libero numquam rerum, expedita illo laborum enim. Labore quisquam quo excepturi dicta et iste eligendi consequuntur a dignissimos animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores cumque libero numquam rerum, expedita illo laborum enim. Labore quisquam quo excepturi dicta et iste eligendi consequuntur a dignissimos animi?' },
  { imgLink: '/photographing2.jpg', itemTitle: 'Fotografavimo etapas', explanation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores cumque libero numquam rerum, expedita illo laborum enim. Labore quisquam quo excepturi dicta et iste eligendi consequuntur a dignissimos animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores cumque libero numquam rerum, expedita illo laborum enim. Labore quisquam quo excepturi dicta et iste eligendi consequuntur a dignissimos animi?' },
  { imgLink: '/print3.jpg', itemTitle: 'Spausdinimo etapas', explanation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores cumque libero numquam rerum, expedita illo laborum enim. Labore quisquam quo excepturi dicta et iste eligendi consequuntur a dignissimos animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores cumque libero numquam rerum, expedita illo laborum enim. Labore quisquam quo excepturi dicta et iste eligendi consequuntur a dignissimos animi?' },
];

const DescriptionSection = () => (
  <Box sx={(theme) => ({
    py: {
      lg: '60px',
      md: '60px',
      sm: '40px',
      xs: '40px',
    },
    px: {
      lg: '40px',
      md: '40px',
      sm: '20px',
      xs: '20px',
    },
    width: {
      lg: '60vw',
      md: '70vw',
      sm: '80vw',
      xs: '85vw',
    },
    mx: 'auto',
    background: theme.palette.common.white,
    borderRadius: 1,
  })}
  >
    <Typography
      component="h2"
      textAlign="center"
      sx={{
        fontSize: {
          lg: 40,
          md: 30,
          sm: 30,
          xs: 25,

        },
        pb: 3,
      }}
    >
      PAVEIKSLŲ REPRODUKCIJŲ GAMYBA
    </Typography>
    <Typography
      variant="h6"
      component="div"
      sx={{
        mx: 2,
        my: 1,
        fontSize: {
          lg: 20,
          md: 15,
          sm: 15,
          xs: 13,
        },
      }}
    >
      {' '}
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Iste maiores cumque libero numquam rerum, expedita illo laborum enim.
      Labore quisquam quo excepturi dicta et iste eligendi consequuntur a dignissimos
      animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores
      cumque libero numquam rerum, expedita illo laborum enim. Labore quisquam quo
      excepturi dicta et iste eligendi consequuntur a dignissimos animi?
      {' '}
    </Typography>
    {items.map(({ itemTitle, imgLink, explanation }) => (
      <Box>
        <Typography
          component="h3"
          textAlign="center"
          mt={6}
          sx={{
            fontSize: {
              lg: 30,
              sm: 25,
            },
          }}
        >
          {itemTitle}
        </Typography>
        <Image
          src={imgLink}
          sx={{
            position: 'relative', top: 0, left: 0, objectFit: 'contain', mt: 2,
          }}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{
            mx: 2,
            my: 1,
            fontSize: {
              lg: 20,
              md: 15,
              sm: 15,
              xs: 13,
            },
          }}
        >
          {explanation}
        </Typography>
      </Box>
    ))}
  </Box>
);

export default DescriptionSection;
