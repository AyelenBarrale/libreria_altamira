import React from "react";
import "./App.css";

import CartProvider from "./Contexts/CartContext";
import OrdersProvider from "./Contexts/OrdersContext";

import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./views/Home/Home";
import Contacto from "./views/Contacto/Contacto";
import Nosotros from "./views/Nosotros/Nosotros";
import Cart from "./Components/Cart/Cart";
import CheckOut from "./views/CheckOut/CheckOut";

const App = () => {
  return (
    <CartProvider>
      <OrdersProvider>
        <Router>
          <div className='main-container'>
            <NavBar
              item1={"Categoría:"}
              item2={"Nosotros"}
              item3={"Contacto"}
              subitem0={"Todos"}
              subitem1={"Escolar"}
              subitem2={"Libros"}
              subitem3={"Mochilas"}
              subitem4={"Arte"}
              subitem5={"Boligrafos"}
              subitem6={"Oficina"}
              subitem7={"Calculadoras"}
              subitem8={"Globos terraqueos"}
              subitem9={"Parker"}
              subitem10={"Posca"}
            />
          </div>

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/categoria/:categoryName'>
              <ItemListContainer />
            </Route>
            <Route path='/nosotros' component={Nosotros} />
            <Route path='/contacto' component={Contacto} />

            <Route path='/item/:id'>
              <ItemDetailContainer />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/checkout' component={CheckOut} />
            <Route path='*'>
              <h1>404 - Page not found</h1>
            </Route>
          </Switch>

          <div>
            <Footer />
          </div>
        </Router>
      </OrdersProvider>
    </CartProvider>
  );
};

export default App;
