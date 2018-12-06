import React, { Component } from 'react';
import axios from 'axios';
import { Input, Form, FormGroup } from 'reactstrap';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        _id: 0,
        name: "",
        completed: false
      },
      name: "",
      errors: null      
    }   
  }

  handleValidation = () => {
    let inputText = this.state.name;
    let errors = {};
    let formIsValid = true;
    
    if (!inputText) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }
    if (typeof inputText === "undefined" || inputText === null || !inputText.match(/^\w+( \w+)*$/)) {
      formIsValid = false;
      errors["name"] = "Only letters";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  // POST request to add new item
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.handleValidation()) {
      alert("Error: Please enter letters for your new task, no spaces in the end please");
      document.getElementById("item").value = "";
      return
    }
    const newItem = {
      name: this.state.name
    }
    axios.post('/api/items', newItem)
      .then(res => {
        document.getElementById("item").value = "";
        this.setState(state => ({
          item: res.data
        }))
        this.props.addItem(this.state.item);
      })
  }

  render () {
    return (
      <Form onSubmit={this.onSubmit}>
      <FormGroup>
        <Input required
          type="text"
          name="name"
          id="item"
          placeholder="What's next on your mind..."
          onChange={(e) => this.setState({ name: e.target.value })}
        />
      </FormGroup>
    </Form>
    )
  };
}

export default AddItem;