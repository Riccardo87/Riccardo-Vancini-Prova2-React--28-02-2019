import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import Logo from './Component/logo.svg'
import '../src/App.css';


class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <img className='logopng' src={Logo}></img>
          <NavbarBrand href="https://www.google.com">Torna al sito</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Menu