import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Products from './components/Products';
import ServiceDetails from './components/ServiceDetails';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main className="main-container">
          <Routes>
            <Route path="/" element={
              <>
                <Services />
                <Products />
              </>
            } />
            <Route path="/service/:serviceName" element={<ServiceDetails />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
