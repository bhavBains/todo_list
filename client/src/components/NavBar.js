import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, Input } from 'reactstrap';

class NavBar extends Component {
  hideItems = (e) => {
    // e.preventDefault();
    // document.getElementsByClassName("complete").parentElement.style.display="none";
  }

  render() {
    return (
      <Navbar color="dark" className="header">
        <Container>
          <NavbarBrand>Todo List ({this.props.items.length})</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Input type="checkbox" onClick={this.hideItems} /><label for="checkbox">Hide completed tasks</label>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;