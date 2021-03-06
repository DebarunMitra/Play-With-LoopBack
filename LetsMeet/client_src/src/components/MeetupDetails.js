import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class MeetupDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      details:''
    }
  }

  componentWillMount(){
    this.getMeetup();
    // !localStorage.getItem("userToken") ? this.props.history.push('/') : true
  }

  getMeetup(){
    let meetupId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/letsmeets/${meetupId}`)
    .then(response => {
      this.setState({details: response.data}, () => {
        console.log(this.state);
      })
  })
  .catch(err => console.log(err));
  }

  onDelete(){
    let meetupId = this.state.details.id;
    axios
      .delete(`http://localhost:3000/api/letsmeets/${meetupId}`)
      .then(response => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }

  render(){
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">
          Back
        </Link>
        <h1>{this.state.details.name}</h1>
        <ul className="collection">
          <li className="collection-item">City: {this.state.details.city}</li>
          <li className="collection-item">
            Address: {this.state.details.address}
          </li>
        </ul>
        {
          localStorage.getItem("userToken") ?
            <Link className="btn" to={`/letsmeets/edit/${this.state.details.id}`}>
              {" "}
              Edit
            </Link>
          : false
        }
        {
          localStorage.getItem("userToken") ?
            <button onClick={this.onDelete.bind(this)} className="btn red right">
              Delete
             </button>
            : false
        }
      </div>
    );
  }
}

export default MeetupDetails;
