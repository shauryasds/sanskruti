import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Ayurveda from './components/pages/Ayurveda';
import PastLifeRegression from './components/pages/PastLifeRegression';
import FengShui from './components/pages/FengShui';
import Footer from './components/layout/Footer';
import PaymentComponent from './components/utils/PaymentComponent';
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ayurveda" element={<Ayurveda />} />
          <Route path="/plr" element={<PastLifeRegression />} />
          <Route path="/feng-shui" element={<FengShui />} />
          <Route path="/consultation" element={<Calendly />} />
          <Route path="/pay" element={<PaymentComponent />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;