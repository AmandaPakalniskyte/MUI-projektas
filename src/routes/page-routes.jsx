import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/main-layout';
import HomePage from '../pages/home-page';
import GalleryPage from '../pages/gallery-page';
import ConceptPage from '../pages/concept-page';
import InfoPage from '../pages/info-page';
import OrderPage from '../pages/order-page';
import FavouritesPage from '../pages/favourites-page';
import ContactPage from '../pages/contact-page';
import LoginPage from '../pages/login-page';
import ErrorPage from '../pages/error-page';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/concept" element={<ConceptPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/info/:id" element={<InfoPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default PageRoutes;
