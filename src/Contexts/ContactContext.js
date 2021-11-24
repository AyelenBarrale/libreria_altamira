import React, { createContext, useState } from "react";
import firebase from "firebase/app";
import { db } from "../firebase";

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [keyId, setKeyId] = useState(0);

  const addContact = (values) => {
    db.collection("consultas")
      .add({
        contacto: values,
        date: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        setKeyId(docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <ContactContext.Provider
      value={{
        addContact,
        keyId,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
