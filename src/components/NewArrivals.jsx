// components/NewArrivals.js
import React from 'react';
import '../styles/newArrivals.css';

const NewArrivals = () => {
  // Datos de ejemplo para los productos recién llegados
  const arrivals = [
    { code: 'DEP001', name: 'Camiseta Running' },
    { code: 'DEP002', name: 'Short Deportivo' },
    { code: 'DEP003', name: 'Zapatillas Training' },
    { code: 'DEP004', name: 'Mochila Deportiva' },
    { code: 'DEP005', name: 'Gorra Performance' },
  ];

  return (
    <section className="new-arrivals">
      <h2 className="section-title">RECIÉN LLEGADOS</h2>
      <div className="section-divider"></div>
      <div className="arrivals-grid">
        {arrivals.map((item, index) => (
          <div key={index} className="arrival-card">
            <table>
              <tbody>
                <tr>
                  <th>Código</th>
                  <td>{item.code}</td>
                </tr>
                <tr>
                  <th>Producto</th>
                  <td>{item.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;