import React from "react";
import "../Home/Home.css"
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";

import slider from "./slider.png"
import WhatsappFloat from "../../Components/WhatsappFloat/WhatsappFloat";

const Home = () => {
  return (
    <div>
      <img src={slider} alt="" className="slider"/>
      <h1 className="home-title">Nuestros productos</h1>
      
      <ItemListContainer />
    </div>
  );
};

export default Home;
