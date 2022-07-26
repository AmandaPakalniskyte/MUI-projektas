import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Navbar } from './components';
import HomePage from './pages/home-page';
import GalleryPage from './pages/gallery-page';
import HistoryPage from './pages/history-page';
import CartPage from './pages/cart-page';
import OrderPage from './pages/order-page';
import FavouritesPage from './pages/favourites-page';
import ErrorPage from './pages/error-page';
import CartContext from './contexts/cart-context';
import FavouritesContext from './contexts/favourites-context';

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [favouriteItems, setFavouriteItems] = React.useState([]);

  // React.useMemo( FUNKCIJA_KURI_GRĄŽINA_REIKŠMĘ, MASYVAS_SU_STEBIMAIS_KINTAMAISIAIS)
  // Kuomet keičiasi stebimi kintamieji, perskaičiuojama reikšmė kviečiant funkciją pirmu parametru
  const cartContextValue = React.useMemo(() => ({
    cartItems,
    addToCart: (item) => setCartItems([...cartItems, item]),
  }), [cartItems]);

  const favouritesContextValue = React.useMemo(() => ({
    favouriteItems,
    addToFavourites: (item) => setFavouriteItems([...favouriteItems, item]),
  }), [favouriteItems]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={cartContextValue}>
        <FavouritesContext.Provider value={favouritesContextValue}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </FavouritesContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
