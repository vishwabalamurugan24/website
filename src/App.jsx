import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Register from './pages/Register';
import Payment from './pages/Payment';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import './index.css';

function App() {
  React.useEffect(() => {
    const scripts = ['/js/animations.js', '/js/main.js'];
    const scriptElements = scripts.map(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    });

    return () => {
      scriptElements.forEach(script => script.remove());
    };
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        {/* Global Spider-Verse Background & Overlays */}
        <canvas id="hero-web-canvas" style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}></canvas>
        <div className="bg-web-layer" id="web-layer-1"></div>

        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/register" element={<Register />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
