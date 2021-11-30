import React from "react";
import "../CheckoutForm/CheckoutForm.css";

import { useOrdersContext } from "../../Contexts/OrdersContext";
import { Link } from "react-router-dom";

const CheckOutId = () => {
  const { keyId } = useOrdersContext();

  return (
    <div className='checkout-container'>
      <div className='checkout-titles'>
        <h1>Código de pedido: {keyId} </h1>
        <p>¡Muchas gracias por realizar tu pedido!</p>
        <button className="form-button">
        <Link to='/'>Volver a Inicio</Link>
        </button>
      </div>
    </div>
  );
};

export default CheckOutId;
