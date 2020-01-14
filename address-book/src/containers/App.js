import React, { Component } from "react";
// import Form from "../component/form";
// import Contacts from "../component/Contacts";
import {Form,Contacts} from "../component/";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  
  state = {
    contacts: [
      {
        name: "somchai haha",
        address: "123/456",
        name: "Metasit",
        address: "299"
      }
    ]
  };
  createContact = (contact) => {
    this.setState({
      contacts:[...this.state.contacts,contact]
       
      
    })
  }
  render() {
    return (
      <div className="container">
        <Form onSubmit = {this.createContact}  />
        <hr />
        {/* <Contacts contacts={this.state.contacts} /> */}
        <Contacts {...this.state} />
      </div>
    );
  }
}

export default App;
