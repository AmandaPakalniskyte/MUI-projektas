import * as React from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { Image } from '../../components';
import BackToGalleryButton from '../../components/back-to-galerry-button';
import BackgroundBox from '../../components/background-box';
import BackgroundContainer from '../../components/background-container';
import 'react-slideshow-image/dist/styles.css';

const InfoPage = () => {
  const { id } = useParams();
  const [painting, setPainting] = React.useState(null);

  const fetchPainting = async () => {
    const response = await fetch(`http://localhost:8000/paintings/${id}`);
    const fetchedPainting = await response.json();

    setPainting(fetchedPainting);
  };
  React.useEffect(() => {
    fetchPainting();
  });

  return (
    <BackgroundContainer>
      <BackgroundBox>
        {/* <Image
          src={painting?.imgWall}
          sx={{
            position: 'relative',
            top: 0,
            left: 0,
            objectFit: 'contain',
            mb: 2,
          }}
        /> */}
        <Slide position="relative" height="100px">
          <Box>
            <Image
              src={painting?.imgWall}
              sx={{
                position: 'relative',
                top: 0,
                left: 0,
                objectFit: 'contain',
                mb: 2,
              }}
            />
          </Box>
          <Box>
            <Image
              src={painting?.imgWallDark}
              sx={{
                position: 'relative',
                top: 0,
                left: 0,
                objectFit: 'contain',
                mb: 2,
              }}
            />
          </Box>
        </Slide>
        <Typography variant="h6" component="div">
          Autorius:
          {' '}
          {painting?.author}
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
        <BackToGalleryButton />
      </BackgroundBox>
    </BackgroundContainer>
  );
};

export default InfoPage;
