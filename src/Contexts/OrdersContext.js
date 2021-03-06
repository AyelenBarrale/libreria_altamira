import React, { createContext, useContext, useState } from "react";

import { db } from "../firebase";
import { useCartContext } from "../Contexts/CartContext.js";

import firebase from "firebase/app";
import { callWapp } from "../Components/CheckoutForm/CheckOutFn"

export const OrdersContext = createContext({});
export const useOrdersContext = () => useContext(OrdersContext);

const OrdersProvider = ({ children }) => {
  const { cart, clearCart, reduceCart } = useCartContext();

  let paso = 1;
  const [pasos, setPasos] = useState(paso);

  const [keyId, setKeyId] = useState(0);
  const [buyerInfo, setBuyerInfo] = useState({});

  const clear = () => clearCart();

  const itemsCart = cart.map((cartItem) => {
    return {
      id: cartItem.id,
      nombre: cartItem.nombre,
      precio: cartItem.precio,
      quantity: cartItem.quantity,
    };
  });

  const addOrdenInfo = (values) => {
    setBuyerInfo(values);
    setPasos(2);
  };


  const addOrden = () => {
    db.collection("ordenes")
      .add({
        buyer: buyerInfo,
        items: itemsCart,
        date: firebase.firestore.FieldValue.serverTimestamp(),
        total: reduceCart,
      })
      .then((docRef) => {
        setKeyId(docRef.id);
        updateStock();
        setPasos(3);
        callWapp(docRef.id, buyerInfo.nombre); 
      })
      .then(() => {
        clear();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const updateStock = () => {
    itemsCart.forEach(async (elem) => {
      const product = await db.collection("libreria").doc(elem.id).get();
      const ProdStock = product.data().stock - elem.quantity;
      await db.collection("libreria").doc(elem.id).update({
        stock: ProdStock,
      });
    });
  };

  return (
    <OrdersContext.Provider
      value={{ addOrden, keyId, addOrdenInfo, pasos, setPasos }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;
