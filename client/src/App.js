import React, { Component } from 'react';
import './App.css';
import ItemsList from './components/ItemsList';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="app main-div">
        <Container>
          <ItemsList />
        </Container>        
      </div>
    );
  }
}

export default App;
