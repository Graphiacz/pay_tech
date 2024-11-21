import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Terminal from './components/Terminal';
import Loyalty from './components/Loyalty';
import DigitalWallet from './components/Wallet';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Terminal />
      <Loyalty />
      <DigitalWallet />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;