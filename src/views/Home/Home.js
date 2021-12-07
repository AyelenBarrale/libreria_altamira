import React, { useState, useEffect } from "react";
import "../Home/Home.css";
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";

import { db } from "../../firebase";

const Home = () => {
  const [portadas, setPortadas] = useState([]);

  useEffect(() => {
    (async () => {
      let sliders = await db
        .collection("sliders")
        .get();
      setPortadas(sliders.docs.map((item) => ({ id: item.id, ...item.data() })));
    })();
  }, []);

  return (
    <div>
      {portadas.map((item) => (
        <div key={item.id}>
          <img src={item.imagen} alt='' className='slider' />
        </div>
      ))}
      <h1 className='home-title'>Nuestros productos</h1>

      <ItemListContainer />
    </div>
  );
};

export default Home;
