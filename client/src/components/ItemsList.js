import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import AddItem from './AddItem';
import { Container, ListGroup, ListGroupItem, Input, Button } from 'reactstrap';

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
      items: [],
      name: ""
    };
  }

  allItems = () => {
    axios.get('/api/items')
    .then(response => {
      this.setState({
        isLoading: true,
        items: response.data
      }) 
      let completedItems = document.getElementsByClassName("complete");    
      for (let i = 0; i < completedItems.length; i++) {
        completedItems[i].checked = true;
      }     
    })
    
  }
  // AJAX call to display all items
  componentDidMount() {
    this.allItems();    
  }

  addItem = (input) => {
    this.setState(state => ({
      items: [input, ...state.items],
    }))
  }
  
  // Deleting an item
  deleteItem = (id) => {
    axios.delete(`/api/items/${id}`)
      .then(res => {
        this.setState({
          // Returning new state by filter method
          items: this.state.items.filter(item => item._id !== id)
        })
      })
  }  

  updateItem = (id, item) => {
    console.log(item);
    axios.post(`http://localhost:5000/api/items/${id}`, item)
      .then(res => {
        this.allItems();        
      })
  }

  render() {
    const { items, error, isLoading } = this.state;
    if (error) {
      return <div>Error: {error}</div>
    } else if (!isLoading) {
      return <div>Loading...</div>
    } else {
      return (
        <Container>
          <NavBar items={items}/>       
          <ListGroup>
            <Container>
              <AddItem addItem={this.addItem} />              
              <Container>
                {items.map(item => (
                  <ListGroupItem key={item._id}>
                    <Input addon type="checkbox" className={item.completed ? `complete` : `items`} onClick={this.updateItem.bind(this, item._id, {name: item.name, completed: !item.completed})} />
                    <label className="strikethrough"  key={item._id}>{item.name}</label>
                    <Button
                      style={{ float: 'right' }}
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


