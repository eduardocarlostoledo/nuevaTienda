// components/About.js
import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">NOSOTROS</h2>
      <div className="section-divider"></div>
      <ul className="about-list">
        <li>
          Somos una empresa especializada en indumentaria deportiva de alta calidad, comprometida con satisfacer las necesidades de nuestros clientes.
        </li>
        <li>
          Ofrecemos productos duraderos y cómodos para atletas y entusiastas del deporte.
        </li>
        <li>
          Nuestro equipo está dedicado a brindar asesoramiento personalizado y servicio de excelencia.
        </li>
      </ul>
    </section>
  );
};

export default About;