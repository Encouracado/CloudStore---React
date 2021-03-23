import React, { useState } from 'react';
import './style.css'
import {NavLink} from 'react-router-dom'
import {GiBastet} from 'react-icons/gi';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

interface NavBarProps {
  title: String;
  link1: String;
  link2: String;
  link3: String;
}

const NavbarComponente: React.FC<NavBarProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [IsLoggedIn, setLogin] = useState(false);

  const Login = () => {
    if(IsLoggedIn){
      return <NavLink to="/logout" className="Separador" >Logout</NavLink>;
    }else{
          return  <NavLink to="/CriarConta"className="Separador" >Criar uma Conta</NavLink>
          
          
    }
  }
  

  return (
    <div>
      <Navbar  light expand="md">
        <NavbarBrand className="title" href="/"><GiBastet></GiBastet>{props.title}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/Pessoal" className="Separador">{props.link1}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/PequenasEmpresas" className="Separador">{props.link2}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/GrandesEmpresas" className="Separador">{props.link3}</NavLink>
            </NavItem>
          </Nav>
          <NavLink to="/login" className="Separador" >Login</NavLink>
          <NavLink to="/CriarConta"className="Separador" >Criar uma Conta</NavLink>
          <NavLink to="/logout" className="Separador" >Logout</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponente;


