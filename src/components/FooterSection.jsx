// components/FooterSection.js
import React from 'react';
import '../styles/footerSection.css';

const FooterSection = () => {
  return (
    <section className="footer-section">
      <h3 className="section-title">SECCIÓN</h3>
      <div className="section-divider"></div>
      <ul className="footer-list">
        <li>Registrar la Facultad de Administración.</li>
      </ul>
      <div className="footer-info">
        <p>© 2025 Cruuz Indumentaria Deportiva. Todos los derechos reservados.</p>
      </div>
    </section>
  );
};

export default FooterSection;