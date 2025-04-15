// App.js
import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import NewArrivals from './components/NewArrivals.jsx';
import Highlights from './components/Highlights.jsx';
import FooterSection from './components/FooterSection.jsx';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <NewArrivals />
      <Highlights />
      <FooterSection />
    </div>
  );
}

export default App;