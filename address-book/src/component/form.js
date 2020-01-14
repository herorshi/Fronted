import React, { Component } from "react";

class FormComponent extends Component {
    state = {
        name:'',
        address:'',
    }
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.nameInput.value,this.addressInput.value)
    console.log(this.state);
    console.log(this.props);
    const { name,address } = this.state
    this.props.onSubmit({
        // name: name,
        // address:address
        name,
        address
    })
    this.clearForm();
  };

  changestate = state => (e) =>{
    this.setState({[state]:e.target.value})
  }
  clearForm = () =>{
      this.setState({name:'',address:''});
  }

  render() {
      const {name,address} = this.state;
    return (
      <div>
        <h2>Address Form</h2>
        <form action="">
          <div class="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              value={name}
              onChange={this.changestate("name")}
              className="form-control"
              id="name"
            />
            <label htmlfor="">Address</label>
            <input
              value={address}
              type="text"
              className="form-control"
              id="address"
              onChange={this.changestate("address")}
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.handleSubmit}
          >
              Create
          </button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
