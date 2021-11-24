import React from "react";
import "./Contacto.css";

import ContactForm from "../../Components/ContactForm/ContactForm.js";

const Contacto = () => {
  return (
    <div className='contacto-container'>
      <h2>Pongámonos en contacto</h2>
      <p className='contacto-txt'>
        Estamos a tu disposición, aguardando tu contacto. 
        <br></br>
        Podés escribirnos a
        través de este formulario o vía whatsapp. Elegí tu opción preferida y
        realizá tu consulta.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contacto;
