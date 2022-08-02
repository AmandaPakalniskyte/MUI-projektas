import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { GalleryCard, Filters } from './components';

const drawerWidth = 280;

const updatePainting = async ({ id, ...updateProps }) => {
  const response = await fetch(`http://localhost:8000/paintings/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateProps),
  });
  const responseData = await response.json();

  return responseData;
};

const fetchAllPaintings = async () => {
  const response = await fetch('http://localhost:8000/paintings');
  const paintings = await response.json();

  return paintings;
};

const GalleryPage = () => {
  const [paintings, setPaintings] = React.useState([]);

  const handleFetchPaintings = async () => {
    const fetchedPaintings = await fetchAllPaintings();
    setPaintings(fetchedPaintings);
  };

  const handleUpdatePainting = async (props) => {
    await updatePainting(props);
    await handleFetchPaintings();
  };

  React.useEffect(() => { handleFetchPaintings(); }, []);

  return (
    <Box sx={(theme) => ({ background: theme.palette.secondary.main })}>
      <Box sx={{
        display: 'flex', gap: { xs: 4, xl: 0 }, pt: 11, px: 2,
      }}
      >
        <Filters drawerWidth={drawerWidth} />
        <Grid container spacing={3} sx={{ pl: { xl: `${drawerWidth}px` } }}>
          {paintings.map(({
            id,
            title,
            description,
            img,
            category,
            price,
            dimensions,
            liked,
          }) => (
            <Grid key={id} item xs={12} sm={6} md={4} xl={3}>
              <GalleryCard
                id={id}
                title={title}
                description={description}
                img={img}
                category={category}
                price={price}
                dimensions={dimensions}
                liked={liked}
                updatePainting={handleUpdatePainting}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default GalleryPage;
