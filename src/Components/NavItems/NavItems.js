import React from 'react';
import { connect } from 'react-redux';
import { Container, Nav, Ul,
  NavbarDropdownContent, NavbarDropdown, Li } from './styles';
import NavItem from '../NavItem';


const NavItems  = function ({clicked, isAuth}) {
  return (
      <Nav>
        { isAuth ? (
          <Ul>            
            <NavItem clicked={clicked} link='/list-receipt'>Comprovantes</NavItem>
            <NavItem clicked={clicked} link='/'>Home</NavItem>            
            <NavItem clicked={clicked} link='/logout'>Sair</NavItem> 
          </Ul>
        ) : (
          <Ul>
            <NavItem clicked={clicked} link='/login'>Entrar</NavItem>
            <NavItem clicked={clicked} link='/'>Home</NavItem>            
          </Ul>
        )}
        

      </Nav>
  );
};

const mapStateToProps = state => ({
  isAuth : state.auth.isLogged
});


export default connect(
  mapStateToProps
)(NavItems);
