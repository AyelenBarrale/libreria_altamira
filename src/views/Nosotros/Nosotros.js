import React from "react";
import "./../Nosotros/Nosotros.css";
import logo from "../Nosotros/LA_logo.png";

const Nosotros = () => {
  return (
    <>
      <div className='page-nosotros-container'>
        <div className='nosotros-descripcion'>
          <h2>Librería Altamira</h2>
          <p className='nosotros-txt'>
            El lugar para encontrar la mayor variedad y calidad de artículos
            escolares, de oficina y libros.
            <br></br>
            En cada momento de tu día, siempre estamos junto a vos.
            <br></br>
            En tus cuadernos, libros o dibujos, en la escuela, oficina y en tu
            casa acompañándote hace 20 años.
          </p>
          <p className='nosotros-txt'>
            Visitanos en nuestro local o consultanos por whatsapp por ventas
            minoristas y mayoristas.
          </p>
        </div>
        <div className='logo-img'>
          <img src={logo} alt='libreria-altamira' className='logo-body' />
        </div>
      </div>
    </>
  );
};

export default Nosotros;
