import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import EventSection from './components/EventSection';
import SignupPage from './components/SignUpPage';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <EventSection />
    </>
  );
};

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />

      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
