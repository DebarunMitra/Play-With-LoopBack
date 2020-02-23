import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Logout extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     UserToken: '',
  //     email: '',
  //     pass: ''
  //   }

  //   this.handleInputChange = this.handleInputChange.bind(this);
  // }

  componentWillMount() {
    this.getLogout();
  }

  getLogout() {
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/Users/logout'
    }).catch(err => console.log(err));

    localStorage.clear();
    window.location = "http://localhost:3001/"

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

  render() {
    return (
      <div>
       <h6>logout...</h6>
      </div>
    )
  }
}

export default Logout;
