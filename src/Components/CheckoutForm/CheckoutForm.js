import React, { useState } from "react";
import Swal from 'sweetalert2';

import { useOrdersContext } from "../../Contexts/OrdersContext";
import "../CheckoutForm/CheckoutForm.css";

const CheckoutForm = () => {
  const { addOrdenInfo } = useOrdersContext();

  const initialState = {
    nombre: "",
    telefono: "",
    email: "",
  };

  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (values.nombre === "" || values.telefono === "" || values.email === "") {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos deben ser completados'
      })
    }
    addOrdenInfo(values);
    setValues({ ...initialState });
  };

  return (
    <div className='checkout-container'>
      <div className='checkout-titles'>
        <h2>A un click de tu pedido</h2>
        <p>Completá los datos solicitados y luego confirmá tu pedido</p>
      </div>
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
        <button type='submit' className='form-button'>
          Continuar
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
