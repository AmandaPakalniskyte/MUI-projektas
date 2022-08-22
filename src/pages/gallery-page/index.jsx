import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { GalleryCard, Filters } from './components';
import PaintingService from '../../services/painting-service';

const drawerWidth = 280;

// const updatePainting = async ({ id, ...updateProps }) => {
//   const response = await fetch(`http://localhost:8000/paintings/${id}`, {
//     method: 'PATCH',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updateProps),
//   });
//   const responseData = await response.json();

//   return responseData;
// };

// const fetchAllPaintings = async () => {
//   const response = await fetch('http://localhost:8000/paintings');
//   const paintings = await response.json();

//   return paintings;
// };

const GalleryPage = () => {
  const [paintings, setPaintings] = React.useState([]);

  const handleFetchPaintings = async () => {
    const fetchedPaintings = await PaintingService.fetchAll();
    setPaintings(fetchedPaintings);
  };

  const handleUpdatePainting = async (props) => {
    await PaintingService.update(props);
    await handleFetchPaintings();
  };

  React.useEffect(() => { handleFetchPaintings(); }, []);

  return (
    <Box sx={(theme) => ({ background: theme.palette.primary.main })}>
      <Box sx={{
        display: 'flex', gap: { xs: 4, xl: 0 }, pt: 3, pb: 3, px: 3,
      }}
      >
        <Filters drawerWidth={drawerWidth} />
        <Grid container spacing={3} sx={{ pl: { xl: `${drawerWidth}px` } }}>
          {paintings.map(({
            id,
            title,
            description,
            img,
            price,
            sizeId,
            liked,
            size,
          }) => (
            <Grid key={id} item xs={12} sm={6} md={4} xl={3}>
              <GalleryCard
                id={id}
                title={title}
                description={description}
                img={img}
                price={price}
                sizeId={sizeId}
                liked={liked}
                size={size}
                updatePainting={handleUpdatePainting}
              />
              {title}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default GalleryPage;
