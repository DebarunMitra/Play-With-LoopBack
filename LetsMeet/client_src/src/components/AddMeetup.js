import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';




class AddMeetup extends Component{

  constructor(props){
    super(props);
    this.state={
      userToken:''
    }
  }

  componentDidMount() {
                        // !localStorage.getItem("userToken")?this.props.history.push('/'):true
                        localStorage.getItem("userToken")
                          ? this.setState({
                              userToken: localStorage.getItem("userToken")
                            })
                          : this.setState({
                              userToken: ''
                            });
                      }

  addMeetup(newMeetup){
    console.log(this.state.userToken);

    // if (this.state.userToken!=='') {
      axios
        .request({
          method: "post",
          url: `http://localhost:3000/api/letsmeets?access_token=${this.state.userToken}`,
          data: newMeetup
        })
        .then(response => {
          this.props.history.push("/");
        })
        .catch(err =>{
          console.log(err);
          document.getElementById("authMsg").innerHTML="Access error";
        });
    // }

  }

  onSubmit(e){
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    }
    this.addMeetup(newMeetup);
    e.preventDefault();
  }

  render(){
    return (
     <div>
        <br />
       <Link className="btn grey" to="/">Back</Link>
       <h1>Add Meetup</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="city" ref="city" />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field">
            <input type="text" name="address" ref="address" />
            <label htmlFor="address">Address</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
        <p id="authMsg"></p>
      </div>
    )
  }
}

export default AddMeetup;
