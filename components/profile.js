import React, { Component } from "react";
import jwt from "jwt-decode";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt(token);
    this.setState({
      email: decoded.email
    });
  }
  render() {
    return <h1>Profile</h1>;
  }
}

export default Profile;
