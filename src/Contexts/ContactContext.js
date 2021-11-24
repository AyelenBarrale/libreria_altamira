import React, { createContext, useState } from "react";
import firebase from "firebase/app";
import { db } from "../firebase";

export const ContactContext = createContext();
//export const useContactContext = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  //const [contactInfo, setContactInfo] = useState({});
  const [keyId, setKeyId] = useState(0);

  // const addContactInfo = (values) => {
  //   setContactInfo(values);
  // };


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
        //addContactInfo,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

