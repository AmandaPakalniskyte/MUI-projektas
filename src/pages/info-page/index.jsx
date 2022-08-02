import * as React from 'react';
import {
  Box, Typography, Button, IconButton,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Image } from '../../components';
// import GalleryCard from '../gallery-page/components/gallery-card';
// import InfoContext from '../../contexts/info-context';

const InfoPage = () => {
  const { id } = useParams();
  // const { infoItems } = React.useContext(InfoContext);
  const [painting, setPainting] = React.useState('');
  const navigate = useNavigate();

  return (
    <>
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
        <Box height="50px">{id}</Box>
        <Box sx={(theme) => ({
          px: 3, py: 3, width: '60%', mx: 'auto', background: theme.palette.common.white, borderRadius: 1,
        })}
        >
          <Image
            src="/bold-wall.jpg"
            sx={{
              position: 'relative', top: 0, left: 0, objectFit: 'contain',
            }}
          />
          <Box sx={{ px: 1 }}>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>Pavadinimas:</Typography>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>Autorius:</Typography>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>Dydis:</Typography>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>Kategorija:</Typography>
            <Typography variant="h6" component="div" sx={{ mr: 2, my: 5 }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores cumque libero numquam rerum, expedita illo laborum enim. Labore quisquam quo excepturi dicta et iste eligendi consequuntur a dignissimos animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores cumque libero numquam rerum, expedita illo laborum enim. Labore quisquam quo excepturi dicta et iste eligendi consequuntur a dignissimos animi? </Typography>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>Kaina</Typography>

          </Box>
          <Button
            size="small"
            variant="contained"
            onClick={() => navigate('/gallery')}
          >
            <IconButton
              sx={(theme) => ({ color: theme.palette.primary.contrastText })}
            >
              <ArrowBackIosIcon />
            </IconButton>
            Grįžti į galeriją
          </Button>
        </Box>

      </Box>

    </>
  );
};

export default InfoPage;
