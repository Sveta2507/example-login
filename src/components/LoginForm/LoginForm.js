import React, { Component } from "react";
import { connect } from "react-redux";
import { operations } from "../../redux/auth";
import selectors from "../../redux/auth/selectors";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    console.log(event.target.value);
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = this.state;
    const newUser = {
      email,
      password,
    };
    this.setState({ email: "", password: "" });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { email, password } = this.state;
    return (
      <>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <input value={email} type="text" name="email" required onChange="" />
          <input
            type="text"
            name="password"
            value={password}
            required
            onChange={(evt) => handleChange(evt)}
          />
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
  onLogin: operations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
