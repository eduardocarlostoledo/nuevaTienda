import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import "./Contact.css";

export const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ENVÍO AL ADMIN
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID_ADMIN,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: "info@toledoconsultora.com"
        },
        process.env.REACT_APP_PUBLIC_KEY
      );

      // ENVÍO AL CLIENTE
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID_CLIENT,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      );

      setSubmitStatus({ success: true, message: "Mensaje enviado con éxito!" });
      setFormData({ name: "", email: "", message: "" });

      Swal.fire({
        icon: "success",
        title: "Hemos recibido tu consulta",
        text: "Nos comunicaremos a la brevedad posible",
        confirmButtonColor: "#3085d6"
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus({ success: false, message: "Error al enviar el mensaje. Intente nuevamente." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>MANTENGAMOS EL CONTACTO</h2>
          <p>Déjanos un mensaje o consulta y estaremos en comunicación a la brevedad posible.</p>
        </div>

        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ingrese su nombre"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Ingrese su email"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Escriba su mensaje aquí..."
                ></textarea>
              </div>
            </div>

            {submitStatus && (
              <div className={`submit-status ${submitStatus.success ? "success" : "error"}`}>
                {submitStatus.message}
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner"></span> Enviando...
                </>
              ) : (
                "Enviar Mensaje"
              )}
            </button>
          </form>

          <div className="contact-info">
            <h3>Información de Contacto</h3>

            <div className="info-item">
              <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="info-content">
                <h4>Dirección</h4>
                <p>C.52 / 22 – Posadas, Misiones, Argentina</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
              <div className="info-content">
                <h4>Teléfono</h4>
                <p>+54 3764221063</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><i className="fas fa-envelope"></i></div>
              <div className="info-content">
                <h4>Email</h4>
                <p>ventas@toledoconsultora.com</p>
              </div>
            </div>

            <div className="social-links">
              {data?.facebook && (
                <a href={data.facebook} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              )}

              {/* WhatsApp SVG alternativo para mejor visibilidad */}
              <a href="https://wa.me/5493764221063" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  style={{ width: "40px", height: "40px", filter: "brightness(1.1)" }}
                />
              </a>

              {data?.instagram && (
                <a href={data.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              )}

              {/* Icono YouTube alternativo (más contrastado) */}
              {data?.youtube && (
                <a href={data.youtube} target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="YouTube"
                    style={{ marginLeft: "40px", width: "80px", height: "24px" }}
                  />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Ubicación de Toledo Consultora IT"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.261900230452!2d-55.9518657477621!3d-27.367535016477795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457bdf666326c87%3A0xf2d3d831576ad4b1!2sC.%2052%2022%2C%20N3301%20Posadas%2C%20Misiones!5e0!3m2!1ses!2sar!4v1732100062688!5m2!1ses!2sar"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};


// import React, { useState } from "react";
// import emailjs from '@emailjs/browser';
// import Swal from "sweetalert2";
// import "./Contact.css";

// export const Contact = ({ data }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {

//       // Enviar copia al administrador
//     await emailjs.send(
//       process.env.REACT_APP_SERVICE_ID,
//       process.env.REACT_APP_TEMPLATE_ID_ADMIN, // Plantilla para admin
//       {
//         name: formData.name,
//         email: formData.email,
//         message: formData.message,
//         to_email: 'info@toledoconsultora.com' // Email fijo para admin
//       },
//       process.env.REACT_APP_PUBLIC_KEY
//     );


//       await emailjs.sendForm(
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID_CLIENT,
//         e.target,
//         process.env.REACT_APP_PUBLIC_KEY
//       );
      
//       setSubmitStatus({ success: true, message: "Mensaje enviado con éxito!" });
//       setFormData({ name: "", email: "", message: "" });

//       Swal.fire({
//         icon: 'success',
//         title: 'Hemos recibido tu consulta',
//         text: 'Nos comunicaremos a la brevedad posible',
//         confirmButtonColor: '#3085d6'
//       });
      
//       // Reset status after 5 seconds
//       setTimeout(() => setSubmitStatus(null), 5000);
//     } catch (error) {
//       setSubmitStatus({ success: false, message: "Error al enviar el mensaje. Intente nuevamente." });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <div className="contact-container">
//         <div className="contact-header">
//           <h2>MANTENGAMOS EL CONTACTO</h2>
//           <p>Déjanos un mensaje o consulta y estaremos en comunicación a la brevedad posible.</p>
//         </div>

//         <div className="contact-content">
//           <form onSubmit={handleSubmit} className="contact-form">
//             <div className="form-grid">
//               <div className="form-group">
//                 <label htmlFor="name">Nombre</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   placeholder="Ingrese su nombre"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="email">Correo Electrónico</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="Ingrese su email"
//                 />
//               </div>

//               <div className="form-group full-width">
//                 <label htmlFor="message">Mensaje</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   placeholder="Escriba su mensaje aquí..."
//                 ></textarea>
//               </div>
//             </div>

//             {submitStatus && (
//               <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
//                 {submitStatus.message}
//               </div>
//             )}

//             <button type="submit" className="submit-btn" disabled={isSubmitting}>
//               {isSubmitting ? (
//                 <>
//                   <span className="spinner"></span> Enviando...
//                 </>
//               ) : (
//                 "Enviar Mensaje"
//               )}
//             </button>
//           </form>

//           <div className="contact-info">
//             <h3>Información de Contacto</h3>
            
//             <div className="info-item">
//               <div className="info-icon">
//                 <i className="fas fa-map-marker-alt"></i>
//               </div>
//               <div className="info-content">
//                 <h4>Dirección</h4>
//                 <p>C.52 / 22 – Posadas, Misiones, Argentina</p>
//               </div>
//             </div>

//             <div className="info-item">
//               <div className="info-icon">
//                 <i className="fas fa-phone-alt"></i>
//               </div>
//               <div className="info-content">
//                 <h4>Teléfono</h4>
//                 <p>+54 3764221063</p>
//               </div>
//             </div>

//             <div className="info-item">
//               <div className="info-icon">
//                 <i className="fas fa-envelope"></i>
//               </div>
//               <div className="info-content">
//                 <h4>Email</h4>
//                 <p>ventas@toledoconsultora.com</p>
//               </div>
//             </div>

//             <div className="social-links">
//               <a href={data?.facebook} target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="https://wa.me/5493764221063" target="_blank" rel="noopener noreferrer" title="WhatsApp">
//   <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '40px', height: '40px' }} />
// </a>

//               <a href={data?.instagram} target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <a href={data?.youtube} target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-youtube"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="contact-map">
//           <iframe
//             title="Ubicación de Toledo Consultora IT"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.261900230452!2d-55.9518657477621!3d-27.367535016477795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457bdf666326c87%3A0xf2d3d831576ad4b1!2sC.%2052%2022%2C%20N3301%20Posadas%2C%20Misiones!5e0!3m2!1ses!2sar!4v1732100062688!5m2!1ses!2sar"
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

