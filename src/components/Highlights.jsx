// components/Highlights.js
import React from 'react';
import '../styles/highlights.css';

const Highlights = () => {
  return (
    <div className="highlights-container">
      <section className="highlight-section">
        <h3 className="highlight-title">CRÍTICITOS</h3>
        <ul className="highlight-list">
          <li>Contratar la Dirección Pública CSF 1850.</li>
          <li>Revisar la Dirección General.</li>
          <li>Tercer la Dirección Federal.</li>
        </ul>
      </section>

      <section className="highlight-section">
        <h3 className="highlight-title">ADECHA</h3>
        <ul className="highlight-list">
          <li>Contratar la Dirección Pública 1900 FA.</li>
          <li>Diferente: Adecuado Payne - Contratar Público Sostenible Subscripción.</li>
        </ul>
      </section>
    </div>
  );
};

export default Highlights;