import React from "react";
import logo from "./LA_ISOLOGOsinfondo.png";
import "./Navbar.css";

import CartWidget from "../Cart/CartWidget";

import { Link, useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = ({
  item1,
  item2,
  item3,
  subitem1,
  subitem2,
  subitem3,
  subitem4,
  subitem0,
  subitem5,
  subitem6,
  subitem7,
  subitem8,
  subitem9,
  subitem10,
}) => {
  const history = useHistory();

  const handleChange = (el) => {
    if (el.target.value) {
      history.push(`/categoria/${el.target.value}`);
    }
  };

  return (
    <><div className="topline"></div>
    <Navbar expand='lg' className='nav-container'>
        <Navbar.Brand>
          <Link to='/'>
            <img
              width='100'
              className='d-inline-block align-top'
              src={logo}
              alt='comarca de creadores logo' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <p className='buscar-txt'>{item1}</p>
            <select className='select-container' onChange={handleChange}>
              <option value='all'>{subitem0}</option>
              <option value='Escolar'>{subitem1} </option>
              <option value='Libros'>{subitem2} </option>
              <option value='Mochilas'>{subitem3} </option>
              <option value='Arte'>{subitem4} </option>
              <option value='Boligrafos'>{subitem5} </option>
              <option value='Oficina'>{subitem6} </option>
              <option value='Calculadoras'>{subitem7} </option>
              <option value='Globos Terraqueos'>{subitem8} </option>
              <option value='Parker'>{subitem9} </option>
              <option value='Posca'>{subitem10} </option>
            </select>
            <Link to='/nosotros' className='Link'>
              {item2}
            </Link>
            <Link to='/contacto' className='Link'>
              {item3}
            </Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Navbar></>
  );
};

export default NavBar;
