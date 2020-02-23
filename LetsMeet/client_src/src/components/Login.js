import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserToken: '',
      email: '',
      pass: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // componentWillMount() {
  //   this.getLoginDetails();
  // }

  getLoginDetails() {
    console.log(this.state.pass);

    axios.request({
        method: 'post',
        url: 'http://localhost:3000/api/Users/login',
        data: { "email": this.state.email, "password": this.state.pass}
      })
      .then(response => {
        this.setState({
          userToken: response.data.id,
        }, () => {
          localStorage.setItem("userToken",JSON.stringify(this.state.UserToken));
            // this.props.history.push('/');
            window.location = "http://localhost:3001/"
        });
      })
      .catch(err => console.log(err));
  }

  // editMeetup(newMeetup) {
  //   axios.request({
  //     method: 'put',
  //     url: `http://localhost:3000/api/letsmeets/${this.state.id}`,
  //     data: newMeetup
  //   }).then(response => {
  //     this.props.history.push('/');
  //   }).catch(err => console.log(err));
  // }

  onSubmit(e) {
    this.getLoginDetails();
    e.preventDefault();
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">Back</Link>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="email" name="email" ref="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
            <label htmlFor="email"></label>
          </div>
          <div className="input-field">
            <input type="password" name="pass" ref="password" placeholder="Password" value={this.state.pass} onChange={this.handleInputChange} />
            <label htmlFor="city"></label>
          </div>
          <input type="submit" value="Login" className="btn" />
        </form>
      </div>
    )
  }
}

export default Login;
