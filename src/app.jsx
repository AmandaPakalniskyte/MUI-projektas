import * as React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { CartProvider } from './contexts/cart-context';
import { FavouritesProvider } from './contexts/favourites-context';
import PageRoutes from './routes/page-routes';

const App = () => (
  <BrowserRouter>
    <CartProvider>
      <FavouritesProvider>
        <PageRoutes />
      </FavouritesProvider>
    </CartProvider>
  </BrowserRouter>
);

export default App;
