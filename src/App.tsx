import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoryNavigation from './components/CategoryNavigation';
import BusinessListings from './components/BusinessListings';
import CallToActionBanner from './components/CallToActionBanner';
import Footer from './components/Footer';
import SectorsPage from './pages/SectorsPage';
import AdvertisePage from './pages/AdvertisePage';
import ContactPage from './pages/ContactPage';
import BusinessDetailPage from './pages/BusinessDetailPage';
import SearchResultsPage from './pages/SearchResultsPage';
import CategoryPage from './pages/CategoryPage';

// HomePage component
const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <CategoryNavigation />
    <BusinessListings />
    <CallToActionBanner />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sektorler" element={<SectorsPage />} />
          <Route path="/reklam-ver" element={<AdvertisePage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/isletme/:id" element={<BusinessDetailPage />} />
          <Route path="/arama" element={<SearchResultsPage />} />
          <Route path="/kategori/:categoryName" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
