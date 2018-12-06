// import axios from 'axios';

// module.exports = {
//   // POST request to add new item
//   onSubmit: (e) => {
//     e.preventDefault();
//     if (!handleValidation()) {
//       alert("Error: Please enter letters for your new task, no spaces in the end please");
//       document.getElementById("item").value = "";
//       return
//     }
//     const newItem = {
//       name: this.state.name
//     }
//     axios.post('/api/items', newItem)
//       .then(res => {
//         document.getElementById("item").value = "";
//         this.setState(state => ({
//           items: [res.data, ...state.items], // name: res.data.name 
//         }))
//       })
//   }
// }

// const handleValidation = () => {
//   let inputText = this.state.name;
//   let errors = {};
//   let formIsValid = true;
//   //Name
//   if (!inputText) {
//     formIsValid = false;
//     errors["name"] = "Cannot be empty";
//   }
//   if (typeof inputText === "undefined" || inputText === null || !inputText.match(/^\w+( \w+)*$/)) {
//     formIsValid = false;
//     errors["name"] = "Only letters";
//   }
//   this.setState({ errors: errors });
//   return formIsValid;
// }

