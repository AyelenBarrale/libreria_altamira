import React from "react";
import "./../WhatsappFloat/WhatsappFloat.css";

const WhatsappFloat = () => {
  return (
    <div>
      <a
        href='https://wa.me/542284581210?text=¡Hola!%20Quisiera%20ponerme%20en%20contacto%20y%20consultarles%20por%20sus%20productos'
        class='float'
        target='_blank'
        rel='noreferrer'
      >
        <i class='fa fa-whatsapp my-float'></i>
      </a>
    </div>
  );
};

export default WhatsappFloat;
