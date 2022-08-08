import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Navbar } from './components';
import HomePage from './pages/home-page';
import GalleryPage from './pages/gallery-page';
import ConceptPage from './pages/concept-page';
// import ListSection from './pages/order-page/components/list-section';
// import ContactSection from './pages/order-page/components/contact-section';
import InfoPage from './pages/info-page';
import OrderPage from './pages/order-page';
import FavouritesPage from './pages/favourites-page';
import ErrorPage from './pages/error-page';
import { CartProvider } from './contexts/cart-context';
import { FavouritesProvider } from './contexts/favourites-context';
// import InfoContext from './contexts/info-context';

const App = () => (
  <BrowserRouter>
    <CartProvider>
      <FavouritesProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/concept" element={<ConceptPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/info/:id" element={<InfoPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </FavouritesProvider>
    </CartProvider>
  </BrowserRouter>
);

export default App;
