import React, { Component } from 'react';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem, Navbar, NavbarBrand, Input, Form, FormGroup, Button } from 'reactstrap';

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
      items: [],
      name: ""
    }
  }
  // AJAX call to display all items
  componentDidMount() {
    axios.get('/api/items')
      .then(response => {
        this.setState({
          isLoading: true,
          items: response.data
        })
      })
      
  }
  // POST request to add new item
  onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: this.state.name.trim()
    }
    axios.post('/api/items', newItem)
      .then(res => {
        document.getElementById("item").value = "";
        this.setState(state => ({
          items: [{name:res.data.name}, ...state.items],          
        }))               
      })    
  }
  // Deleting an item
  deleteItem = (id) => {
    axios.delete(`http://localhost:5000/api/items/${id}`)
      .then(res => {
        this.setState({
          // Returning new state by filter method
          items: this.state.items.filter(item => item._id !== id)
        })
      })
  }

  updateItem = (id) => {
    axios.put(`http://localhost:5000/api/items/${id}`)
      .then(res => {
        this.setState({ ...this.state})
      })
  }
  
  render() {
    const { items, error, isLoading } = this.state;
    if (error) {
      return <div>Error: {error}</div>
    } else if ( !isLoading) {
      return <div>Loading...</div>
    } else {
      return (
        <Container>
          <Navbar color="dark" className="header">
            <Container>
              <NavbarBrand>Todo List ({items.length})</NavbarBrand>
            </Container>
          </Navbar> 
          <ListGroup>
            <Container>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input required
                  type="text"
                  name="name"
                  id="item"
                  placeholder="What's next on your mind..."
                  onChange ={(e) => this.setState({ name: e.target.value})}
                />                 
              </FormGroup>
            </Form>            
            <Container>          
              {items.map(item => ( 
                <ListGroupItem key={item._id}>                    
                  <Input addon type="checkbox"  className={item.completed ? `complete` : `items`} onClick={this.updateItem.bind(this, item._id)}  />                    
                  <label className="strikethrough" key={item._id}>{item.name}</label>
                  <Button
                    style={{ float: 'right'}}
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.deleteItem.bind(this, item._id)}
                  >
                    &times;
                  </Button>
                </ListGroupItem>              
              ))}
            </Container>  
            </Container>             
          </ListGroup>
        </Container>      
      )
    }
  };
}

export default ItemsList;