import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    
    <div className='footer-container'>
      <div className='footer-left'>
        <i className='fas fa-map-marker-alt'></i>
        <p className='txt-footer'>
          Dorrego 2749 - Olavarria <br></br>
          Buenos Aires, Argentina
        </p>
      </div>
      <div className='footer-center'>
        <div className='footer-right-1'>
          <p className='txt-footer right'>Contactanos</p>
          <a
            href='https://wa.me/542284581210?text=¡Hola!%20Quisiera%20hacerles%20una%20consulta'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-whatsapp'></i>
          </a>
        </div>
      </div>
      <div className='footer-right'>
        <div className='footer-right-1'>
          <p className='txt-footer right'>Instagram </p>
          <a
            href='https://www.instagram.com/libreriaaltamira/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-instagram'></i>
          </a>
        </div>
        <div className='footer-right-2'>
          <p className='txt-footer right'>Facebook </p>
          <a
            href='https://www.facebook.com/LibreriAltamira/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-facebook'></i>
          </a>
        </div>
      </div>
    </div>
  

  );
};

export default Footer;
