import * as React from 'react';
import {
  Box, Typography, Button,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Image } from '../../components';
// import GalleryCard from '../gallery-page/components/gallery-card';
// import InfoContext from '../../contexts/info-context';

// const fetchPainting = async ({ id }) => {
//   const response = await fetch(`http://localhost:8000/paintings/${id}`);
//   const painting = await response.json();

//   return painting;
// };
const fetchPaintings = async () => {
  const response = await fetch('http://localhost:8000/paintings');
  const paintings = await response.json();
  console.log(paintings.map((x) => x.title));

  return paintings;
};

const InfoPage = () => {
  const { id } = useParams();
  // const { infoItems } = React.useContext(InfoContext);
  const [painting, setPainting] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchPaintings();
  });

  return (
    <>
      <Box mt="200px">kkk</Box>
      {/* <Box component="pre" sx={{ mt: 15 }}>{JSON.stringify(infoItems, null, 4)}</Box> */}
      <Box
        key={id}
        pt={8}
        pb={8}
        onChange={(event) => setPainting(event.target.value)}
        value={painting}
        height="100%"
        sx={(theme) => ({ background: theme.palette.secondary.main })}
      >
        <Box height="50px" />
        <Box sx={(theme) => ({
          py: {
            lg: '40px',
            md: '40px',
            sm: '20px',
            xs: '20px',
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
          <Image
            src="/bold-wall.jpg"
            sx={{
              position: 'relative', top: 0, left: 0, objectFit: 'contain', mb: 2,
            }}
          />
          <Box sx={{
            px: 1,
          }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: {
                  lg: 20,
                  md: 15,
                  sm: 15,
                  xs: 13,
                },
              }}
            >
              {id}

            </Typography>
            <Typography variant="h6" component="div">
              Autorius:

            </Typography>
            <Typography variant="h6" component="div">
              Autorių teisės:
            </Typography>
            <Typography
              variant="h6"
              component="div"
            >
              Dydis:

            </Typography>
            <Typography variant="h6" component="div">Kategorija:</Typography>
            <Typography
              variant="h6"
              component="div"
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                mr: 2,
                my: 5,
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
            <Button
              width="100%"
              size="large"
              variant="contained"
              onClick={() => navigate('/gallery')}
              sx={(theme) => ({ color: theme.palette.primary.contrastText })}
            >

              <ArrowBackIosIcon />

              Grįžti į galeriją
            </Button>

          </Box>

        </Box>

      </Box>

    </>
  );
};

export default InfoPage;
