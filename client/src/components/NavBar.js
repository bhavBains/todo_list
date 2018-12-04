import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, Input } from 'reactstrap';

class NavBar extends Component {
 
  hideItems = (e) => {
    const elements = document.getElementsByClassName("complete");   
    if(e.target.checked) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].parentElement.style.display = "none";
      } 
    }    
  }

  render() {
    return (
      <Navbar color="dark" className="header">
        <Container>
          <NavbarBrand>Todo List ({this.props.items.length})</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Input type="checkbox" onClick={this.hideItems} /><label htmlFor="checkbox">Hide completed tasks</label>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;