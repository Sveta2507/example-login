import React, { Component } from "react";
import { connect } from "react-redux";
import { operations } from "../../redux/auth";
import selectors from "../../redux/auth/selectors";

class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
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

    this.props.onRegister(newUser);

    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { name, email, password } = this.state;

    return (
      <>
        <form action="" onSubmit={handleSubmit}>
          <input
            value={name}
            name="name"
            type="text"
            onChange={handleChange}
            placeholder="name"
            required
          />
          <input
            value={email}
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
            required
          />
          <input
            value={password}
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="password"
            required
          />
          <button type="submit" onChange={handleChange}>
            register
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    // myStore: store.users,
    myStore: selectors.getAllUsers(store),
  };
};

const mapDispatchToProps = {
  onRegister: operations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
