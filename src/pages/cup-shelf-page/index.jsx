import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { GalleryCard, Filters } from './components';

const drawerWidth = 280;

const GalleryPage = () => {
  const [paintings, setPaintings] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/paintings')
      .then((res) => res.json())
      .then((fetchedPaintings) => setPaintings(fetchedPaintings));
  }, []);

  return (
    <Box sx={{
      display: 'flex', gap: { xs: 4, xl: 0 }, pt: 11, px: 2,
    }}
    >
      <Filters drawerWidth={drawerWidth} />
      <Grid container spacing={2} sx={{ pl: { xl: `${drawerWidth}px` } }}>
        {paintings.map(({
          id,
          title,
          description,
          img,
          category,
          price,
          dimensions,
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
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GalleryPage;
