import React, { Component } from "react";
import RegisterPage from "../../pages/Register/Register";
import connect from "react-redux";
import actions from "../../redux/auth";

class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password,
    };

    this.props.onRegister(user);
    
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    return (
      <>
        <form action="" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            placeholder="name"
          />
          <input name="email" type="email" placeholder="email" />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="password"
          />
          <button type="submit" onChange={handleChange}>
            register
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {};

export default connect(null, mapDispatchToProps)(RegisterForm);
