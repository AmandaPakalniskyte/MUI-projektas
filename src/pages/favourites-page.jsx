import * as React from 'react';
import { Box } from '@mui/material';
import FavouritesContext from '../contexts/favourites-context';

const FavouritesPage = () => {
  const { favouriteItems } = React.useContext(FavouritesContext);

  return (
    <Box component="pre" sx={{ mt: 15 }}>{JSON.stringify(favouriteItems, null, 4)}</Box>
  );
};

export default FavouritesPage;
