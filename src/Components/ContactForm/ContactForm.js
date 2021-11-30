import React, { useState, useContext } from "react";
import "../CheckoutForm/CheckoutForm.css"

import { ContactContext } from "../../Contexts/ContactContext";


const ContactForm = () => {

  const { addContact } = useContext(ContactContext);

  const initialState = {
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  };

  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (values.nombre === "" || values.email === "" || values.mensaje === "") {
      return alert("Completar todos los datos")
    }
    addContact(values);
    setValues({ ...initialState });
  };

  return (
    <div className='checkout-container'>
      <form className='form-container' onSubmit={handleOnSubmit}>
        <div>
          <input
            className='input-field'
            type='text'
            placeholder='Nombre y Apellido'
            onChange={handleOnChange}
            name='nombre'
            value={values.nombre}
            autoComplete='off'
          />
        </div>
        <div>
          <input
            className='input-field'
            type='text'
            placeholder='Teléfono'
            onChange={handleOnChange}
            name='telefono'
            value={values.telefono}
            autoComplete='off'
          />
        </div>
        <div>
          <input
            className='input-field'
            type='email'
            placeholder='E mail'
            onChange={handleOnChange}
            name='email'
            value={values.email}
            autoComplete='off'
          />
        </div>
        <div>
          <input
            className='input-field'
            type='text'
            placeholder='Mensaje'
            onChange={handleOnChange}
            name='mensaje'
            value={values.mensaje}
            autoComplete='off'
          />
        </div>
      
          <button type='submit' className='form-button mt-4'>
            Enviar
          </button>
        
      </form>
    </div>
  );
};

export default ContactForm;
