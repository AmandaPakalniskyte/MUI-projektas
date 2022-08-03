import * as React from 'react';
import { Box } from '@mui/material';
import FavouritesContext from '../contexts/favourites-context';

const FavouritesPage = () => {
  const { favouriteItems } = React.useContext(FavouritesContext);

  return (

    <Box
      height="100vh"
      sx={(theme) => ({ background: theme.palette.secondary.main, mt: '-56px' })}
    >
      <Box component="pre" sx={{ mt: 15 }}>{JSON.stringify(favouriteItems, null, 4)}</Box>
    </Box>
  );
};

export default FavouritesPage;
