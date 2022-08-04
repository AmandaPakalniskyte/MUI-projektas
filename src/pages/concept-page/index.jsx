import * as React from 'react';
import {
  Box, Typography,
} from '@mui/material';
import { Image } from '../../components';

const ConceptPage = () => (
  <>
    {/* <Box component="pre" sx={{ mt: 15 }}>{JSON.stringify(infoItems, null, 4)}</Box> */}
    <Box
      pt={15}
      pb={8}
      height="100%"
      sx={(theme) => ({ background: theme.palette.secondary.main })}
    >
      {/* <Box height="50px">{id}</Box> */}
      <Box sx={(theme) => ({
        px: 3,
        py: 5,
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
              sm: 30,
            },
          }}
        >
          PAVEIKSLŲ REPRODUKCIJŲ GAMYBA
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            mr: 2,
            my: 2,
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
        <Typography
          component="h3"
          textAlign="center"
          sx={{
            fontSize: {
              lg: 30,
              sm: 25,
            },
          }}
        >
          Kūrybos etapas
        </Typography>
        <Image
          src="/painting.jpg"
          sx={{
            position: 'relative', top: 0, left: 0, objectFit: 'contain', mt: 2,
          }}
        />
        <Box sx={{ px: 1 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              mr: 2,
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

        </Box>

      </Box>
      <Box sx={(theme) => ({
        px: 3,
        py: 2,
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
          component="h3"
          textAlign="center"
          sx={{
            fontSize: {
              lg: 30,
              sm: 25,
            },
          }}
        >
          Fotografavimo etapas
        </Typography>
        <Image
          src="/photographing2.jpg"
          sx={{
            position: 'relative', top: 0, left: 0, objectFit: 'contain', mt: 2,
          }}
        />
        <Box sx={{ px: 1 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              mr: 2,
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

        </Box>

      </Box>
      <Box sx={(theme) => ({
        px: 3,
        py: 2,
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
          component="h3"
          textAlign="center"
          sx={{
            fontSize: {
              lg: 30,
              sm: 25,
            },
          }}
        >
          Spausdinimo etapas
        </Typography>
        <Image
          src="/print3.jpg"
          sx={{
            position: 'relative', top: 0, left: 0, objectFit: 'contain', mt: 2,
          }}
        />
        <Box sx={{ px: 1 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              mr: 2,
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

        </Box>

      </Box>

    </Box>

  </>
);

export default ConceptPage;
