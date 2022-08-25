import * as React from 'react';
import {
  Box, Typography, Button,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Image } from '../../components';

const InfoPage = () => {
  const { id } = useParams();
  const [painting, setPainting] = React.useState(null);
  const navigate = useNavigate();

  const fetchPainting = async () => {
    const response = await fetch(`http://localhost:8000/paintings/${id}`);
    const fetchedPainting = await response.json();

    setPainting(fetchedPainting);
  };
  React.useEffect(() => {
    fetchPainting();
  });

  return (
    <Box
      py={5}
      height="100%"
      sx={(theme) => ({ background: theme.palette.primary.main })}
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
            Pavadinimas:
            {' '}
            {painting?.title}
          </Typography>
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
            {painting?.description}

          </Typography>
          <Button
            width="100%"
            size="large"
            variant="contained"
            onClick={() => navigate('/gallery')}
            sx={(theme) => ({
              color: theme.palette.common.white,
              background: theme.palette.primary.main,
            })}
          >

            <ArrowBackIosIcon />

            Grįžti į galeriją
          </Button>

        </Box>

      </Box>

    </Box>
  );
};

export default InfoPage;
